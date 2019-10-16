export const FETCH_PODCAST_CARD_INFO_BEGIN = 'FETCH_PODCAST_CARD_INFO_BEGIN';
export const FETCH_PODCAST_CARD_INFO_SUCCESS =
  'FETCH_PODCAST_CARD_INFO_SUCCESS';
export const FETCH_PODCAST_CARD_INFO_FAILURE =
  'FETCH_PODCAST_CARD_INFO_FAILURE';

export function fetchPodcastCardInfo() {
  const uri = `https://itunes.apple.com/search?media=podcast&term=karol Paciorek`;
  return dispatch => {
    dispatch(fetchPodcastCardInfoBegin());
    return fetch(uri)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchPodcastCardInfoSuccess(json));
        return json;
      })
      .catch(error => dispatch(fetchPodcastCardInfoFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) throw Error(response.statusText);
  return response;
}

export const fetchPodcastCardInfoBegin = () => ({
  type: FETCH_PODCAST_CARD_INFO_BEGIN,
});

export const fetchPodcastCardInfoSuccess = podcast_info => ({
  type: FETCH_PODCAST_CARD_INFO_SUCCESS,
  payload: {
    podcast_info: {
      title: podcast_info.results[0].trackName,
      authorName: podcast_info.results[0].artistName,
      podcastImg: podcast_info.results[0].artworkUrl100,
    },
  },
});

export const fetchPodcastCardInfoFailure = error => ({
  type: FETCH_PODCAST_CARD_INFO_FAILURE,
  payload: { error },
});
