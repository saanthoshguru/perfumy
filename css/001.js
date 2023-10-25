function add(){
   let num1=Number(document.getElementById("hehehhee").value);
   var num2=Number(document.getElementById("hahahaaha").value);
   var addition= num1+num2;
   document.getElementById("ahaan").innerHTML=addition;
 

}

function sub(){
    let num1=Number(document.getElementById("hehehhee").value);
    var num2=Number(document.getElementById("hahahaaha").value);
    var sub= num1-num2;
    document.getElementById("ahaan").innerHTML=sub;
  
 
 }
 function multipleop(){
    let num1=Number(document.getElementById("hehehhee").value);
    var num2=Number(document.getElementById("hahahaaha").value);
    var multiple= num1 * num2;
    document.getElementById("ahaan").innerHTML=multiple;
  
 
 }
 function divide(){
    let num1=Number(document.getElementById("hehehhee").value);
    var num2=Number(document.getElementById("hahahaaha").value);
    var divide= num1/num2;
    document.getElementById("ahaan").innerHTML=divide;
 }
function rel() 
{
   var num3=20,num4=20;
   var result=num3>num4;
   console.log(result);
   if(num3===num4)
   {
      console.log("equal");
   }
   var price=5000;
   if((price>5000)&&(product=='lg'))
   {
      console.log("its available");
   }
   else
   console.log("not available");
}
rel()
function cloud()
{
   let fru=document.getElementById("fruits").value;
   if(fru=="apple");
   {
      console.log(fru);
   }
   else {if(fru=="orange");
   console.log(fru);

cloud()