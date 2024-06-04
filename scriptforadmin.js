let urle = 'LoginsandPasswords.json'
const userscontainer = document.querySelector('.usersdiv'); 

fetch(urle)
.then(respone => respone.json())
.then(result => { for(let element of result){
    const userElement = document.createElement("div");
  userElement.classList.add("user");

  const emailElement = document.createElement("p");
  emailElement.textContent = `Email: ${element.email}. Name: ${element.FirstName} ${element.LastName} (${element.FatherName}). Login: ${element.login}. Password: ${element.password}`;

  userElement.appendChild(emailElement);
  userscontainer.appendChild(userElement);
 }
})
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
let body = document.querySelector('body');
let btext = document.querySelector('.our');
const isDarkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';
if (isDarkThemeEnabled) {
  switchdarktheme();
  buttonswitch.checked = true;
}

function switchdarktheme(){
  
for(let i = 0; i < boxes.length; i++){
     boxes[i].classList.add("darkmode");
}
body.style.backgroundColor = "black";
btext.style = 'color: white';
}
function switchlight(){
  for(let i = 0; i < boxes.length; i++){
      boxes[i].classList.remove("darkmode");  
 }
 body.style.backgroundColor = "white";
 btext.style = 'color: black';
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
