function Caesarencryption(){
   
    let message = document.getElementById("a").value;
    let key = parseInt(document.getElementById("b").value);
    let result='';
     if(isNaN(key)==false){
    for(let i=0;i<message.length;i++){
        if(message.charCodeAt(i)>=65 && message.charCodeAt(i)<=90){
            result += String.fromCharCode(((message.charCodeAt(i)-65+key)%26)+65);
        }
        else if(message.charCodeAt(i)>=97 && message.charCodeAt(i)<=122){
            result += String.fromCharCode(((message.charCodeAt(i)-97+key)%26)+97);
        }
            else if(message.charCodeAt(i)>=48 && message.charCodeAt(i)<=57){
                result += String.fromCharCode(((message.charCodeAt(i)-48+key)%10)+48);
            }
                  else if(message.charCodeAt(i)==32){
                result += String.fromCharCode(message.charCodeAt(i));
            }
                    else if (message.charCodeAt(i)>=33 && message.charCodeAt(i)<=47){
                        result += String.fromCharCode(((message.charCodeAt(i)-33+key)%14)+33);
                    }
                        else{
                            result += message[i];
                        }
    }
    document.getElementById("c").value=result;
}
   else{
    alert("Please enter a integer for the key! ")
   }
}