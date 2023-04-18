import { useState } from 'react';
import Login from "../components/login"
import Main from "../components/main"

/*  TO-DO
Date format
glitchy page refrash when transaction is added
add transactions must check if all fields are filled
Tag name MUST BE DIFFERENT when created
Password encryption
*/

function HomePage() {
    const [userName, setUserName] = useState();
    const [userId, setUserId] = useState(2);

    function renderIndex() {
        if (userName) { 
            return(
            <>
                <Main userId={userId}/>
            </>
            )
        }
        else {
            return <Login setUserName={setUserName} setUserId={setUserId}/>
        }
    }
    
    return renderIndex();
}
export default HomePage
