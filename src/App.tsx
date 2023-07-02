import React from 'react';

import './App.css';
import Html from "./component/html/HTML";

function App() {

    // const [users, setUsers] = useState([]);
    //
    // useEffect(() => {
    //     getUsers()
    // }, [])
    //
    // async function getUsers() {
    //     try {
    //         const response = await axios.get('http://localhost:5000/users')
    //       console.log(response.data);
    //         setUsers(response.data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

  return (
    // <div className="App">
    //     {
    //         users.map(user => {console.log(user);
    //             return <div>user.email</div>})
    //     }
    // </div>

      <Html/>
  );
}

export default App;
