import axios from 'axios';

const YOUTUBE_KEY = 'AIzaSyAVZ9VMidhXbmx3RBRwEngNNIK7g999l40';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

const axiosInstance = axios.create(
    {
        baseURL : YOUTUBE_API_URL,
        params : {
            key : YOUTUBE_KEY,
            part : 'snippet',
            maxResults : 5
        }
    }
);


class YoutubeAPIManager {

   static async search(term) {
       const response = await axiosInstance.get( '/search', {
                params: {
                    q : term
                }
        });
       return response.data.items;
    };

}
export default YoutubeAPIManager;



