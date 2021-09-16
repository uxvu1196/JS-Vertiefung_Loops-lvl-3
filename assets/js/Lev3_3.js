/* 
Aufgabenstellung


Wir verfeinern unseren “Loooooop” aus Aufgabe 2_2
Jetzt wollen wir eine Fehlermeldung ausgeben, wenn der User 0 eingibt
Zusätzlich überprüfen wir, ob der User eine gerade Zahl eingegeben hat
wenn das der Fall ist werden wir nur die Buchstaben“o” in unsere Ausgabe schreiben
Bsp: // input: 4 output: Loooop
wenn die Zahl ungerade ist
möchten wir, dass sich die Buchstaben “o” und die Zahlen “0” in der Ausgabe abwechseln
Bsp: // input: 5 output: Lo0o0op
*/

/* function result() {
    let num = document.getElementById("number").value
    let loop = document.getElementById("resultLoop");
    let str = ""
    for (let i = 0; i < num; i++) {
        str += "o"
    }
    loop.innerHTML = str;
} */

/* LEV2_2
function result() {
    let num = document.getElementById("number").value
    let loop = document.getElementById("resultLoop");
    let array = []
    for (let i = 0; i < num; i++) {
        array.push("o")
    }
    loop.innerHTML = array.join("");
} */







function result() {
    let num = document.getElementById("number").value
    let loop = document.getElementById("resultLoop");
    let error = document.getElementById("error");
    let hidden = document.getElementById("hidden");
    let array = []
    /*   for (let i = 0; i < num; i++) {
        array.push("o")
    }
      loop.innerHTML = array.join(""); */
    if (num == 0) {
        hidden.style.display = "none"
        error.innerHTML = "ERROR";
    }
    if (num % 2 == 0) {
        console.log("ist gerade")
        for (let i = 0; i < num; i++) {
            array.push("o")
        }
        loop.innerHTML = array.join("");
    } else {
        console.log("ist nicht gerade")
        for (let j = 0; j < num; j++) {
            array.push("0")
            // console.log(array.length);
            console.log(i, array.splice(i + j));
            // console.log(array);
            //array.length

        }
        loop.innerHTML = array.join("");
    }
}




















/*
function result() {

    let num = Number(document.getElementById("number").value);

    // at least a number greater than 0...
    if (num == 0) {
        document.getElementById("resultLoop").innerHTML = "Number must be greater as 0!"
        return;
    }
    let str = "Lp".split("");
    for (let i = 0; i < num; i++) {
        str.splice(1, 0, 'o');
    }
    document.getElementById("resultLoop").innerHTML = str.join("");
}  */