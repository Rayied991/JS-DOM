function getInputFieldValueById(id){
  const inputValue=document.getElementById(id).value;
  const inputNumber=parseFloat(inputValue);
 
  return inputNumber;
}

function getTextFieldValueById(id){
  const textValue=document.getElementById(id).innerText;
  const textNumber=parseFloat(textValue);
  return textNumber;
}



function showSectionById(id){
  //hide all sections
  document.getElementById('main-section').classList.add('hidden');
  document.getElementById('history-cls').classList.add('hidden');
  

  
  document.getElementById(id).classList.remove('hidden');

}

let Balance=getTextFieldValueById('balance');


document.getElementById('donate-btn-Noakhali').addEventListener('click',function(event){
  event.preventDefault();

  let donationAmountN=getInputFieldValueById('don-amount-noakhali');
  let donAmountN=getTextFieldValueById('nkh');

  if(isNaN(donationAmountN) ){
    alert('Please Enter Valid Amount');
    return;
  }
  if(donationAmountN<0 ){
    return alert("Invalid Donation Amount!");
  }
  if(Balance>donationAmountN){
    console.log("entered");
    const updatedBalance=donAmountN+donationAmountN;
    const newBalance=Balance-donationAmountN;
    
    document.getElementById('nkh').innerText=updatedBalance;

    document.getElementById('balance').innerText=newBalance;
   
    document.getElementById("modal").classList.add("modal-open");

    document.getElementById('close-modal').addEventListener('click',function(){
      document.getElementById("modal").classList.remove("modal-open");
    });  




  }
  else{

    alert('Insufficient Balance');
  }

  
});
document.getElementById('donate-btn-Feni').addEventListener('click',function(event){
  event.preventDefault();
  let donAmountF=getTextFieldValueById('fni');
  let donationAmountF=getInputFieldValueById('don-amount-Feni');

  if(isNaN(donationAmountF) ){
    alert('Please Enter Valid Amount');
    return;
  }
  if(donationAmountF<0 ){
    return alert("Invalid Donation Amount!");
  }
  if(Balance>donationAmountF){
    console.log("entered");
    const updatedBalance=donAmountF+donationAmountF;
    const newBalance=Balance-donationAmountF;
    
    document.getElementById('fni').innerText=updatedBalance;

    document.getElementById('balance').innerText=newBalance;
    document.getElementById("modal").classList.add("modal-open");

    document.getElementById('close-modal').addEventListener('click',function(){
      document.getElementById("modal").classList.remove("modal-open");
    });  


  }
  else{

    alert('Insufficient Balance');
  }

  
});
document.getElementById('donate-btn-injured').addEventListener('click',function(event){
  event.preventDefault();
  let donAmountI=getTextFieldValueById('inj');
  let donatioAmountInjured=getInputFieldValueById('don-amount-injured');

  if(isNaN(donatioAmountInjured) ){
    alert('Please Enter Valid Amount');
    return;
  }   
  if(donatioAmountInjured<0 ){
    return alert("Invalid Donation Amount!");
  }
  if(Balance>donatioAmountInjured){
    console.log("entered");
    const updatedBalance=donAmountI+donatioAmountInjured;
    const newBalance=Balance-donatioAmountInjured;
    
    document.getElementById('inj').innerText=updatedBalance;

    document.getElementById('balance').innerText=newBalance;


    document.getElementById("modal").classList.add("modal-open");

    document.getElementById('close-modal').addEventListener('click',function(){
      document.getElementById("modal").classList.remove("modal-open");
    });  

  }
  else{

    alert('Insufficient Balance');
  }


});




document.getElementById('history').addEventListener('click',function(event){
  event.preventDefault();
  


  document.getElementById('history').classList.add('bg-primary');
  document.getElementById('donation').classList.remove('bg-primary');

  
  
  



  showSectionById('history-cls');
});
document.getElementById('donation').addEventListener('click',function(event){
  event.preventDefault();
  
  document.getElementById('history').classList.remove('bg-primary');
  document.getElementById('donation').classList.add('bg-primary');
  showSectionById('main-section');
});
















