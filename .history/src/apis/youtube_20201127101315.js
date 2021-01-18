const KEY = 'AIzaSyDtZysVexipruncyOQwR02N3-A0nayOWDA';

// creates a customized axios instance
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube',
  params: {
    Authorization: 'Client-ID d9UEg4LxXzkrZc8jwu-Zhz7VUg3rUaFbJ8zAS_DDQ_0'
  }
});
