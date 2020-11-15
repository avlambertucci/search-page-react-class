import axios from 'axios';

const KEY = 'AIzaSyBvZy3Uq7ez3L4YODR204P9mw2fZEXoFBg';
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    q: 'surf'
  }
})

