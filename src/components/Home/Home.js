import React from 'react';
import { fakeData } from "./fakeData";
import PostCard from '../Card/PostCard';
import { WritePost, Search, ThumbsUp, ThumbsDown, Logout } from '../../assets/HeroIcons';
import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory();

    const writePost = () => {
        history.push("/modal");
    }

    const search = () => {

    }

    const likedPost = () => {

    }

    const dislikedPost = () => {

    }

    const logout = () => {

    }

    return (
        <main>
            <section>
                {
                    fakeData.map(data => <PostCard props={data} />)
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
        </main>
    );
};

export default Home;