class PasswordGenerator {
    constructor(length = 12, includeUppercase = true, includeNumbers = true, includeSymbols = true) {
        this.length = length;
        this.includeUppercase = includeUppercase;
        this.includeNumbers = includeNumbers;
        this.includeSymbols = includeSymbols;
    }

    generatePassword() {
        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*_+';

        let chars = lowercaseChars;
        if (this.includeUppercase){
            chars += uppercaseChars
        }
        if (this.includeNumbers){
            chars += numberChars
        }
        if (this.includeSymbols){
            chars += symbolChars
        }

        let password = '';
        for (let i = 0; i < this.length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        }

        return password;
    }
}

function generatePassword() {
    const passwordLength = 12; // You can change the length as per your requirement
    const includeUppercase = true; // Whether to include uppercase letters
    const includeNumbers = true; // Whether to include numbers
    const includeSymbols = true; // Whether to include symbols

    const passwordGenerator = new PasswordGenerator(passwordLength, includeUppercase, includeNumbers, includeSymbols);
    const passwordInput = document.getElementById('password');
    passwordInput.value = passwordGenerator.generatePassword();
}

const button = document.getElementById('bttn')
button.onclick = function(){
    const Name = document.getElementById('name')
    let value = Name.value
    if(!value){
        alert('Please enter your name')
    }
    else{
        generatePassword()
        }
}