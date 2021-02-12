let p = document.querySelector('p');
let dodaj = document.querySelector('button#dodaj');
dodaj.onclick = function () {
    p.innerText = "przykładowy tekst";
}
let usun = document.querySelector('button#usun');
usun.onclick = function () {
    p.innerText = "";
}
