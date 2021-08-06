const accessCode1 = "VARIABLE";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";

function clues() {
    
    fill("white")
    textSize(15)
    text(clue1, 100,50)
    fill("lightblue")
    text("Hint: Always changing, not constant !!", 100,70)

    fill("white")
    textSize(15)
    text(clue2, 700,150)
    fill("lightblue")
    text("Hint: Performs a particular task !!", 700,170)

    fill("white")
    textSize(15)
    text(clue3, 100,250)
    fill("lightblue")
    text("Hint: Stores all information !!", 100,270)

}
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}
console.log("lavanya".shuffle());
//-> "veolrm  hth  ke opynug tusbxq ocrad ofeizwj"

console.log("the quick brown fox jumps over the lazy dog".shuffle());


var clue1="VARIABLE".shuffle();
var clue2="DATABASE".shuffle();
var clue3="FUNCTION".shuffle();