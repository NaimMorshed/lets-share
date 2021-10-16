import React from 'react';
import { fakeData } from "./fakeData";
import PostCard from '../Card/PostCard';

const Home = () => {
    return (
        <div>
            {
                fakeData.map(data => <PostCard props={data} />)
            }
        </div>
    );
};

export default Home;