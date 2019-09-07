let ctmnts 
= 0;

let ctsecs 
= 0;

let startchr 
= 0;
// used to control when to read data

let displays = document.querySelector("#time").style.display = "flex";


function 
countdownTimer() 
{





if 
(startchr == 
0 && document.getElementById('mns')
&& document.getElementById('scs'))
{

// yeh dekhne ke liye ke integer number use hoon

ctmnts = 
parseInt(document.getElementById('mns').value);

ctsecs = 
parseInt(document.getElementById('scs').value);





// if(isNaN(ctmnts)) ctmnts = 0;

// if(isNaN(ctsecs)) ctsecs = 0;





document.getElementById('mns').value
= ctmnts;

document.getElementById('scs').value
= ctsecs;

startchr = 
1;

document.getElementById('btnct').setAttribute('disabled',
'disabled');
// disable the button

}


// if minutes and seconds are 0,

if 
(ctmnts == 
0 && ctsecs 
== 0)
{

startchr = 
0;

document.getElementById('btnct').removeAttribute('disabled');
// remove "disabled" to enable the button



// execute a function when jb timer 0 pe phonch jaye...



return 
false;

}

else 
{

// decrease seconds, and decrease minutes if seconds reach to 0

ctsecs--;

if 
(ctsecs < 
0) 
{

if 
(ctmnts > 
0) 
{

ctsecs = 
59;

ctmnts--;

}

else 
{

ctsecs = 
0;

ctmnts = 
0;

}

}

}


// display the time in page, and auto-calls this function after 1 seccond
displays;

document.getElementById('showmns').innerHTML
= ctmnts;

document.getElementById('showscs').innerHTML
= ctsecs;

setTimeout('countdownTimer()',
1000);

}