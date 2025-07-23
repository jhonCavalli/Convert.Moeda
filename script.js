const form = document.getElementById("ConvertForm");
const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertedAmount = document.getElementById("convertedAmount");
const loading = document.querySelector("loading");
const result = document .querySelector(".result");
const error = document.querySelector(".error");



const API_URL =" https://v6.exchangerate-api.com/v6/5d4653edf286154e58f67721/latest/";

    function convertMoney() {
        loading.style.display = "block";


    }


form.addEventListener("submit", function(event) {
    event.preventDefault();
    convertMoney();
});
