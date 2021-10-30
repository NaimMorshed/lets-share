import React from 'react';
import LongMenu from '../../styles/Material/LongMenu';
import './PostCard.css';

const PostCard = ({ props }) => {
    return (
        <div className="App-header2">
            <section className="my-3 bg-gray-300 text-black p-5 rounded-xl parent">
                <header className="flex justify-between h-14 mb-5">
                    <div className="flex">
                        <img className="rounded-full object-cover" src={props.userPhoto} alt="user" width="50px" height="100%" />
                        <div className="flex flex-col justify-center ml-2">
                            <h5 className="font-bold text-xl">{props.userName}</h5>
                            <span>{props.postingDate} at {props.postingTime}</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <LongMenu props={props} />
                    </div>
                </header>
                <main>
                    {
                        props.caption !== '' &&
                        <div className="bg-gray-100 my-5 px-5 rounded-lg">
                            <p className="text-justify py-3">{props.caption}</p>
                        </div>
                    }
                    <div>
                        <img className="w-full rounded mb-5" src={props.image} alt="" />
                    </div>
                    <div className="flex justify-around items-center social-icons">
                        <div>
                            <button>👍</button>
                            <span className="relative top-1 left-1 text-lg text-green-800 font-serif">{props.likes}</span>
                        </div>
                        <div>
                            <button>👎</button>
                            <span className="relative left-1 text-lg text-red-800 font-serif">{props.dislikes}</span>
                        </div>
                        <div>
                            <button>✍</button>
                            <span className="relative left-1 text-lg top-1 font-serif">{props.comment}</span>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default PostCard;