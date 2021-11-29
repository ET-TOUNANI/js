
window.onload = () => {
    deleteAll();
}

let champ=document.querySelector("#champ");
function writeC(x){
    champ.focus();
    champ.value += x;
}


function deleteAll(){
    champ.value =" ";
    champ.focus();
}

function deleteC(){
    let size = (champ.value).length;
    let len =" ";
    for(i=0;i<size-1;i++){
         len += (champ.value)[i];
         champ.focus();
    }
    if(size >1){
        champ.value=len ;
        champ.focus();
    }
    else if(size ==1){
        champ.value=" ";
        champ.focus();
    }    
}




