import React from 'react';
import './Profile.css';

const picture = {
    url: String,
    size: Number,
}

export default function Profile() {
    return (
        <div className="profile-container">
            <video
                className="avatar"
                src="https://i.imgur.com/2TOQgBH.mp4"
                style={{
                width: 180,
                height: 180,
                }}
                autoPlay
                loop
            />
        </div>
    );
}