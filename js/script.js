let a = '';
let b = '';
let song = '';
let finish = false;

let number = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];
let last = ['/', 'x', '+', '-'];

let field = document.querySelector('.cals__field p');

function clearAll(){
   a = '';
   b = '';
   song = '';
   field.textContent = '0';
};

document.querySelector('.ac').onclick = clearAll;

document.addEventListener('click', function(ever){
   if(!ever.target.classList.contains('cals__button')) return;
   if(ever.target.classList.contains('ac')) return;

   field.textContent = '';

   const key = ever.target.textContent;

   if(number.includes(key)){
      if(b == '' && song == ''){
         a += key;
         field.textContent = a;
      }
      else if(!a == '' && !b == '' && finish){
         b = key;
         finish = false;
         field.textContent = a + " " + song + " " + b;
      }
      else{
         b += key;
         field.textContent = a + " " + song + " " + b;
      }
      return
   }


   if(last.includes(key)){
      song = key;
      field.textContent = a + " " + song;
      return
   }

   if(key === '='){
      switch (song){
         case "+": 
            a = (+a) + (+b);
            break;
         case "-":
            a = (+a) - (+b);
            break;
         case "x":
            a = (+a) * (+b);
            break;
         case "/":
            a = (+a) / (+b);
            break;
      }
      finish = true;
      field.textContent = a;
   }
})