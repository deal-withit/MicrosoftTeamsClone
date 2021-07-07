document.getElementById("LoginForm").addEventListener("submit",(event)=>{
    event.preventDefault();
});

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        location.replace("welcome.html")
    }
})

function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value 
    firebase.auth().signInWithEmailAndPassword(email,password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function signup(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((userCredential)=>{
        alert("Signed Up successfully ! You will be redirected to the main page.")
    })
    .catch((error)=>{
        alert("Please enter the valid email and password of at least 6 characters")
    });
}

function forgotpass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(()=>{
        alert("Password Resent link sent to your mail.")
    })
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}