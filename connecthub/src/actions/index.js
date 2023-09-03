// import {auth, provider} from '../firebase';

const auth = require('../firebase');
const provider = require('../firebase')

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



