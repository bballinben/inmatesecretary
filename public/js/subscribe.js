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

 // Subscription form JavaScript Starts Below This Line-----------------------------

 // reference subscribtions
 var subscriptionRef = firebase.database().ref('subscriptions');

 // Firebase js for subscription form

 // listen for form Submit
 document.getElementById('subscribeForm').addEventListener('submit', submitSubscribeForm);

 //submit form
 function submitSubscribeForm(e){
 e.preventDefault();

 // Get values

 var name = getInputVal('subscribeName');
 var email = getInputVal('subscribeEmail');

 // save message
 saveSubscription(name, email);

 //show alert
 document.querySelector('.alert2').style.display = 'block';

 // Hide alert afeter 3 secs
 setTimeout(function(){
 document.querySelector('.alert2').style.display = 'none';
 },3000);

 // clear form
 document.getElementById('subscribeForm').reset();

 }


 //function to get form values
 function getInputVal(id){
 return document.getElementById(id).value;
 }

 // save subsciption to firebaseio
 function saveSubscription(name, email){
 var newSubscriptionRef = subscriptionRef.push();
 newSubscriptionRef.set({
   name:name,
   email:email,
 });
 }
