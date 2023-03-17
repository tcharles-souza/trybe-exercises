import validator from 'validator';
import './style.css';

const validateBtn = document.querySelector('#validator');
const validateTxt = document.querySelector('#textToValidate');
const selectValue = document.querySelector('select');
const message = document.querySelector('p');

const validateEmail = (email) => {
  if (validator.isEmail(email)) {
    message.innerHTML = 'Email validado com sucesso';
  } else {
    message.innerHTML = 'Email inválido';
  }
};

const validateCPF = (cpf) => {
  if (validator.isTaxID(cpf, 'pt-BR')) {
    message.innerHTML = 'CPF validado com sucesso';
  } else {
    message.innerHTML = 'Inválido, o CPF deve conter 11 números';
  }
};

const validateTel = (tel) => {
  if (validator.isMobilePhone(tel, 'pt-BR')) {
    message.innerHTML = 'Telefone validado com sucesso';
  } else {
    message.innerHTML = 'Inávalido, digite o número corretamente';
  }
};

const validateCEP = (cep) => {
  if (validator.isPostalCode(cep, 'BR')) {
    message.innerHTML = 'CEP validado com sucesso';
  } else {
    message.innerHTML = 'CEP Inválido, digite no formato XXXXX-XX';
  }
};

const validateDate = (date) => {
  if (validator.isDate(date, 'DD/MM/YYYY')) {
    message.innerHTML = 'Data validada com sucesso';
  } else {
    message.innerHTML = 'Data inválida, digite no DD/MM/AAAA';
  }
};

validateBtn.addEventListener('click', (event) => {
  event.preventDefault();
  switch (selectValue.value) {
  case 'email':
    validateEmail(validateTxt.value);
    break;
  case 'cpf':
    validateCPF(validateTxt.value);
    break;
  case 'telefone':
    validateTel(validateTxt.value);
    break;
  case 'cep':
    validateCEP(validateTxt.value);
    break;
  case 'nascimento':
    validateDate(validateTxt.value);
    break;
  default:
    message.innerHTML = 'Escolha uma opção';
  }
});
