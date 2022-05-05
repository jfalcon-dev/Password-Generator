
let characterArray = [
    1,2,3,4,5,6,7,8,9,0,
    'Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L',
    'Z','X','C','V','B','N','M',
    'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l',
    'z','x','c','v','b','n','m',
    '`','~','!','@','#','$','%','^','&','*','(',')','-','_','=','+','{','[',']',
    '}','\'','|',':',';','"',"'",'<',',','>','.','?','/'];

let passwordEl = document.getElementById("password-el-one");

let passwordElClass = document.querySelectorAll("span.password");

let numOfChars = 0;
let lengthOfCharArray = characterArray.length;
function userImport(){
    numOfChars = document.getElementById("userDef").value;
    let inputCheck = userInputCheck();
    if (inputCheck === true){
        generator();
    }
}

function userInputCheck(){
    if(numOfChars > 20 || numOfChars < 1){
        alert("Please enter a number between 1 and 20.");
    }else if (!(numOfChars >= 0 || numOfChars <= 0)){
        alert("Please enter a number between 1 and 20");
    }else{
        return true;
    }
}

function generator(){

let index = 0;

for (let i = 0; i < passwordElClass.length; i++){
    
    let password = "";
    
    for (let i = 0; i < numOfChars; i++){
        index = Math.floor(Math.random() * lengthOfCharArray);
        password += characterArray[index];
        
        }
    passwordElClass[i].textContent = password;

    
    }
}

