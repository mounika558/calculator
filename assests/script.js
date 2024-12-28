
function append(number){
    const input=document.getElementById('input');
    input.value+=number;
}
function appendop(symbol){
    const input=document.getElementById('input');
    input.value+=symbol;
}
function clearinput(){
   const input=document.getElementById('input');
    input.value ='';
}

function deleteend(exp){
    const input=document.getElementById('input');
input.value=input.value.slice(0,-1);
}
function answer(exp){
    const input=document.getElementById('input');
    try{
        input.value=eval(input.value);
    }
    catch(err){
        alert("error");
    }
}

  
  
 