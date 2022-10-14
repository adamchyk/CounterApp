let count = 0;

function plus() {
    document.getElementById('counter').innerText = ++count
}

function minus() {
    document.getElementById('counter').innerText = -- count
}

function reset() {
    count = 0
    document.getElementById('counter').innerText = count
}