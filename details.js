document.addEventListener("DOMContentLoaded", function() {
    var urlParams = new URLSearchParams(window.location.search);
    var productId = urlParams.get('id');

    fetch(`https://661433702fc47b4cf27bdd78.mockapi.io/products/${produktId}`)
        .then(response => response.json())
        .then(produkt => {
            document.getElementById("productTitle").textContent = produkt.title;
            document.getElementById("productImg").src = produkt.image;
            document.getElementById("productPrice").textContent = produkt.price;
            document.getElementById("productDesc").textContent = produkt.description;
        })
        .catch(error => console.error('Feil ved henting av produktinformasjon:', error));
});
