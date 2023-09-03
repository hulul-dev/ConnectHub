import {auth, provider} from '../firebase';

const SignInAPI = () => {
    return (dispatch) => {
        auth.signInWithPopup(provider)
        .then((payload) => {
            console.log(payload)
        })
        .catch((error) => {
            alert(error.message)
        })
    }
}

export default SignInAPI



