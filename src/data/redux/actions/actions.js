/*
 * action types
 */

export const ADD_ACCESS_TOKEN = 'ADD_ACCESS_TOKEN'
export const ADD_USER_ID = 'ADD_USER_ID'
export const ADD_REFRESH_TOKEN = 'ADD_REFRESH_TOKEN'

/*
 * action creators
 */

export function addUserId(id) {
  return { type: ADD_USER_ID, userId: id };
}

export function addAccessToken(access) {
  return { type: ADD_ACCESS_TOKEN, access };
}

export function addRefreshToken(refresh) {
  return { type: ADD_REFRESH_TOKEN, refresh };
}

