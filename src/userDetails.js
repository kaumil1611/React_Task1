import React from 'react';

import UserIteam from './userIteam';
const UserDetails = ({onUserData,onDataSelected}) =>{
     console.log(onUserData);

    const response =  onUserData.map((userdata) => {
            return <UserIteam key={userdata.id} userdata={userdata} onDataSelected={onDataSelected}/> ;
        });
    
    
    return(
            <div className="main_Data" style={{margin : '25px'}}>
                {response}
            </div>
    );
}

export default UserDetails;