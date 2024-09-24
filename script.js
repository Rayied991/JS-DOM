// // # Selector
// function selector(element) {
//   return document.getElementById(element);
// }

// // # Event Listener
// function click(element, event, callback) {
//   selector(element).addEventListener(event, function (event) {
//     callback(event);
//   });
// }

// // Toggler Button and Tab
// function toggleTab(event) {
//   if (event.target.id === "history") {
//     event.target.classList.add("bg-primary", "text-dark-primary");
//     selector("donation").classList.remove("bg-primary", "text-dark-primary");
//     selector("blog").classList.add("hidden");
//     selector("history-tab").classList.remove("hidden");
//     return;
//   }

//   event.target.classList.add("bg-primary", "text-dark-primary");
//   selector("history").classList.remove("bg-primary", "text-dark-primary");
//   selector("blog").classList.remove("hidden");
//   selector("history-tab").classList.add("hidden");
// }

// click("history", "click", toggleTab);
// click("donation", "click", toggleTab);

// // @ BLOG POSTS DONATION
// click("blog", "click", function (event) {
//   // if not a button return
//   if (event.target.tagName !== "BUTTON") return;

//   // Get the donation amount
//   const value = isNaN(event.target.previousElementSibling.value)
//     ? 0
//     : parseFloat(event.target.previousElementSibling.value);

//   if (!value || value < 0) return alert("Invalid Donation Amount!");

//   // * Set the donation
//   if (parseFloat(selector("balance").innerText) < value)
//     return alert("Insufficient Balance To Donate!");

//   const donationEl =
//     event.target.parentElement.parentElement.children[0].children[1]
//       .children[0];

//   // Set the Donation amount to the blog post card
//   donationEl.innerText = (parseFloat(donationEl.innerText) + value).toFixed(2);

//   // Set total remaining balance
//   selector("balance").innerText = (
//     parseFloat(selector("balance").innerText) - value
//   ).toFixed(2);

//   // Clear the input field
//   event.target.previousElementSibling.value = "";

//   // # Open Modal
//   selector("modal").classList.add("modal-open");

//   // History card html
//   const html = `
//       <div class="card border lg:p-8">
//         <div class="card-body">
//           <h2 class="card-title">
//             ${value.toFixed(2)} Taka is ${
//     event.target.parentElement.parentElement.children[1].innerText
//   }
//           </h2>
//           <p class="font-light text-dark-secondary">
//             Date: ${new Date(Date.now()).toString()}
//           </p>
//         </div>
//       </div>
//     `;

//   // Rendering donation history
//   selector("history-tab").insertAdjacentHTML("beforeend", html);
// });

// // # Close Modal
// click("close-modal", "click", function () {
//   selector("modal").classList.remove("modal-open");
// });


//new

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
  document.getElementById('donation').classList.add('hidden');
  document.getElementById('history').classList.add('hidden');
  

  
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


///show modal for donation confirmation












