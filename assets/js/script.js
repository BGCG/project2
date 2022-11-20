console.log('Hello world');

document.addEventListener("DOMContentLoaded", function() {
let buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getElementsByTagName("button") === "click") {
            alert("You clicked the sledgehammer!");
        } else {
            scorecounting();
        }
    });
}
});



function scorecounting() {

console.log("Score counting...");

document.getElementById("score1") = 1;
document.getElementById("score2") = 2;
document.getElementById("score3") = 3;
document.getElementById("score4") = 4;
document.getElementById("score5") = 5;

}

function finalscoreaddition() {

}

