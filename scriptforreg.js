let checkerror;
sessionStorage.setItem('username','');
let url = 'LoginsandPasswords.json'

//Генерация пользователей
function generateUsername() {
    const adjectives = ['Adventurous', 'Brave', 'Curious', 'Daring', 'Energetic', 'Friendly', 'Helpful', 'Imaginative', 'Kind', 'Optimistic',"Abacus","Candle","Eavesdrop","Gurgle","Icicle","Kaleidoscope","Marigold","Opaline","Quibble","Tangle","Vanguard","Xenial","Zephyr","Ambrosia","Daffodil","Frangipani","Gingko","Illusion"];
    const nouns = ['Sunflower', 'Raindrop', 'Firefly', 'Pebble', 'Bumblebee', 'Starfish', 'Snowflake', 'Wildflower', 'Seashell', 'Dragonfly',"Bangle","Dangle","Fascinate","Hazelnut","Jargon","Limelight","Nimble","Panacea","Ramble","Serenade","Unravel","Whimsical","Yearn","Brocade","Camellia","Effervescent","Hinterland","Juniper"];
  
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  
    return `${randomAdjective}${randomNoun}`;
  }
  let count = 0
  
  const randombutton = document.getElementById('generatelogin');
  randombutton.addEventListener('click',function(){
    
    let account = document.getElementById('Logup2');
    if(count < 5){
     const username = generateUsername();
    
      account.value = username; 
      count++;
    }
    else{
      if(!checkerror){
      let errorMessge = document.createElement('p');
      errorMessge.innerText = "You cant generate more than 5 count";
      errorMessge.style = "color: red; font-size: 12px" ;
      account.insertAdjacentElement('afterend', errorMessge);
      checkerror = true;
      }
    }
    
  })


let emailinput = document.getElementById('Email');
let emailerror = document.getElementById('email-error');
let firstinput = document.getElementById('FirstName');
let firsterror = document.getElementById('firstname-error');
let lastinput = document.getElementById('LastName');
let lasterror = document.getElementById('lastname-error');
let phoneinput = document.getElementById('phone');
let phoneerror = document.getElementById('phone-error');
let accountinput = document.getElementById('Logup2');
let accounterror = document.getElementById('accountname-error');
let passwordinput = document.getElementById('password');
let passworderror = document.getElementById('password-error');
let Cpassword = document.getElementById('Cpassword');
let cpassworderror = document.getElementById('cpassword-error');
let birthdayinput = document.getElementById('birthday');
let birthdayerror = document.getElementById('birthday-error');
let errorcheck = false;
let checkboxpolicy = document.querySelector('.checkboxprivacy');
let checkerrorpolicy = document.getElementById('check-error');

let submit = document.getElementById('sign');
    emailinput.onblur = function(){
        if(!emailinput.value.includes('@')){
            emailinput.classList.add('invalid');
            emailerror.style.display = "block";
            errorcheck = true;
        }
    }
    emailinput.onfocus = function(){
        if(this.classList.contains('invalid')){
            this.classList.remove('invalid')
            emailerror.style.display = "none";
            errorcheck = false;
        }
    }
    firstinput.onblur = function(){
        if(!firstinput.value.includes('')){
            firstinput.classList.add('invalid');
            firsterror.style.display = "block";
            errorcheck = true;
        }
    }
    firstinput.onfocus = function(){
        if(this.classList.contains('invalid')){
            this.classList.remove('invalid')
            firsterror.style.display = "none";
            errorcheck = false;
        }
    }
    lastinput.onblur = function(){
        if(!lastinput.value.includes('')){
            lastinput.classList.add('invalid');
            lasterror.style.display = "block";
            errorcheck = true;
        }
    }
    lastinput.onfocus = function(){
        if(this.classList.contains('invalid')){
            this.classList.remove('invalid')
            lasterror.style.display = "none";
            errorcheck = false;
        }
    }
    phoneinput.onblur = function(){
        if(!phoneinput.value.includes('+375') || phoneinput.value.length > 13){
            phoneinput.classList.add('invalid');
            phoneerror.style.display = "block";
            errorcheck = true;
        }
    }
    phoneinput.onfocus = function(){
        if(this.classList.contains('invalid')){
            this.classList.remove('invalid')
            phoneerror.style.display = "none";
            errorcheck = false;
        }
    }
    getusers()
    accountinput.onblur = function(){
        if(!checkusers(accountinput.value)){
         
            accountinput.classList.add('invalid');
            accounterror.style.display = "block";
            errorcheck = true;
        }
    }
    accountinput.onfocus = function(){
        if(this.classList.contains('invalid')){
            this.classList.remove('invalid')
            accounterror.style.display = "none";
            errorcheck = false;
        }
    }
    passwordinput.onblur = function(){
        if(isvalidpassword(passwordinput.value)){
            passwordinput.classList.add('invalid');
            passworderror.style.display = "block";
            errorcheck = true;
        }
    }
    passwordinput.onfocus = function(){
        if(this.classList.contains('invalid')){
            this.classList.remove('invalid')
            passworderror.style.display = "none";
            errorcheck = false;
        }
    }
    Cpassword.onblur = function(){
        if(passwordinput.value != Cpassword.value){
            Cpassword.classList.add('invalid');
            cpassworderror.style.display = "block";
            errorcheck = true;
        }
    }
    Cpassword.onfocus = function(){
        if(this.classList.contains('invalid')){
            this.classList.remove('invalid')
            cpassworderror.style.display = "none";
            errorcheck = false;
           
        }
    }
    birthdayinput.onblur = function(){
        if(!validateBirthday()){
            birthdayinput.classList.add('invalid');
            birthdayerror.style.display = "block";
            errorcheck = true;
        }
    }
    birthdayinput.onfocus = function(){
        if(this.classList.contains('invalid')){
            this.classList.remove('invalid')
            birthdayerror.style.display = "none";
            errorcheck = false;
        }
    }
    checkboxpolicy.onblur = function(){
        if(!checkboxpolicy.checked){
            checkboxpolicy.classList.add('invalid');
            checkerrorpolicy.style.display = "block";
            errorcheck = true;
        }
    }
    checkboxpolicy.onfocus = function(){
        if(this.classList.contains('invalid')){
            this.classList.remove('invalid')
            checkerrorpolicy.style.display = "none";
            errorcheck = false;
        }
    }
    
    if(errorcheck){
        submit.disabled = true;
    }
    else{
        submit.disabled = false;
    }
    
    
    function isvalidpassword(password){
        if (password.length < 8) {
            return "Пароль должен содержать не менее 8 символов";
          }
        
          // Проверяем наличие специальных символов
          if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return "Пароль должен содержать не менее одного специального символа";
          }
        
          // Проверяем наличие заглавных букв
          if (!/[A-Z]/.test(password)) {
            return "Пароль должен содержать не менее одной заглавной буквы";
          }
        
          // Проверяем наличие английских букв
          if (!/[a-zA-Z]/.test(password)) {
            return "Пароль должен содержать только английские буквы";
          }
        
          // Если все проверки пройдены, пароль считается валидным
          return null;
    }

    const validateBirthday = () => {
        const birthDate = new Date(birthdayinput.value);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
       
        if(age < 16){
            return false;
        }
        return true;
    };

    function checkusers(username){
        for(let elem of usersarray){
          
             if(elem.login == username){
                 return false;
             }
             else{
                 return true;
             }
         }
    }

    let usersarray = [];
   
    function getusers(){
        let url = 'LoginsandPasswords.json'
        fetch(url)
        .then(response => response.json())
        .then(result =>{
            usersarray = result;
            
        })
    }

   let newuser

