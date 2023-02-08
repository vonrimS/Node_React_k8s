import React, { useState, useEffect } from 'react';


export default ({ comments }) => {
    const renderedComments = comments.map(comment => {
        let content;
        // reflect comment status in GUI
        if (comment.status === 'approved') {
            content = comment.content;
        }
        if (comment.status === 'pending') {
            content = '...comment is awaiting moderation';
        }
        if (comment.status === 'rejected') {
            content = '...comment is rejected';
        }
        return <li key={comment.id}>{content}</li>;
    });

    return <ul>
        {renderedComments}
    </ul>;

};

