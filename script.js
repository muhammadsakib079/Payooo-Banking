// User Data
const userData = "01751950293"
const userPIN = "2244"


document.getElementById('login-btn')
    .addEventListener('click', function () {
        const numberElement = document.getElementById('number');
        const pinElement = document.getElementById('pin');
        const mNumber = numberElement.value;
        const pin = pinElement.value;
        validContact(mNumber)
        validPIN(pin);
        function validContact(contact) {
            if (contact.length == 11 && !contact.includes(" ") && contact.slice(0, 2) == "01") {
                if (contact.toString() == userData) {
                    return true;
                }
                else {
                    document.getElementById('number').style.color = 'red';
                }
            }
            else{
                document.getElementById('number').style.color = 'red';
            }
            
        }
        function validPIN(code) {
            if (code.length == 4 && !code.includes(" ")) {
                if (code.toString() == userPIN) {
                    return true;
                }
                else {
                    document.getElementById('pin').style.color = 'red';
                }
            }
            else {
                document.getElementById('pin').style.color = 'red';
            }
            
        }
    
          })





