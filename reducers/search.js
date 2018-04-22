import * as types from '../actions/actionType';

const initialState = {
  searchTerm: '', 
  filteredStatus: [],
  filteredContentType: [],
  filteredTopic: [],
  savedSearchToggle: false,
  favoritedSearchToggle: false,
  activeFilterId: undefined
};

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.UPDATE_SEARCH_TERM:
      return Object.assign({}, state, {
        searchTerm: action.data
      });
    case types.ADD_STATUS_FILTER:
      return Object.assign({}, state, {
        filteredStatus: [...state.filteredStatus, action.data]
      });
    case types.ADD_CONTENT_TYPE_FILTER:
      return Object.assign({}, state, {
        filteredContentType: [...state.filteredContentType, action.data]
      });
    case types.ADD_TOPIC_FILTER:
      return Object.assign({}, state, {
        filteredTopic: [...state.filteredTopic, action.data]
      });
    case types.REMOVE_STATUS_FILTER:
      return Object.assign({}, state, {
        filteredStatus: state.filteredStatus.filter(status => status != action.data)
      });
    case types.REMOVE_CONTENT_TYPE_FILTER:
      return Object.assign({}, state, {
        filteredContentType: state.filteredContentType.filter(contentType => contentType != action.data)
      });
    case types.REMOVE_TOPIC_FILTER:
      return Object.assign({}, state, {
        filteredTopic: state.filteredTopic.filter(topic => topic != action.data)
      });
    case types.TOGGLE_SAVED_SEARCH:
      return Object.assign({}, state, {
        savedSearchToggle: action.boolean
      });
    case types.TOGGLE_SHOW_FAVORITES:
      return Object.assign({}, state, {
        favoritedSearchToggle: action.boolean
      });
    case types.TOGGLE_FILTER:
      return Object.assign({}, state, {
        activeFilterId: action.id
      });
    case types.CLEAR_FILTERS:
      return Object.assign({}, state, {
        filteredTopic: [],
        filteredContentType: [],
        filteredStatus: []
      });
    default: break;
  }
  return state;
};

export default searchReducer;