let submitbutton = document.getElementById('submit');
let accountname = document.getElementById('placename');
let typephotoshoot = document.getElementById('placetype');
const selected = document.getElementById('countofhours');
submitbutton.addEventListener('click',()=>{
    let neworder = {
        username: accountname.value,
        type: typephotoshoot.value,
        hours: selected.value
    }
    let url = 'orders.json';
    let arrayorders;
    
    fetch(url)
    .then(respone => respone.json())
    .then(result =>{
    arrayorders = result;
    arrayorders.push(neworder);
    
       console.log(arrayorders);
    
})
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


const isDarkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';
if (isDarkThemeEnabled) {
    switchdarktheme();
    buttonswitch.checked = true;
  }

function switchdarktheme(){
    
  for(let i = 0; i < boxes.length; i++){
       boxes[i].classList.add("darkmode");
  }
  
  
}
function switchlight(){
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
