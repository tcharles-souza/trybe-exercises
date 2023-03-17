import validator from 'validator';
import isEmail from 'validator/lib/isEmail';
import isMobilePhone from 'validator/lib/isMobilePhone'
import isTaxID from 'validator/lib/isTaxID'

const validateBtn = document.querySelector('#validator');
const validateTxt = document.querySelector('#textToValidate');


// validateBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     isEmail(validateTxt.value);
// });

// isMobilePhone

validateBtn.addEventListener('click', (event) => {
    event.preventDefault();
   console.log(isTaxID(validateTxt.value, 'pt-BR'));
});
