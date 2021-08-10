import React,{useState} from 'react';
import UserDetails from './userDetails';
import Display from './Display';

const App = () => {
    const User_Data = [{
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    }];

    const [userData,SetUserData] = useState('');
    
    const onDataSelected = (e) =>{
        SetUserData(e);
    }
    
    return (
        <div style={{backgroundColor:'#a3a3a3'}}>
            <h2>Show Data in Top : Demo </h2>
            <Display userData={userData} />
            <UserDetails onUserData={User_Data} onDataSelected={onDataSelected} />
        </div>
    );
}

export default App;