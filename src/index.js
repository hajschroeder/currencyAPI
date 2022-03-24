import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyCalculator from './currencycalc.js';

function clearFields() {
  $('#homeBase').val("");
  $('#awayTeam').val("");
  $('#inputAmount').val("");
  $('.showErrors').text("");
  $('.showConversion').text("");
}

$(document).ready(function() {
  $('#doCalculation').click(function() {
    let base = $('#homeBase').val();
    let target = $('#awayTeam').val();
    let amount = $('#inputAmount').val();
    clearFields();
    let promise = CurrencyCalculator.getExchange(base, target, amount);
    promise.then(function(response) {
      const body =JSON.parse(response);
      console.log(body);
      $('.showConversion').text(`${amount} dollar value in ${base} dollars is equal to ${body.conversion_result} in ${target} dollars at an exhange rate of ${body.conversion_rate}.`);
    }, function(error) {
      $('.showErrors').text(`We're sorry, there was an error with your request: ${error}`);  
    });
  });
});
