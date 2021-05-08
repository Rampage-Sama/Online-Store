// the form is going to listen to the submit event 
// then check the values of the inputs

// getting elements by association 
const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const regBtn = document.querySelectorAll("form .register-L");
const form = document.getElementById("form");

// this code is for the checkbox choice//
function check(el){
  var choice = document.getElementsByName("choose");
  choice.forEach(function(item){
    if(item!=el)
      item.checked = false;
  });
}

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});

regBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});

prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

// submit button
// form.addEventListener("submit", (e) => {
//   e.preventDefault();



//   const inputs = [];
//   form.querySelectorAll("input").forEach((input) => {
//     const { name, value } = input;
//     inputs.push({ name, value });
//   });
//   console.log(inputs);
//   form.reset();
// });

function changeStep(btn) {
  let index = 0;
  const active = document.querySelector(".active");
  index = steps.indexOf(active);
  steps[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  steps[index].classList.add("active");
}

//connect the submit button with the code below

//add event object gets passed when form is submitted
form.addEventListener('submit', function(event){
    event.preventDefault();//prevents form from auto submitting

    //login/register step 
    // step 1:Personal details 

    
    var userName = document.getElementById("name").value.trim();
    console.log(userName);
    var Lastname = document.getElementById("lastname").value.trim();
    console.log(Lastname);
    var Age = document.getElementById("age").value.trim();
    console.log(Age);
    var birthday = document.getElementById("birthday").value.trim();
    console.log(birthday);
    var Email = document.getElementById("email").value.trim();
    console.log(Email);
    var cell = document.getElementById("cell").value.trim();
    console.log(cell);
    var Username = document.getElementById("username").value.trim();
    console.log(Username);
    var Password = document.getElementById("password").value.trim();
    console.log(Password);
    // var Confirmpass = document.getElementById("confirmPass").value.trim();
    // console.log(Confirmpass);

// form 2: Banking and Identification 
     
// sending data inside an object
//  fetch
// fetch('localhost:8080/Kutu/registerUser', {
//     method: 'POST',
//     body:JSON.stringify({
//         "uName" : Name,
//         "uLastName" : Lastname,
//         "uAge" : Age,
//         "Email" : Email,
//         "mobileNumber" : Number,
//         "userName" : Username,
//         "uPassword" : Password
         
//     }),
//     headers:{
//         "Content-Type":"application/json; charset=UTF-8"
//     }
// })
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
    //Console.log(data);
// })

 })


