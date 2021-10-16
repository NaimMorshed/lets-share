import React from 'react';

const PostCard = ({props}) => {
    return (
        <div>
            <header>
                <div className="user-img-div">
                    <img src={props.userPhoto} alt=""/>
                </div>
                <div>
                    <h5>{props.userName}</h5>
                    <span>October 6 at 12:59 PM</span>
                </div>
            </header>
        </div>
    );
};

export default PostCard;