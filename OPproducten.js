function main(){

var raam= document.getElementsByTagName("img")
var array =[];

for (var i=0; i < raam.length; i++){
      array[i] = raam[i].src;
}

function carousel(){
      var eruit = array.pop();
      array.unshift(eruit);
      for (var i = 0; i < array.length; i ++){
            raam[i].src = array[i];
      }

}
setInterval(carousel, 1000);
}

window.onload = function(){
      main();
}
