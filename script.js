// User Data
const userData = "01751950293"
const userPIN = "2244"


document.getElementById('login-btn')
    .addEventListener('click', function () {
        const numberElement = document.getElementById('number');
        const pinElement = document.getElementById('pin');
        const mNumber = numberElement.value;
        const pin = pinElement.value;
        validContact(mNumber, pin)
        function validContact(contact, code) {
            if (contact.length == 11 && !contact.includes(" ") && contact.slice(0, 2) == "01" && code.length == 4 && !code.includes(" ")) {
                if (contact.toString() == userData && code.toString() == userPIN) {
                    const linkElement = document.createElement('a');
                    linkElement.href = 'home.html'
                    linkElement.click();
                }
                else {
                    document.getElementById('number').style.color = 'red';
                    document.getElementById('pin').style.color = 'red';
                }
            }
            else{
                document.getElementById('number').style.color = 'red';
                document.getElementById('pin').style.color = 'red';
            }
            
        }

          })



     