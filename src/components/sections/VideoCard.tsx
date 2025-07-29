import React from 'react';

export const VideoCard: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
            <div className="p-8 lg:p-12 relative overflow-hidden">
                {/* Video Player */}
                <div className="relative z-10 aspect-video rounded-xl overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        poster="/video-poster.jpg"
                    >
                        <source src="/SSYouTube.online_Product Demo Video  SaaS Explainer Video  Infinity_720p.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};