  import axios from './DeezerService';

  const { CancelToken } = axios;
  let cancel;

  //Create a cancel token by passing an executor function to the CancelToken constructor:
  const cancellation = () => ({
      cancelToken: new CancelToken(function executor(canceller) {
          cancel = canceller;
      })
  });

  //search by Artist
  export const searchByArtist = async(artist) => {
      const response = await axios.get(`search?q=${artist}`, cancellation);
      return response.data;
  };

  //search by trackId
  export const findTrackById = async(id) => {
      const response = await axios.get(`/track/${id}`, cancellation);
      return response.data;
  }
  //search by Page
  export const searchByPage = (url) => {
      return axios.get(url).then(response => response.data);
  }