// Code By Nishant_0073
function getpassword(){
var passlength;
passlength=Number(document.getElementById("size").value);

let digit = 0 , spchars = 0 , alphabates = 0 ;
if(document.getElementById("SpeChar").checked === true)
{
    spchars=1;
}
if(document.getElementById("Digite").checked === true)
{
    digit=1;
}
if(document.getElementById("Alphabates").checked === true)
{
    alphabates=1;
}
if(digit!=1 && spchars!=1 && alphabates!=1)
{
    digit=1;
    spchars=1;
    alphabates=1;
}

    var arrdigit = ['0','1','2','3','4','5','6','7','8','9'];
    var arrspchar = ['!','@','#','$','%','}','&','*','(',')','>','?','/'];
    var arralpha = ['a','b','c','d','e','g','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v','w','x','v','u','y','z',
                    'A','B','C','D','E','G','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V','W','X','V','U','Y','Z']
   
    var passw="";
    if(digit===1 && spchars===1 && alphabates===1)
    {
        var range = arrdigit.length+ arralpha.length + arrspchar.length;
        range = range -1;
        var array = arrspchar + arrdigit + arralpha;
       while(passw.length !== passlength)
       {
            var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            while(array[randomnum] === ',' || randomnum<0 || randomnum >range)
            {
                var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            }
            passw +=  array[randomnum];
        }
       
    }
    else if(digit===1 && spchars===1 )
    {
        var range = arrdigit.length + arrspchar.length;
        range = range -1;
        var array = arrspchar + arrdigit ;
       while(passw.length !== passlength)
       {
            var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            while(array[randomnum] === ',' || randomnum<0 || randomnum >range)
            {
                var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            }
            passw +=  array[randomnum];
        }
       
    }
    else if(digit===1  && alphabates===1)
    {
        var range = arrdigit.length+ arralpha.length ;
        range = range -1;
        var array =  arrdigit + arralpha;
       while(passw.length !== passlength)
       {
            var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            while(array[randomnum] === ',' || randomnum<0 || randomnum >range)
            {
                var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            }
            passw +=  array[randomnum];
        }
       
    }
    if( spchars===1 && alphabates===1)
    {
        var range =  arralpha.length + arrspchar.length;
        range = range -1;
        var array = arrspchar + arralpha;
       while(passw.length !== passlength)
       {
            var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            while(array[randomnum] === ',' || randomnum<0 || randomnum >range)
            {
                var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            }
            passw +=  array[randomnum];
        }
       
    }
    else if(digit===1 )
    {
        var range = arrdigit.length ;
        range = range -1;
        var array = arrdigit ;
       while(passw.length !== passlength)
       {
            var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            while(array[randomnum] === ',' || randomnum<0 || randomnum >range)
            {
                var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            }
            passw +=  array[randomnum];
        }
       
    }
    else if(spchars===1 )
    {
        var range = arrspchar.length;
        range = range -1;
        var array = arrspchar;
       while(passw.length !== passlength)
       {
            var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            while(array[randomnum] === ',' || randomnum<0 || randomnum >range)
            {
                var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            }
            passw +=  array[randomnum];
        }
       
    }
    else 
    {
        var range = arralpha.length ;
        range = range - 1;
        var array = arralpha;
       while(passw.length !== passlength)
       {
            var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            while(array[randomnum] === ',' || randomnum<0 || randomnum >range)
            {
                var randomnum = Math.floor(Math.random() * (range - 0 + 1)) + 0;
            }
            passw +=  array[randomnum];
        }
    }
    document.getElementById("password").innerHTML= (passw);
    copy()
}

function copy()
{
    CopyToClipboard("password")
}

function CopyToClipboard(containerid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Password Copied to Clipboard...!!")
  }
}
