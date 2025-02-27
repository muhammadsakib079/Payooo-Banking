// User Data
const userData = { 
    user1:{
        id:"01712345678",
        PIN:"1234"
    },
    user2:{
        id:"01787654321",
        PIN:"4321"
    },
    user3:{
        id:"01751950293",
        PIN:"2244"
    },
    user4:{
        id:"01711112222",
        PIN:"1111"
    }
};
document.getElementById('login-btn')
    .addEventListener('click', function () {
        const mNumber =document.getElementById('number').value;
        const pin = document.getElementById('pin').value;
        validContact(mNumber, pin)
        // contact == userData.id
        // code == userData.pin
        // 
        function validContact(contact, code) {
            if (contact.length == 11 && !contact.includes(" ") && contact.slice(0, 2) == "01") {
                if (code.length == 4 && !code.includes(" ")) {
                    if (contact == userData.user3.id) {
                        if (code == userData.user3.PIN) {
                            window.location.href = 'home.html'
                        }
                        else{
                            alert("Your PIN is Wrong")
                        }
                    }
                    else{
                        alert("You have no account on this number")
                    }
                }
                else{
                    alert("You PIN is no Invalid")
                }
                }
            else{
                alert("You number is no Invalid")
            }
            }
          })

