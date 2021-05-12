const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

// everything that happens when button is clicked
customBtn.addEventListener("click", function(){
    realFileBtn.click();
});

// displaying file name in custom text span
realFileBtn.addEventListener("change", function(){
    if(realFileBtn.value){
        customTxt.innerHTML = realFileBtn.value.match( /[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];

    }else{
        customTxt.innerHTML = "No file chosen, yet.";
    }
})