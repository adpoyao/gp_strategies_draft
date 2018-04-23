import * as types from './actionType';

export const updateSearchTerm = (data) => ({
  type: types.UPDATE_SEARCH_TERM,
  data
});

export const addStatusFilter = (data) => ({
  type: types.ADD_STATUS_FILTER,
  data
});

export const addContentTypeFilter = (data) => ({
  type: types.ADD_CONTENT_TYPE_FILTER,
  data
});

export const addTopicFilter = (data) => ({
  type: types.ADD_TOPIC_FILTER,
  data
});

export const removeStatusFilter = (data) => ({
  type: types.REMOVE_STATUS_FILTER,
  data
});

export const removeContentTypeFilter = (data) => ({
  type: types.REMOVE_CONTENT_TYPE_FILTER,
  data
});

export const removeTopicFilter = (data) => ({
  type: types.REMOVE_TOPIC_FILTER,
  data
});

export const toggleSavedSearch = (boolean) => ({
  type: types.TOGGLE_SAVED_SEARCH,
  boolean
});

export const toggleFavorite = (boolean) => ({
  type: types.TOGGLE_FAVORITE,
  boolean
});

export const toggleShowFavorites = (boolean) => ({
  type: types.TOGGLE_SHOW_FAVORITES,
  boolean
});

export const toggleFilter = (id) => ({
  type: types.TOGGLE_FILTER,
  id
});

export const clearFilters = () => ({
  type: types.CLEAR_FILTERS
});
