const word = document.getElementById("word");
const btn = document.getElementById("butt");
const totalCount = document.getElementById("total")
const totalCountS = document.getElementById("totalSpace")


word.oninput = function() {
    totalCount.innerHTML =`Total words including space : ${word.value.length}`
    totalCountS.innerHTML =`Total words excluding space : ${word.value.split(" ").join("").length}`;
}