// Initialize Firebase
 var config = {
   apiKey: "AIzaSyAWyGTLhEu0pNurOCIQJh5mIU2yhKmNcB8",
   authDomain: "inmatesecretary-bd9a4.firebaseapp.com",
   databaseURL: "https://inmatesecretary-bd9a4.firebaseio.com",
   projectId: "inmatesecretary-bd9a4",
   storageBucket: "inmatesecretary-bd9a4.appspot.com",
   messagingSenderId: "477532109214"
 };
 firebase.initializeApp(config);

 //reference messages collections
 var messagesRef = firebase.database().ref('messages');

// Listen for form Submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


// submit form
function submitForm(e){
  e.preventDefault();

  //get values
  var firstname = getInputVal('firstName');
  var lastname = getInputVal('lastName');
  var email = getInputVal('eMail');
  var phonenumber = getInputVal('phoneNumber');
  var message = getInputVal('message');

// save message
  saveMessage(firstname, lastname, email, phonenumber, message);

//show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert afeter 3 secs
setTimeout(function(){
document.querySelector('.alert').style.display = 'none';
},3000);

// clear form
document.getElementById('contactForm').reset();
}

// function to get form values
function getInputVal(id){
  return document.getElementById(id).value
}

// save message to firebase

function saveMessage(firstname, lastname, email, phonenumber, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    firstname:firstname,
    lastname:lastname,
    email:email,
    phonenumber:phonenumber,
    message:message,

  });
}
