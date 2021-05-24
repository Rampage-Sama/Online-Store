// the form is going to listen to the submit event 
// then check the values of the inputs

// getting elements by association 
const steps = Array.from(document.querySelectorAll("form .step"));
const nextBtn = document.querySelectorAll("form .next-btn");
const prevBtn = document.querySelectorAll("form .previous-btn");
const regBtn = document.querySelectorAll("form .register-L");
const form = document.getElementById("form");

//------button for show more with event listener----//
let btnShow = document.querySelector("form .btnShow");



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
    //-------------------Category section------------------//
    var Role1 = document.getElementById("Client").value.trim();
    console.log(Role1);
    var Role2 = document.getElementById("Sales-Rep").value.trim();
    console.log(Role2);


    //----------- step 1:Personal Information ----------------//
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


    //-------------------section 2 Address----------------//
    var houseNum = document.getElementById("houseNum").value.trim();
    console.log(houseNum);
    var stName = document.getElementById("stName").value.trim();
    console.log(stName);
    var postCode = document.getElementById("postCode").value.trim();
    console.log(postCode);
    var complexName = document.getElementById("complexName").value.trim();
    console.log(complexName);
    var unitNum = document.getElementById("unitNum").value.trim();
    console.log(unitNum);
    var suburb = document.getElementById("suburb").value.trim();
    console.log(suburb);
    var city = document.getElementById("city").value.trim();
    console.log(city);
    var province = document.getElementById("province").value.trim();
    console.log(province);

    //---------------- Section 3: Knowhow of Kutu ------------------//  
    var knowHow = document.getElementById("knowHow").value.trim();
    console.log(knowHow);
    var repName = document.getElementById("rep-name").value.trim();
    console.log(repName);
    var repNumber = document.getElementById("rep-number").value.trim();
    console.log(repNumber);
   
    //---------------- Section 4: Banking ------------------//
    var bank = document.getElementById("bank").value.trim();
    console.log(bank);
    var accountNum = document.getElementById("accountNum").value.trim();
    console.log(accountNum);
    var accountType = document.getElementById("accountType").value.trim();
    console.log(accountType);
    var branchCode = document.getElementById("branchCode").value.trim();
    console.log(branchCode);


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


