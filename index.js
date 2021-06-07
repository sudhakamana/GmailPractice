var NumberofHiddenMsg = document.querySelectorAll(".hiddenmsg");

for(var i=0; i<NumberofHiddenMsg; i++)
{
    document.querySelectorAll(".hiddenmsg")[i].addEventListener("click", firstLast);
    function firstLast(){
        alert("i got clicked");
    }
}



/*document.querySelectorAll(".hiddenmsg")[0].style.display="none";
var firstName = document.querySelectorAll(".hiddenmsg")[0].style.display="none";
firstName.addEventListener("click", firstAndLastName);
    function firstAndLastName(){
        /*if( firstName === null){
            firstName.style.display="none";
        } else{
            firstName.style.display="inline";
        }*/
        /*alert("hello sudha");
    }*/


/*document.querySelectorAll(".hiddenmsg")[1].style.display="none";
var enterGmail = document.querySelectorAll(".hiddenmsg")[0].style.display="none";
function enterGmailHere(){
    if( enterGmail === null){
        enterGmail.style.display="none";
    } else{
        enterGmail.style.display="inline";
    }
}*/


/*document.querySelectorAll(".hiddenmsg")[2].style.display="none";
var enterPassword = document.querySelectorAll(".hiddenmsg")[0].style.display="none";
function enterPasswordHere(){
    if( enterPassword === null){
        enterPassword.style.display="none";
    } else{
        enterPassword.style.display="inline";
    }
}*/