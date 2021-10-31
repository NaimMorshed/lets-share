import React, { useContext } from 'react';
import LongMenu from '../../styles/Material/LongMenu';
import './PostCard.css';
import { realtimeDB } from '../../Firebase/Realtime';
import { UserContext } from '../../App';
import { Chat, ThumbsUpHollow, ThumbsUpFilled, ThumbsDownHollow, ThumbsDownFilled } from '../../assets/HeroIcons';

const PostCard = ({ props }) => {
    const [auth, setAuth] = useContext(UserContext);

    const like = () => {
        realtimeDB.ref('Public-post').child(props.id)
            .update({
                userName: props.userName,
                userEmail: props.userEmail,
                userPhoto: props.userPhoto,
                caption: props.caption,
                image: props.image,
                postingDate: props.postingDate,
                postingTime: props.postingTime,
                likes: props.likes + 1,
                dislikes: props.dislikes,
                comment: props.comment,
                likedUsers: [
                    auth.email
                ],
                dislikedUsers: props.dislikedUsers
            })
    }

    const unlike = () => {
        realtimeDB.ref('Public-post').child(props.id)
            .update({
                userName: props.userName,
                userEmail: props.userEmail,
                userPhoto: props.userPhoto,
                caption: props.caption,
                image: props.image,
                postingDate: props.postingDate,
                postingTime: props.postingTime,
                likes: props.likes - 1,
                dislikes: props.dislikes,
                comment: props.comment,
                likedUsers: [""],
                dislikedUsers: props.dislikedUsers
            })
    }

    const undislike = () => {
        realtimeDB.ref('Public-post').child(props.id)
            .update({
                userName: props.userName,
                userEmail: props.userEmail,
                userPhoto: props.userPhoto,
                caption: props.caption,
                image: props.image,
                postingDate: props.postingDate,
                postingTime: props.postingTime,
                likes: props.likes,
                dislikes: props.dislikes - 1,
                comment: props.comment,
                likedUsers: props.likedUsers,
                dislikedUsers: [""]
            })
    }

    const dislike = () => {
        realtimeDB.ref('Public-post').child(props.id)
            .update({
                userName: props.userName,
                userEmail: props.userEmail,
                userPhoto: props.userPhoto,
                caption: props.caption,
                image: props.image,
                postingDate: props.postingDate,
                postingTime: props.postingTime,
                likes: props.likes,
                dislikes: props.dislikes + 1,
                comment: props.comment,
                likedUsers: props.likedUsers,
                dislikedUsers: [
                    auth.email
                ]
            })
    }

    const chat = () => {
        // const arr = [
        //     "Hello",
        //     "World",
        //     "Tintin"
        // ]
        // const i = arr.indexOf("World");
        // arr.splice(i, 1);
        // console.log(arr);

        const arr = [{...props.likedUsers}]
    }

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
                            {
                                props.likedUsers.includes(auth.email) ?
                                    <button onClick={unlike}><ThumbsUpFilled /></button> :
                                    <button onClick={like}><ThumbsUpHollow /></button>

                            }
                            <span className="relative left-1 text-xl text-green-800 font-serif">{props.likes}</span>
                        </div>
                        <div className="relative top-2">
                            {
                                props.dislikedUsers.includes(auth.email) ?
                                    <button onClick={undislike}><ThumbsDownFilled /></button> :
                                    <button onClick={dislike}><ThumbsDownHollow /></button>

                            }
                            <span className="relative left-2 bottom-2 text-xl text-red-800 font-serif">{props.dislikes}</span>
                        </div>
                        <div className="relative top-1">
                            <button onClick={chat}><Chat /></button>
                            <span className="relative left-2 text-xl bottom-1 font-serif">{props.comment}</span>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    );
};

export default PostCard;