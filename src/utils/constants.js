export const LOGO = process.env.REACT_APP_LOGO

export const AVATAR = process.env.REACT_APP_AVATAR

export const BACKGROUND = process.env.REACT_APP_BACKGROUND

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

export const IMG_CDN = "https://image.tmdb.org/t/p/w500/"

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY