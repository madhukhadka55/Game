var container=document.getElementById('container');
var truths=document.getElementById('truth');
var dares=document.getElementById('dare');
var test=document.getElementById('test');
var clear=document.getElementById('clear');


var truthQues=[




    "When was the last time you lied?",
    "When was the last time you cried?",
   " What's your biggest fear?",
    "What's your biggest fantasy?",
    "Do you have any fetishes?",
    "What's something you're glad your mum doesn't know about you?",
    "Have you ever cheated on someone?",
    "What's the worst thing you've ever done?"




]

var dareQues=[

   " What are your top three turn-ons? ",

    "What is your deepest darkest fear? ",
   " Tell me about your first kiss?",
    "Who is the sexiest person here?",
   " What is your biggest regret? ",
   " Who here has the nicest butt?",
    "Who is your crush?",
   " Who was the last person you licked?"





]

truths.addEventListener("click",function(){
    var randomTruth=truthQues[Math.floor(Math.random()*truthQues.length)];
    test.innerHTML=randomTruth;
    document.getElementById('box').style.background="green";
})

dares.addEventListener("click",function(){
    var randomDare=dareQues[Math.floor(Math.random()*dareQues.length)];
    test.innerHTML=randomDare;
     document.getElementById('box').style.background="red";

})
clear.addEventListener("click",function(){
    test.innerHTML="";
    document.getElementById('box').style.background="palegreen";
})