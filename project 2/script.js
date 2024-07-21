const form = document.querySelector('form');
// thihs will gives the empty value because when the page is reloaded at that time the height value is nothing
// const height = parseInt(document.querySelector('#height').value);


//restricting the default action of form
form.addEventListener('submit', function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if(height === '' || height<0 || isNaN(height)){
     results.innerHTML = `Please gives a valid height ${height}`
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `Please gives a valid height ${weight}`
  }
  else{
    const bmi = (weight / ((height*height) / 10000)).toFixed(2);
    // show results
    
    
    if(bmi < 18.6){
      results.innerHTML = `<span>${bmi} <br/>UnderWeight</span>`;
    }else if(bmi>=18.6 && bmi<=24.9){
      results.innerHTML = `<span>${bmi} <br/>Normal</span>`;
      
    }
    else{
      results.innerHTML = `<span>${bmi}</span> <br/>OverWeight</span>`;
    }

  }
  
}) 