import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-auth.js'
import { 
    collection, addDoc, setDoc, getDoc, updateDoc, deleteDoc, deleteField, getFirestore 
} from 'https://www.gstatic.com/firebasejs/9.6.4/firebase-firestore.js'

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
const analytics = getAnalytics(app);
//init services
const database = getFirestore()
const auth = getAuth(app)


var signinBtn = document.getElementById("signin");
if(signinBtn){
        signinBtn. addEventListener("click", function(e){
        e.preventDefault() //Prevent Default Form Submission Behavior
        authenticate()
    });
}

function authenticate(){
    const email = document.getElementById("inputEmail").value
    const password = document.getElementById("inputPassword").value

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

async function addEvent(){ //with auto-id
    var eventName = document.getElementById("event-name").value
    var eventLoc = document.getElementById("event-location").value
    console.log(eventName)

    var ref = collection(database,'events');
    var docRef = await addDoc(ref, {
            Name: eventName,
            Location: eventLoc
        }
    )
    .then(()=>{
        alert("data added successfully");
    })
    .catch((error)=>{
        alert("unsuccessful");
    });

}

var eventBtn = document.getElementById("submit-event");
if(eventBtn){
    eventBtn.addEventListener("click", function(e){
        e.preventDefault() //Prevent Default Form Submission Behavior
        addEvent()
    });
}

