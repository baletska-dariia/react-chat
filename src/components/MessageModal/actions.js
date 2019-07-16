import {
  SET_CURRENT_MESSAGE_ID,
  DROP_CURRENT_MESSAGE_ID,
  SHOW_PAGE,
  HIDE_PAGE
} from "./actionTypes";

export const setCurrentMessageId = id => ({
  type: SET_CURRENT_MESSAGE_ID,
  id
});

export const dropCurrentMessageId = () => ({
  type: DROP_CURRENT_MESSAGE_ID
});

export const showPage = () => ({
  type: SHOW_PAGE
});

export const hidePage = () => ({
  type: HIDE_PAGE
});
