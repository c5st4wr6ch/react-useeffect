import React from 'react';
import Thumbnail from '../components/Thumbnail';

export default function Video({ video }) {
	const video_url = "https://www.youtube.com/embed/" + video.id;
  return (
    <div>
      {/* <Thumbnail video={video} /> */}
			<iframe
				title="youtube"
				width="420"
				height="315"
				src={video_url}>
			</iframe>
      {/* <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a> */}
      {/* <LikeButton video={video} /> */}
    </div>
  );
}