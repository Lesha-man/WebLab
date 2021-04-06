increment.onclick = function() {
    let num = document.getElementById('num');
    num.innerHTML = Number(num.innerHTML) + 1;
};
minus.onclick = function() {
    let num = document.getElementById('num');
    num.innerHTML = Number(num.innerHTML) - 1;
};