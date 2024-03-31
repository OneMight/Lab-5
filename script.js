let button = buttonswitch;
let randomnumb;
const url ="https://api.github.com/OneMight/Lab-5/blob/gh-pages/imagen.json";

fetch(url)
.then(response => response.json())
.then(image => response.image[0].id_image)
.catch(error => console.log(error));
function decimalAdjust(type, value, exp) {

    if (typeof exp === "undefined" || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
   
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
      return NaN;
    }
    value = value.toString().split("e");
    value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
   
    value = value.toString().split("e");
    return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
  }
function getnumgerofimage(){
 return randomnumb = Math.random();
}

Math.round10 = function (value, exp) {
    return decimalAdjust("round", value, exp);
}

let imagen1 = document.getElementById("imag1");
let imagen2 = document.getElementById("imag2");
let imagen3 = document.getElementById("imag3");


function switchimage(randomnumb){
    for(let i = 1; i <= 10; i++){
        let numb
        let secondnumb
        if(i == randomnumb*10){
                numb  = i+1;
                secondnumb = i+2;
           imagen1.style.content = 'url(images/pack'+i+'.jpg)';
           imagen1.style.width = "379px";
           imagen1.style.height = "252px";
           imagen2.style.content = 'url(images/pack'+numb+'.jpg)';
           imagen2.style.width = "379px";
           imagen2.style.height = "252px";
           imagen3.style.content = 'url(images/pack'+secondnumb+'.jpg)';
           imagen3.style.width = "379px";
           imagen3.style.height = "252px";
        }
    }
}
button.onclick = function(){
    randomnumb = getnumgerofimage();
    randomnumb = Math.round10(randomnumb,-1)
    switchimage(randomnumb);
}
