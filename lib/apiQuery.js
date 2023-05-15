export async function tryGetTransactions(walletId) {
  try {
    return await getTransactions(walletId)
  } catch (error) {
    return undefined
  }
}

async function getTransactions(walletId) {
  const response = await fetch('/api/get_transactions', {
    method: 'POST',
    body: JSON.stringify({
      walletId: walletId,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const body = await response.json()
  return body;
}


export async function getUserTags(userId) {
  const response = await fetch('/api/get_tags', {
    method: 'POST',
    body: JSON.stringify({
      userId: userId,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const body = await response.json()
  return body;
}

export async function addTransaction(date, amount, description, wallet_id, tag_id) {
  const response = await fetch('/api/add_trasaction', {
    method: 'POST',
    body: JSON.stringify({
      date: date,
      amount: amount,
      description: description,
      wallet_id: wallet_id,
      tag_id: tag_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  const body = await response.json()
}

export async function changeTransactionTag(transaction_id, tag_id){
  const response = await fetch('/api/edit_transaction/change_selected_tag', {
    method: 'POST',
    body: JSON.stringify({
      transaction_id: transaction_id,
      tag_id: tag_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export async function asyncChangeWalletName(wallet_name, wallet_id){
  const response = await fetch('/api/edit_transaction/change_wallet_name', {
    method: 'POST',
    body: JSON.stringify({
      wallet_id: wallet_id,
      wallet_name: wallet_name
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }) 
}