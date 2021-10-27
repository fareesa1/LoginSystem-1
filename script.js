var x;
var y;

const firebaseConfig = {
    apiKey: "AIzaSyDyqYOnUsPMdmth2HQ3cOLvq1-VoBCO6aA",
    authDomain: "wireleib-e42d3.firebaseapp.com",
    projectId: "wireleib-e42d3",
    storageBucket: "wireleib-e42d3.appspot.com",
    messagingSenderId: "1049671850682",
    appId: "1:1049671850682:web:fcccbf9461465c113f4083"
};

firebase.initializeApp(firebaseConfig);


function login(){
    x= document.getElementById("input1").value 
    y= document.getElementById("input2").value
    console.log("hello " + y)
    loginUser(x,y)
}

function registerUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(cred => {
        console.log("User successfully created!");
}).catch(err => {
    console.log(err.message);
})
}

function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('Successfully authenticated!');
            // direct to logic success page
            // window.location.href = '';
        }).catch(err => {
            console.log(err.message);
        })
}


