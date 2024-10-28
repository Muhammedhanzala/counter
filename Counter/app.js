let count = 0;

function increament() {
    count++;
    document.querySelector('#counter').innerHTML = count;
}

function decrement() {
    if (count > 0) {
        count--;
        document.querySelector('#counter').innerHTML = count;
    }
}

function reset() {
    count = 0;
    document.querySelector('#counter').innerHTML = count;
}
