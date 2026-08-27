```javascript
// JavaScript da Barbearia do Seu Zé

console.log("Barbearia do Seu Zé - site carregado!");

const links = document.querySelectorAll("nav a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navegando pelo site...");
    });
});
```
