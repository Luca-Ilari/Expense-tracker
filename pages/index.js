import { useState } from 'react';
import HomePage from '../components/HomePage';
import Login from '../components/Login';

/*  TO-DO
Date format of transaction to dd-mm-yyyy 
glitchy page refresh when transaction is added
Tag name MUST BE DIFFERENT when created
Password encryption
*/

function Index() {
    const [userName, setUserName] = useState();
    const [userId, setUserId] = useState();

    function renderIndex() {
        if (userName) {
            return (
                <>
                    <HomePage userId={userId} />
                </>
            )
        }
        else {
            return (
                <>
                    <Login setUserName={setUserName} setUserId={setUserId} />
                </>
            )
        }
    }

    return renderIndex();
}
export default Index
