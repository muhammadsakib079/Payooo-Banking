/* Transactions Panal Enable/Disable */

document.getElementById('welcome')
  .addEventListener("click", function () {
    const tSection = document.getElementById('footer_section')
    tSection.classList.add('hidden')
    const ids = ['add_money_btn', 'cashout_btn', 'transfer_Money_btn', 'get_bonus_btn', 'pay_bill_btn', 'transactions_btn']
    ids.forEach(id => {
      document.getElementById(id).style.background = 'white';
    })
  })
// Add Money Section
document.getElementById("add_money_btn")
  .addEventListener('click', function activateSection() {
    this.style.background = '#EEEEEE'
    const section1 = document.getElementById("add_money");
    section1.classList.remove("hidden");
    const ids1 = ['cashout', 'transfer_Money', 'get_bonus', 'pay_bill']
    ids1.forEach(id => {
      document.getElementById(id).classList.add("hidden");
    })
    const ids2 = ['cashout_btn', 'transfer_Money_btn', 'get_bonus_btn', 'pay_bill_btn']
    ids2.forEach(id => {
      document.getElementById(id).style.background = 'white';
    })
    const tSection = document.getElementById('footer_section');
    tSection.classList.remove('hidden');
  })

  document.getElementById('add_money_submit')
  .addEventListener('click', function addMoneySubmit(){
    const inputElement1 = document.getElementById('add_money_input_1');
    const inputElement2 = document.getElementById('add_money_input_2');
    const inputElement3 = document.getElementById('add_money_input_3');
    const inputElement4 = document.getElementById('add_money_input_4');
    const bank = inputElement1.value;
    const accountNumber = inputElement2.value;
    const amount = inputElement3.value;
    const PIN = inputElement4.value;
    if (bank == "Bkash" && accountNumber.length == 11 && !accountNumber.includes(" ") && accountNumber.slice(0, 2) == "01" && PIN.length == 4 && !PIN.includes(" ")){
      const balance = document.getElementById('balance');
      balance.innerText = amount;
      
    }
  })
// Cashout Section
document.getElementById("cashout_btn")
  .addEventListener('click', function activateSection() {
    this.style.background = '#EEEEEE'
    const ids2 = ['add_money_btn', 'transfer_Money_btn', 'get_bonus_btn', 'pay_bill_btn']
    ids2.forEach(id => {
      document.getElementById(id).style.background = 'white';
    })
    const ids = ['add_money', 'transfer_Money', 'get_bonus', 'pay_bill']
    ids.forEach(id => {
      document.getElementById(id).classList.add("hidden");
    })
    const section2 = document.getElementById("cashout");
    section2.classList.remove("hidden");
    const tSection = document.getElementById('footer_section')
    tSection.classList.remove('hidden')
  })
// Transfer Money Section
document.getElementById("transfer_Money_btn")
  .addEventListener('click', function activateSection() {
    this.style.background = '#EEEEEE'
    const ids2 = ['add_money_btn', 'cashout_btn', 'get_bonus_btn', 'pay_bill_btn']
    ids2.forEach(id => {
      document.getElementById(id).style.background = 'white';
    })
    const ids = ['add_money', 'cashout', 'get_bonus', 'pay_bill']
    ids.forEach(id => {
      document.getElementById(id).classList.add("hidden");
    })
    const section2 = document.getElementById("transfer_Money");
    section2.classList.remove("hidden");
    const tSection = document.getElementById('footer_section')
    tSection.classList.remove('hidden')
  })
// Get Bonus Section
document.getElementById("get_bonus_btn")
  .addEventListener('click', function activateSection() {
    this.style.background = '#EEEEEE'
    const ids2 = ['add_money_btn', 'cashout_btn', 'transfer_Money_btn', 'pay_bill_btn']
    ids2.forEach(id => {
      document.getElementById(id).style.background = 'white';
    })
    const ids = ['add_money', 'cashout', 'transfer_Money', 'pay_bill']
    ids.forEach(id => {
      document.getElementById(id).classList.add("hidden");
    })
    const section2 = document.getElementById("get_bonus");
    section2.classList.remove("hidden");
    const tSection = document.getElementById('footer_section')
    tSection.classList.remove('hidden')
  })
// Pay Bill Section
document.getElementById("pay_bill_btn")
  .addEventListener('click', function activateSection() {
    this.style.background = '#EEEEEE'
    const ids2 = ['add_money_btn', 'cashout_btn', 'transfer_Money_btn', 'get_bonus_btn']
    ids2.forEach(id => {
      document.getElementById(id).style.background = 'white';
    })
    const ids = ['add_money', 'cashout', 'transfer_Money', 'get_bonus']
    ids.forEach(id => {
      document.getElementById(id).classList.add("hidden");
    })
    const section2 = document.getElementById("pay_bill");
    section2.classList.remove("hidden");
    const tSection = document.getElementById('footer_section')
    tSection.classList.remove('hidden')
  })