import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Signin = () => {
  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    // console.log(response);
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1> sign in page</h1>
      <button type="" onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
    </div>
  );
};

export default Signin;
