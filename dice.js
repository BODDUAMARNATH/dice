var x = Math.floor(Math.random() * (6)) + 1;
var y = Math.floor(Math.random() * (6)) + 1;
if (x == 1) {
    document.querySelector('#display11').style.display = 'block';
}
if (x == 2) {
    document.querySelector('#display12').style.display = 'block';
}
if (x == 3) {
    document.querySelector('.display13').style.display = 'block';
}
if (x == 4) {
    document.querySelector('.display14').style.display = 'block';
}
if (x == 5) {
    document.querySelector('.display15').style.display = 'block';
}
if (x == 6) {
    document.querySelector('#display16').style.display = 'block';
}
if (y == 1) {
    document.querySelector('#display21').style.display = 'block';
}
if (y == 2) {
    document.querySelector('#display22').style.display = 'block';
}
if (y == 3) {
    document.querySelector('.display23').style.display = 'block';
}
if (y == 4) {
    document.querySelector('.display24').style.display = 'block';
}
if (y == 5) {
    document.querySelector('.display25').style.display = 'block';
}
if (y == 6) {
    document.querySelector('#display26').style.display = 'block';
}
if (x > y) {
    document.querySelector('.h').innerHTML = 'PLAYER1 IS THE WINNER'
}
else if (y > x) {
    document.querySelector('.h').innerHTML = 'PLAYER2 IS THE WINNER'
}
else {
    document.querySelector('.h').innerHTML = 'DRAW BETWEEN THE PLAYERS'
}