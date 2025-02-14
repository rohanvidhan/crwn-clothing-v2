import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../../utils/firebase/firebase.util';

const SignIn = ()=>{
    const logGoogleUser =  async ()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google popup</button>
        </div>
    );
};
export default SignIn;