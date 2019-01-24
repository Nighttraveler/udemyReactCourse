import  React from 'react';

import VideoItem from './VideoItem';

class VideoList extends React.Component{


    render(){
        return (
            <div className="ui relaxed divided list" >
                {(this.props.videos.map)(
                    video =>{ return <VideoItem key={video.id.videoId}
                                                 onVideoSelect={this.props.onVideoSelect}
                                                 video={video}/>}
                )}
            </div>
        )

    }

}

export default VideoList;