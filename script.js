let form = document.getElementById("ConvertForm");

    function convertMoney() {
        console.log("Converting money...");
    }


form.addEventListener("submit", function(event) {
    event.preventDefault();
    convertMoney();
});
