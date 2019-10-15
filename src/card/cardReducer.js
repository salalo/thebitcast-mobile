import {
  FETCH_PODCAST_CARD_INFO_BEGIN,
  FETCH_PODCAST_CARD_INFO_SUCCESS,
  FETCH_PODCAST_CARD_INFO_FAILURE
} from './CardActions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function cardReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_PODCAST_CARD_INFO_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PODCAST_CARD_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.podcast_info
      };

    case FETCH_PODCAST_CARD_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      return state;
  }
}
