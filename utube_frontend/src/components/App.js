import React from 'react';

import YoutubeAPIManager from '../apis/youtubeAPIManager';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {

    state = {videos: [],
            selectedVideo : null };

    onFormSubmit = async (term) => {
        const response =   await YoutubeAPIManager.search(term)
        this.setState( { videos: response,
                        selectedVideo : response[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    };

    render(){
        return(
            <div className="ui container" >
                <SearchBar onFormSubmit={this.onFormSubmit} />

                <div className="ui grid" >
                    <div className="ui row" >
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column" >
                            <VideoList
                                onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default App;