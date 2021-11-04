var x,y,db;
var userName="";
var uid;
var input_title;
var input_description;
var x1,y1;
var currentUserUid=""

const firebaseConfig = {
   apiKey: "AIzaSyDyqYOnUsPMdmth2HQ3cOLvq1-VoBCO6aA",
  authDomain: "wireleib-e42d3.firebaseapp.com",
  databaseURL: "https://wireleib-e42d3-default-rtdb.firebaseio.com",
  projectId: "wireleib-e42d3",
  storageBucket: "wireleib-e42d3.appspot.com",
  messagingSenderId: "1049671850682",
  appId: "1:1049671850682:web:fcccbf9461465c113f4083"
};

firebase.initializeApp(firebaseConfig);
db = firebase.database()
var input_title;

function addUserData(){
    // var rand = Math.round(Math.random() * 800) + Math.round(Math.random() * 800)
    
    rand = currentUserUid
    input_title = document.getElementById("input_title").value
    input_description = document.getElementById("input_description").value
    db.ref("posts/"+rand + "/").set({title:input_title, description:input_description, timeStamp:new Date().getTime()})
    // console.log(input_title)
    window.location.href = 'feed.html';
    document.getElementById('input_title').value = ''
    document.getElementById('input_description').value = ''
}


window.onload = function() {

  }

function login(){
    x= document.getElementById("input1").value 
    y= document.getElementById("input2").value
    console.log("hello " + y)
    loginUser(x,y)
}

function register(){
    x1= document.getElementById("input3").value 
    y1= document.getElementById("input4").value
    console.log("hello " + y1)
    registerUser(x1,y1)
}

function registerUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(cred => {
        console.log("User successfully created!");
         currentUserUid=cred.user.uid
        window.location.href = 'createpost.html';
        db.ref("users/").set({email:cred.user.email,uid:cred.user.uid})
    }).catch(err => {
    console.log(err.message);
    })

    document.getElementById('input3').value = ''
    document.getElementById('input4').value = ''
}

function loginUser(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((cred) => {
            // alert('Successfully authenticated!');
         currentUserUid=cred.user.uid
        db.ref("users/").update({email:cred.user.email,uid:cred.user.uid})
        console.log(cred.user.uid);

            window.location.href = 'createpost.html';
            // direct to logic success page
        }).catch(err => {
            console.log(err.message);
        })
        document.getElementById('input1').value = ''
        document.getElementById('input2').value = ''    
}




