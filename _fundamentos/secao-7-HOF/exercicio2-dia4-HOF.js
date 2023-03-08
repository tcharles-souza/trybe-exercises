const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (car, [model, manufacturer, year] = [...car]) => ({model, manufacturer, year});
    
console.log(toObject(chiron));