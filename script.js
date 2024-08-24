let mudancaH1 = document.querySelector("h1");
let elementoA = document.querySelector("a");

mudancaH1.innerText = "Título criado com JS";
elementoA.innerText = "Clique aqui para acessar o link";

let adicionarElementos = document.querySelector("ol");
let addElementosComLinks = document.querySelector("ul");

adicionarElementos.innerHTML = `
<ol>
<li>Item lista ordenada</li>
<li>Item lista ordenada</li>
<li>Item lista ordenada</li>
</ol>
`
addElementosComLinks.innerHTML = `
<ul>
<li><a href = "facebook.com">Facebook</a></li>
<li><a href = "instagram.com">Instagram</a></li>
<li><a href = "twitter.com">Twitter</a></li>
</ul>
`
