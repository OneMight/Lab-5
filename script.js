
let randomnumb;
const apiKey = "hkens39kv4JXbRkMSKt1p2GfHmNzb9wK76iu0yeebUs";
const url ="https://api.unsplash.com/photos/random?count=10&client_id="+apiKey+""; 
let logoutbutton = document.getElementById('logout');
function connect(imagen){
  fetch(url)
  .then(respone => respone.json())
  .then(data => {
      data.forEach(result=>{
          let imageurl = result.urls.regular;
          imagen.style.content = "url("+imageurl+")";
      }
      ) 
  }
  )
}

let imagen1 = document.getElementById("imag1");
let imagen2 = document.getElementById("imag2");
let imagen3 = document.getElementById("imag3");

imagen1.style.width = "379px";
imagen1.style.height = "252px";
imagen2.style.width = "379px";
imagen2.style.height = "252px";
imagen3.style.width = "379px";
imagen3.style.height = "252px";



// button.onclick = function(){
//     connect(imagen1);
//     connect(imagen2);
//     connect(imagen3);
// }
let adminpage = document.querySelector('.admin');
let Busername = document.querySelector('.username');
let register = document.querySelector('.register');
if(sessionStorage.getItem('username')!= ''){
    
    Busername.style.display = 'block';
    Busername.innerHTML = sessionStorage.getItem('username');
    logoutbutton.style.display = 'block';
    register.style.display = 'none';
}
if(sessionStorage.getItem('username') == 'Admin'){
    adminpage.style.display = 'block';
    Busername.style.display = 'block';
    Busername.innerHTML = sessionStorage.getItem('username');
    logoutbutton.style.display = 'block';
    register.style.display = 'none';
}



logoutbutton.addEventListener('click',()=>{
    sessionStorage.setItem('username','');
    Busername.style.display = 'none';
    register.style.display = 'block';
    logoutbutton.style.display = 'none';
    adminpage.style.display = 'none';
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
let allp = document.querySelectorAll('p');
let dives = document.querySelectorAll('.Cards > div');
const isDarkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';
if (isDarkThemeEnabled) {
    switchdarktheme();
    buttonswitch.checked = true;
  }

function switchdarktheme(){
    
  for(let i = 0; i < boxes.length; i++){
       boxes[i].classList.add("darkmode");
  }
  for(let i = 0; i < allp.length; i++){
    allp[i].classList.add('darkmodetext');
  }
  for(let i = 0; i < dives.length; i++){
    dives[i].classList.add('darkmode');
  }
}
function switchlight(){
    for(let i = 0; i < boxes.length; i++){
        boxes[i].classList.remove("darkmode");  
   }
   for(let i = 0; i < allp.length; i++){
    allp[i].classList.remove('darkmodetext');
  }
  for(let i = 0; i < dives.length; i++){
    dives[i].classList.remove('darkmode');
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