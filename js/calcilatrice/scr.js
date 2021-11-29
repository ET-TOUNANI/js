let inpt=document.querySelector("input");
inpt.value=null;
inpt.focus()
ress=0;
 art="";
function textT(x){
    inpt.focus()
    inpt.value +=x;
    inpt.focus()
}

function calc(v){
    
    switch(v){
        case '+' :  ress =parseInt(inpt.value) + ress;
                    inpt.value=null;
                    art='+';
                    inpt.focus()
                    break;
        case '-' :  
                    if(ress==0)
                        ress=parseInt(inpt.value)
                    else 
                        ress=ress-parseInt(inpt.value)
                        
                    inpt.value=null;
                    art='-';
                    inpt.focus()
                    break; 
        case '*' :  ress =parseInt(inpt.value) * ((ress==0)?ress=1:ress);
                    inpt.value=null;
                    art='*';
                    inpt.focus()
                    break;
        case '/' :  
                            if(ress==0)
                                ress=parseInt(inpt.value);
                            else
                                ress=ress/parseInt(inpt.value);
                    inpt.value=null;
                    art='/';
                    inpt.focus()
                    break;
    }
}

function res(){
    inpt.focus()
    calc(art);
    inpt.value=ress;
    ress=0;
}
