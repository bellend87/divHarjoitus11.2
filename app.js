var sijainti = document.getElementById("vaihdasivubtn");
sijainti.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#divsijaintisivu").classList.add("active")
}
var laskut = document.getElementById("laskusivubtn");
laskut.onclick = function () {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#divlaskusivu").classList.add("active")
}
