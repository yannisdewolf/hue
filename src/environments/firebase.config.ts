
import {AuthMethods, AuthProviders} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyD8Vkn26nmQtBkBGFlI9qfVFJrds476UCc",
  authDomain: "final-project-recording-c74da.firebaseapp.com",
  databaseURL: "https://final-project-recording-c74da.firebaseio.com",
  storageBucket: "final-project-recording-c74da.appspot.com",
  messagingSenderId: "351920685216"
};



export const authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};
