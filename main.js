import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js'
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCMBK0gSwW1MIuOG9VBS0O1qxzICIF5juw",
authDomain: "apo-usc-website-2022.firebaseapp.com",
databaseURL: "https://apo-usc-website-2022-default-rtdb.firebaseio.com",
projectId: "apo-usc-website-2022",
storageBucket: "apo-usc-website-2022.appspot.com",
messagingSenderId: "533365039476",
appId: "1:533365039476:web:6009ba42b572a7208f0c21",
measurementId: "G-NRQPV42E2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
//init services
const database = getFirestore()
const auth = getAuth(app)
//collection ref
// const colRef = collection(database, 'users')


  document.getElementById("signin").addEventListener("click", function(e){
      e.preventDefault()
      authenticate()
  });
  //Prevent Default Form Submission Behavior
  // e.preventDefault()
  // console.log("clicked")

  function authenticate(){
    // e.preventDefault();
    const email = document.getElementById("inputEmail").value
    const password = document.getElementById("inputPassword").value
    console.log(email)
    console.log(password)
    console.log("hi")

    signInWithEmailAndPassword(auth, email, password) 
        .then((userCredential) => {
            // location.reload();
            // Signed in 
            var user = userCredential.user;
            console.log("user",user.email)
            window.location = "home.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // alert("error code", errorCode)
            alert( errorMessage)
        });
}