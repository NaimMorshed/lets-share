import React from 'react';

const PostCard = ({ props }) => {
    return (
        <div className="App-header">
            <div className="my-3 bg-gray-300 text-black p-5 rounded-xl max-w-screen-sm">
                <header className="flex h-14">
                    <img className="rounded-full" src={props.userPhoto} alt="" width="50px" height="100%" />
                    <div className="flex flex-col justify-center ml-2">
                        <h5>{props.userName}</h5>
                        <span><small>October 6 at 12:59 PM</small></span>
                    </div>
                </header>
                <main>
                    <div className="bg-gray-100 my-5 px-5 rounded-lg">
                        <p>{props.caption}</p>
                    </div>
                    <div>
                        <img src={props.image} alt="" />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PostCard;