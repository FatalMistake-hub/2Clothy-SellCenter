import { createSelector } from '@reduxjs/toolkit';



export const authListSelector = (state) => state.auth;

export const authRemainingSelector = createSelector(
  authListSelector,

  (auth) => {
      return auth
    });
  // }
// );