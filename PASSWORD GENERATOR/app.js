let length= document.getElementById("length");
let uppercase= document.getElementById("includeUppercase");
let lowercase= document.getElementById("includeLowercase");
let numbers= document.getElementById("includeNumbers");
let symbols= document.getElementById("includeSpecial");
let generate= document.getElementById("generatePassword");
let password= document.getElementById("generatedPassword");
let copy= document.getElementById("copyPassword");





generate.addEventListener("click", function(){
    let chars= "";
    if(uppercase.checked){
        chars+= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(lowercase.checked){
        chars+= "abcdefghijklmnopqrstuvwxyz";
    }
    if(numbers.checked){
        chars+= "0123456789";
    }
    if(symbols.checked){
        chars+= "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    
    let passwordLength= length.value;
    let generatedPassword= "";

    for(let i=0; i<passwordLength; i++){
        let index= Math.floor(Math.random() * chars.length);
        generatedPassword+= chars[index];
    }
    password.value= generatedPassword;

 copy.addEventListener("click", function(){
    password.select();
    document.execCommand("copy");
 });

});