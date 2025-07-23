const form = document.getElementById("ConvertForm");
const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertedAmount = document.getElementById("convertedAmout");
const loading = document.querySelector(".loading");
const result = document.querySelector(".result");
const error = document.querySelector(".error");



const API_URL =" https://v6.exchangerate-api.com/v6/5d4653edf286154e58f67721/latest/";

   async function convertMoney() {
        loading.style.display = "block";
        error.style.display = "none";
        result.style.display = "none";
        

        try {
            const response = await fetch(API_URL + fromCurrency.value); 
            const data = await response.json();

            const rate = data.rates[toCurrency.value];
            const convertedRate = (amount.value * rate).toFixed(2);

            convertedAmount.value = convertedValue;
            result.style.display = "block";

            result.innerHTML = `
                <div style="fonte-size:1.4rem;>
                    &{amount.value} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}.
                </div>
                <div style="font-size:1.2rem opacity:0.8; martin-top:0.5rem;">
                    Taxa: 1 ${fromCurrency.value} = ${rate} ${toCurrency.value}
                </div>
            `;


        }
        catch(error) {
            alert("Erro ao converter moeda. Por favor, tente novamente mais tarde.");

        }
        finally {
            loading.style.display = "none";
        }
    }


form.addEventListener("submit", function(event) {
    event.preventDefault();
    convertMoney();
});
