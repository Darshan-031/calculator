let input=document.getElementById('inp-box');
let buttons = document.querySelectorAll('button');
let arr = Array.from(buttons);
let str ="";
let key = document.addEventListener("keydown" , function(e){
    update(e.key);
    // alert(e.key);
})
arr.forEach(button => button.addEventListener("click",(e) => {
      var key = e.target.innerHTML;
      update(key);
}))
function update(key){
    if(key == "=" || key == "Enter" && str !== ""){
        str = eval(str);
    }
    else if(key == " " || key == "AC"){
        str ="";
    }
    else if(key == "Backspace" || key == "DEL"){
        str = str.substring(0,str.length-1);
    }
    else if(key == "+" || key == "-" || key == "*" || key == "/" || key == "%" || key == "." )
    {
        let lst = str.substring(str.length-1);
        if( lst == "+" || lst == "-" || lst == "*" || lst == "/" || lst == "%" )
        str = str.substring(0,str.length-1);
        str += key;
    }
    else if(key == "1" || key == "2" || key == "3" || key == "4" || key == "5" || key == "6" || key == "7" || key == "8" || key == "9" || key == "0" || key == "00")
    {
        str+=key;
    }
    input.value = str;
}