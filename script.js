const appItem = document.querySelector('.app-item'); 
const calculatorModel = document.querySelector('.calculatorModel'); 

// calculator Model

function calcModel(e){
const element = e.target;
     if (element.classList.contains('calculatorClose')){
        calculatorModel.classList.remove('show');
     };
}

calculatorModel.addEventListener('click', calcModel)
appItem.addEventListener('click', ()=>{
  if(calculatorModel.classList.contains('show')){
    alert("Bhai calculator already open hai");
    return; 
  }
  calculatorModel.classList.add('show');

});
