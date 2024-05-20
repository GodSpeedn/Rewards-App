let points= document.getElementById("point");
console.dir(points);

let buttons = document.getElementsByClassName("btn1");
console.dir(buttons);

 
document.getElementById('redeem-button').addEventListener('click', function() {
    const pointElement = document.getElementById('point');
    let points = parseInt(pointElement.textContent);
    if (points >= 100) {
        points -= 100;
        pointElement.textContent = points;
        alert('You have redeemed 100 points for a $10  Gift Card! an email with the redeem code and reciept would be sent to your registered email address');
    } else {
        alert('You do not have enough points to redeem!');
    }
});