import React, { useContext } from 'react';
import { fakeData } from "./fakeData";
import PostCard from '../Card/PostCard';
import { WritePost, Search, ThumbsUp, ThumbsDown, Logout } from '../../assets/HeroIcons';
import { useHistory } from 'react-router';
import { ModalUi } from '../../styles/Material/ModalUi';
import { UserContext } from '../../App';
import { db } from '../../Firebase/Firestore';

const Home = () => {
    const history = useHistory();
    const [
        auth, setAuth,
        modalOpen, setModalOpen,
        dialogBox, setDialogBox,
        backdrop, setBackdrop
    ] = useContext(UserContext);

    const [data, setData] = React.useState([]);

    const writePost = () => {
        setModalOpen(true);
    }

    const search = () => {

    }

    const likedPost = () => {

    }

    const dislikedPost = () => {

    }

    const logout = () => {

    }

    db.collection("Public-post")
        .get()
        .then(querySnapshot => {
            querySnapshot
                .forEach(doc => {
                    console.log(doc.data());
                });
        });



    return (
        <main>
            <section>
                {
                    fakeData.map(data => <PostCard props={data} key={data.caption} />)
                }
            </section>
            <section className="fixed inset-y-0 right-0 w-16l flex flex-col justify-center items-center w-12">
                <div
                    onClick={writePost}
                    className="p-1 extendable-sidebar flex items-center bg-gray-300 rounded-l-xl mb-2">
                    <WritePost />
                    <span className="sidebar-child font-bold absolute left-16">Write Post</span>
                </div>
                <div
                    onClick={search}
                    className="p-1 extendable-sidebar flex items-center bg-gray-300 rounded-l-xl mb-2">
                    <Search />
                    <span className="sidebar-child font-bold absolute left-16">Search</span>
                </div>
                <div
                    onClick={likedPost}
                    className="p-1 extendable-sidebar flex items-center bg-gray-300 rounded-l-xl mb-2">
                    <ThumbsUp />
                    <span className="sidebar-child font-bold absolute left-16">Liked Post</span>
                </div>
                <div
                    onClick={dislikedPost}
                    className="p-1 extendable-sidebar flex items-center bg-gray-300 rounded-l-xl mb-2">
                    <ThumbsDown />
                    <span className="sidebar-child font-bold absolute left-16">Disliked Post</span>
                </div>
                <div
                    onClick={logout}
                    className="p-1 extendable-sidebar flex items-center bg-gray-300 rounded-l-xl">
                    <Logout />
                    <span className="sidebar-child font-bold absolute left-16">Logout</span>
                </div>
            </section>
            <ModalUi />
        </main>
    );
};

export default Home;