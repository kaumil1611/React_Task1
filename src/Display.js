import React from 'react';
import './userIteam.css';
const Display = ({userData}) =>{
    if(!userData){
        return <div>Nothing Data</div>;
    }
    return (        
            <div className="ui cards  main_card ui_main_card" id="maincard">
                <div className="card" id="userCard">
                <div className="content">
                     <div className="header" id="userDataId">{userData.id}</div>
                     <div className="meta">{userData.completed.toString()}</div>
                     <div className="description">
                        {userData.title}
                     </div>
                 </div>
                </div>
            </div>
        
        // <div>
        //     <h1>{userData.title}</h1>
        // </div>
        );
}

export default Display;