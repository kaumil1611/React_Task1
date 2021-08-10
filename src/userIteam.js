import React from 'react';
import './userIteam.css';
const UserIteam = ({userdata,onDataSelected}) => {
   
    return(
            // <div onClick={() =>onDataSelected(data)} className="video-item item">
            //     <img className="ui small image" src={thumbnails.high.url} alt={description}  />
            //     <div className="content">
            //         <div className="header">{video.snippet.title}</div>
            //     </div>
            // </div>
            <div className="ui cards  main_card" id="maincard" onClick={() => {onDataSelected(userdata)} }>
                <div className="card" id="userCard">
                <div className="content card" key={userdata.id}>
                     <div className="header" id="userDataId">{userdata.id}</div>
                     <div className="meta">{userdata.completed.toString()}</div>
                     <div className="description">
                        {userdata.title}
                     </div>
                 </div>
                </div>
            </div>
                   
    );
}

export default UserIteam;