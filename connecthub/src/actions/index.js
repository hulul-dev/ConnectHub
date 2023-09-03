import {auth, provider,signInWithGooglePopup} from '../firebase';
import { SET_USER } from './actionType';

    export const setUser = (payload) => ({
        type: SET_USER,
        user: payload
    });

    const SignInAPI = () => {
        return async (dispatch) => {
          try {
            const payload = await signInWithGooglePopup();
            console.log(payload);
            dispatch(setUser(payload))
            // Dispatch actions or handle user data as needed
          } catch (error) {
            console.error(`Sign-in error: ${error.message}`);
            // Handle errors (e.g., show error message to the user)
          }
        };
    };

export default SignInAPI