sign.addEventListener('click',()=>{
    newuser = {
        email:emailinput,
        FirstName:firstinput,
        LastName:lastinput,
        FatherName:document.getElementById("FatherName"),
        login:accountinput,
        password:passwordinput
    }
    sessionStorage.setItem('username',`${accountinput.value}`);
    setusernameinfile();
    
})

function setusernameinfile(){
  
 fetch(url)
    .then(response => response.json())
    .then(result=>{
        usersarray = result;
        usersarray.push(newuser);
        localStorage.setItem('arrayusers',`${usersarray}`);
        window.location = 'index.html';
    })
}  


buttonlogindiv = document.getElementById('openlogin');
logindiv = document.querySelector('.logindiv');
registerdiv = document.querySelector('.registrate-box');
buttonlogindiv.addEventListener('click',()=>{
    logindiv.style = 'margin-left: 0px';
    registerdiv.style = 'margin-left:5000px; position: absolute';
    
});

let passwordlogin = document.getElementById('password-log');
let userinput = document.getElementById('username');


buttonlogin = document.getElementById('buttonlogin');
buttonlogin.addEventListener('click',()=>{

    let usersarray = [];
    fetch(url)
    .then(response =>response.json())
    .then(result=>{
        usersarray = result;
        for(let users in usersarray){
            if(userinput.value == usersarray[users].login && passwordlogin.value == usersarray[users].password){
             
                sessionStorage.setItem('username',`${userinput.value}`);
               alert('Good')
            }
           
        }
        console.log(usersarray)
    })
   
})

let body = document.querySelector('body');
function loadLanguage(language) {
    let url = 'i18n.json';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Обновление текстовых значений элементов
        const elements = document.querySelectorAll('.i18n');
    
        for (let element of elements) {
          
          const key = element.getAttribute('i18n');
          let translation = data[language][key];
          localStorage.setItem(key,translation);
          element.innerHTML = translation;
        }
      });
}
const isEnLanguage = localStorage.getItem('translate');
if(isEnLanguage ==='en'){
  loadLanguage(isEnLanguage)
  const EnOption = languageSelect.querySelector('option[value="en"]');
  EnOption.selected = true;
}
else{
  loadLanguage('ru');
  const ruOption = languageSelect.querySelector('option[value="ru"]');
  ruOption.selected = true;
}
const languageselect = document.getElementById('languageSelect');
languageselect.addEventListener('change', function(){
  let select = languageselect.value;
  loadLanguage(select)
  
  localStorage.setItem('translate',select);
})
let buttonswitch = document.getElementById("check");
let boxes = document.querySelectorAll('.box');


const isDarkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';
if (isDarkThemeEnabled) {
    switchdarktheme();
    buttonswitch.checked = true;
  }

function switchdarktheme(){
    body.style.backgroundColor ='black';
  for(let i = 0; i < boxes.length; i++){
       boxes[i].classList.add("darkmode");
  }
  
  
}
function switchlight(){
    body.style.backgroundColor ='white';
    for(let i = 0; i < boxes.length; i++){
        boxes[i].classList.remove("darkmode");  
   }
   
  
}
buttonswitch.addEventListener('change',function(){
    if(buttonswitch.checked){  
      localStorage.setItem('darkThemeEnabled','true') 
      switchdarktheme();
        }
     else {
      switchlight();
         localStorage.setItem('darkThemeEnabled','false')
     }
});




