import React, { useState } from 'react';
import PostCreate from './PostCreate';

export default () => {
    return <div className='container'>
        <h1>Create Post</h1>
        <hr />
        <PostCreate />
    </div>;
};
