import  React from 'react';

const EMBED_YOUTUBE_URL = "https://www.youtube.com/embed/";

class VideoDetail extends React.Component{

    render(){

        if (!this.props.video){
            return <div>
                <div className="ui embed" >
                    <iframe title="youtube video player" src={EMBED_YOUTUBE_URL} />
                </div>

                <div className="ui segment" >
                    <h4 className="ui header" >Busca un video!</h4>
                    <p></p>
                </div></div>
        }else{
            return(
                <div>
                    <div className="ui embed" >
                        <iframe title="youtube video player" src={EMBED_YOUTUBE_URL + this.props.video.id.videoId} />
                    </div>

                    <div className="ui segment" >
                        <h4 className="ui header" >{this.props.video.snippet.title}</h4>
                        <p>{this.props.video.snippet.description}</p>
                    </div>
                </div>
            )
        }

    }

}

export default VideoDetail;