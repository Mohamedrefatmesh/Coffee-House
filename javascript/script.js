var addcart=function(textname,price,name)
{
 var ncart=document.getElementById("cartnumber").innerHTML;
 ncart++;
 document.getElementById("cartnumber").innerHTML=""+ncart;
 var numberintext=document.getElementsByName(textname)[0].value;
 if(numberintext==0)
 {
  alert("1 item from "+name+" is added to cart and total price = "+price+"$");
 }
 else
 {
  alert(numberintext+" items from "+name+" is added to cart and total price = "+price*numberintext+"$");
 }
document.getElementsByName(textname)[0].value="";
}
var addbutton=function(textname)
{
 var amounts=document.getElementsByName(textname)[0].value;
 amounts++;
 document.getElementsByName(textname)[0].value=amounts;
 
}
var minusbutton=function(textname)
{
 var amounts=document.getElementsByName(textname)[0].value;
 if(amounts>0)
 {
  amounts--;
 document.getElementsByName(textname)[0].value=amounts;
 }
 
 
}
var buynow=function(textname,price,name)
{
 var numberintext=document.getElementsByName(textname)[0].value;
  if(numberintext==0)
 {
  var conf=window.confirm("are you sure to buy 1 item from "+name+" with total price = "+price+"$");
  if(conf==true)
  {
   alert("ok done");
  }
  else
  {
   alert("ok transaction has been cancelled");
  }
 }
 else
 {
  var conf2=window.confirm("are you sure to buy "+numberintext+" items from "+name+" with total price = "+price*numberintext+"$");
  if(conf2==true)
  {
   alert("ok done");
  }
  else
  {
   alert("ok transaction has been cancelled");
  }
  
 }
document.getElementsByName(textname)[0].value="";
}