// the form is going to listen to the submit event 
// then check the values of the inputs

// getting elements by association 
const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const regBtn = document.querySelectorAll("form .register-L");
const form = document.querySelector("form");

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

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { name, value } = input;
    inputs.push({ name, value });
  });
  console.log(inputs);
  form.reset();
});

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






//add event object gets passed when form is submitted
// form.addEventListener('submit', function(event){
//     event.preventDefault();//prevents form from auto submitting

    // login/register step 

    //step 1:Personal details 

    // var Name = document.getElementById("name").value.trim();
    // console.log(Name);
    // var Lastname = document.getElementById("lastname").value.trim();
    // var Age = document.getElementById("age").value.trim();
    // var Email = document.getElementById("email").value.trim();
    // var Username = document.getElementById("username").value.trim();
    // var Number = document.getElementById("mobilenumber").value.trim();
    // var Password = document.getElementById("password").value.trim();
    // console.log(Password);
    // var Confirmpass = document.getElementById("confirmpassword").value.trim();
    // console.log(Confirmpass);

    // form 2: Banking and Identification 
     
    // sending data inside an object
// fetch
// fetch('https://localhost:8080/Kutu/registerUser', {
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
//     //Console.log(data);
// })

// })


