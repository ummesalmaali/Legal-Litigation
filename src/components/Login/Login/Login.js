import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';
import loginBg from '../../../images/loginL.jpg'

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    
    const [loggedInUser,SetLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    
    const handleGoogleSignIn = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
  .then((result) => {
    const {displayName,email} = result.user;
    const signedInUser = {name:displayName,email}
    SetLoggedInUser(signedInUser);
    storeAuthToken();
    console.log(result);
  }).catch((error) => {
   const errorMessage = error.message;
   console.log(errorMessage);
  });
    }
    const storeAuthToken= ()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from)
          }).catch(function(error) {
            // Handle error
          });
    }
    return (
        <div className="login-page container">
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-6 shadow p-5">
          <div className="form-group">
            <label htmlFor="">User Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="" className="text-danger">Forgot your password?</label>
          </div>
          <div className="from-group mt-5">
            <button className="btn btn-brand" onClick={handleGoogleSignIn}>Google Sign in</button>
          </div>
        </div>
        <div className="col-md-6 d-none d-md-block align-self-end">
          <img className="img-fluid" src={loginBg} alt="" />
        </div>
      </div>
    </div>
    );
};

export default Login;