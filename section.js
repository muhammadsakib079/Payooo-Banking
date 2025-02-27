document.getElementById('welcome')
  .addEventListener("click", function () {
    const tSection = document.getElementById('footer_section')
    tSection.classList.add('hidden')
    // const btn1 = document.getElementById("cashout_btn");
    //   btn1.style.background = 'white'
    //   const btn2 = document.getElementById("add_money_btn");
    //   btn2.style.background = 'white'
    const ids = ['add_money_btn', 'cashout_btn', 'transfer_Money_btn', 'get_bonus_btn', 'pay_bill_btn', 'transactions_btn']
    ids.forEach(id => {
      document.getElementById(id).style.background = 'white';
    })
  })

// add money
document.getElementById("add_money_btn")
  .addEventListener('click', function activateSection() {
    this.style.background = '#EEEEEE'
    const section1 = document.getElementById("add_money");
    section1.classList.remove("hidden");
    const ids1 = ['cashout','transfer_Money', 'get_bonus']
    ids1.forEach(id => {
      document.getElementById(id).classList.add("hidden");
    })
    const ids2 = ['cashout_btn','transfer_Money_btn', 'get_bonus_btn']
    ids2.forEach(id => {
      document.getElementById(id).style.background = 'white';
    })
    const tSection = document.getElementById('footer_section');
    tSection.classList.remove('hidden');
  })


  // cashout
document.getElementById("cashout_btn")
  .addEventListener('click', function activateSection() {
    this.style.background = '#EEEEEE'
    const ids2 = ['add_money_btn','transfer_Money_btn', 'get_bonus_btn']
    ids2.forEach(id => {
      document.getElementById(id).style.background = 'white';
    })
    const ids = ['add_money', 'transfer_Money', 'get_bonus']
    ids.forEach(id => {
      document.getElementById(id).classList.add("hidden");
    })
    const section2 = document.getElementById("cashout");
    section2.classList.remove("hidden");
    const tSection = document.getElementById('footer_section')
    tSection.classList.remove('hidden')
  })
  // TM
document.getElementById("transfer_Money_btn")
  .addEventListener('click', function activateSection() {
    this.style.background = '#EEEEEE'
    const ids2 = ['add_money_btn','cashout_btn', 'get_bonus_btn']
    ids2.forEach(id => {
      document.getElementById(id).style.background = 'white';
    })
    const ids = ['add_money', 'cashout', 'get_bonus']
    ids.forEach(id => {
      document.getElementById(id).classList.add("hidden");
    })
    const section2 = document.getElementById("transfer_Money");
    section2.classList.remove("hidden");
    const tSection = document.getElementById('footer_section')
    tSection.classList.remove('hidden')
  })
  // GB
document.getElementById("get_bonus_btn")
  .addEventListener('click', function activateSection() {
    this.style.background = '#EEEEEE'
    const ids2 = ['add_money_btn','cashout_btn', 'transfer_Money_btn']
    ids2.forEach(id => {
      document.getElementById(id).style.background = 'white';
    })
    const ids = ['add_money', 'cashout', 'transfer_Money']
    ids.forEach(id => {
      document.getElementById(id).classList.add("hidden");
    })
    const section2 = document.getElementById("get_bonus");
    section2.classList.remove("hidden");
    const tSection = document.getElementById('footer_section')
    tSection.classList.remove('hidden')
  })
  



