const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2);
    //show the results
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      weightGuide.innerHTML = `<p>Under Weight = Less then 18.6</p>`;
    } else if (18.6 <= bmi && bmi <= 24.9) {
      weightGuide.innerHTML = `<p>Normal Range = 18.6 and 24.9<p>`;
    } else {
      weightGuide.innerHTML = ` <p>Overweight = Greater then 24.9</p>`;
    }
  }
});
