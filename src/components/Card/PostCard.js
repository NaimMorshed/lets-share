import React from 'react';
import './PostCard.css';

const PostCard = ({ props }) => {
    return (
        <div className="App-header2">
            <div className="my-3 bg-gray-300 text-black p-5 rounded-xl parent">
                <header className="flex h-14">
                    <img className="rounded-full" src={props.userPhoto} alt="user" width="50px" height="100%" />
                    <div className="flex flex-col justify-center ml-2">
                        <h5>{props.userName}</h5>
                        <span><small>October 6 at 12:59 PM</small></span>
                    </div>
                </header>
                <main>
                    <div className="bg-gray-100 my-5 px-5 rounded-lg">
                        <p className="text-justify py-3">{props.caption}</p>
                    </div>
                    <div>
                        <img className="w-full rounded mb-5" src={props.image} alt="" />
                    </div>
                    <div className="flex justify-around items-center social-icons">
                        <button>😄</button>
                        <button>😭</button>
                        <button>✍</button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PostCard;