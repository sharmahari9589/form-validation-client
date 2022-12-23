let userName=document.getElementById("userName");
let userpara=document.getElementById("usrName");
let email=document.getElementById("mail");
let mailpara=document.getElementById("mail-msg");
let date= document.getElementById("date");
let dateMsg=document.getElementById("dob");
let phone= document.getElementById("phone");
let mob = document.getElementById("mob");
let password=document.getElementById("password");
let passMsg=document.getElementById("pass");
let pass2=document.getElementById("secpassword");
let passM=document.getElementById("pass2");
let area=document.getElementById("area");
let areMsg=document.getElementById("area1");
let flag=1;
function checkdata(){
if(userName.value==""){
  userpara.innerText="Please enter any name";
  flag=0;
}
else if(userName.value.length<5){
  userpara.innerText="please enter minimum four characters";
}
else{
  userpara.innerText="";
  flag=1;
}
if(email.value==""){
  mailpara.innerText="please enter valid mail";
  flag=0;
}
else{
  mailpara.innerText="";
  flag=1;
}
if(date.value==""){
  dateMsg.innerText="Please enter date";
  flag=0;
}
else{
  dateMsg.innerText="";
  flag=1;
}
if(phone.value.length!=10){
  mob.innerText="please enter valid number";
  flag=0;
}
else{
  mob.innerText="";
  
}
if(password.value==""){
  passMsg.innerText="plese enter password";
  flag=0;
}
else if(password.value.length<6){
  passMsg.innerText="password is too short"; 
  flag=0;
}
else{
  passMsg.innerText="";
  flag=1;
}
if(pass2.value!=password.value){
  passM.innerText="password not matching";
  flag=0;
}
else{
  passM.innerText="";
  flag=1;
}
if(area.value==""){
  areMsg.innerText="please fill this area";
  flag=0;
}
else if(area.value.length<50){
  areMsg.innerText="minimum 200 characters required";
  flag=0;
}
else{
  areMsg.innerText="";
  flag=1;
}


if(flag){
  return true;
}
else{
  return false;
}

}











console.log(userpara);
