// the form is going to listen to the submit event 
// then check the values of the inputs

// getting elements by association 
const form = document.getElementById("reg-form");



//add event object gets passed when form is submitted
form.addEventListener('submit', function(event){
    event.preventDefault();//prevents form from auto submitting

    

    var Name = document.getElementById("name").value.trim();
    console.log(Name);
    var Lastname = document.getElementById("lastname").value.trim();
    var Age = document.getElementById("age").value.trim();
    var Email = document.getElementById("email").value.trim();
    var Username = document.getElementById("username").value.trim();
    var Number = document.getElementById("mobilenumber").value.trim();
    var Password = document.getElementById("password").value.trim();
    console.log(Password);
    var Confirmpass = document.getElementById("confirmpassword").value.trim();
    console.log(Confirmpass);
     
    // sending data inside an object
    const data = {
        Name,
        Lastname, 
        Age, 
        Email, 
        Username, 
        Number, 
        Password, 
        Confirmpass };
        const options = {
            method:'POST',
            header:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) //package all data 
        };

        fetch('localhost:8080/Kutu/registerUser', options);
});

// connect to server
