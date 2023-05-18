// Variables
let val1 = document.getElementById("alpha");
let val2 = document.getElementById("nums");
let val3 = document.getElementById("special");
let val4 = document.getElementById("fun");
let val5 = document.getElementById("text-area");
let val6 = document.getElementById("btn-sub");

class Password {
    constructor() {
        this.lc = "abcdefghijklmnopqrstuvwxyz";
        this.uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.num = "1234567890"
        this.special = "!@#$%^&*?+"
    }
    alphabets() {
        let pass = "";
        let i = 0;
        while (i < 8) {
            pass += this.lc[Math.floor(Math.random() * 26)]
            pass += this.uc[Math.floor(Math.random() * 26)]

            i += 2;
        }
        return pass;
    }
    numbers() {
        let pass = "";
        let i = 0;
        while (i < 8) {
            pass += this.lc[Math.floor(Math.random() * 26)]
            pass += this.uc[Math.floor(Math.random() * 26)]
            pass += this.num[Math.floor(Math.random() * 10)]
            i += 3;
        }
        pass = pass.substring(0, 8)
        return pass;
    }
    onlynums() {
        let pass = "";
        let i = 0;
        while (i < 8) {
            pass += this.num[Math.floor(Math.random() * 10)]
            i += 1;
        }
        pass = pass.substring(0, 8)
        return pass;
    }
    special2() {
        let pass = "";
        let i = 0;
        while (i < 8) {
            pass += this.lc[Math.floor(Math.random() * 26)]
            pass += this.uc[Math.floor(Math.random() * 26)]
            pass += this.num[Math.floor(Math.random() * 10)]
            pass += this.special[Math.floor(Math.random() * 10)]
            i += 4;
        }
        pass = pass.substring(0, 8)
        return pass;
    }
    alphaspec() {
        let pass = "";
        let i = 0;
        while (i < 8) {
            pass += this.lc[Math.floor(Math.random() * 26)]
            pass += this.uc[Math.floor(Math.random() * 26)]
            pass += this.special[Math.floor(Math.random() * 10)]
            i += 3;
        }
        pass = pass.substring(0, 8)
        return pass;
    }
    numspec() {
        let pass = "";
        let i = 0;
        while (i < 8) {
            pass += this.num[Math.floor(Math.random() * 10)]
            pass += this.special[Math.floor(Math.random() * 10)]
            i += 2;
        }
        pass = pass.substring(0, 8)
        return pass;

    }
    funny() {
        let fun = ["Password", "Funny", "012345678", "HAHAHAHA", "wordpass", "ClickMe", "404NotFound", "drowssap", "00000000", "NotFunny"]
        let pass = fun[Math.floor(Math.random() * 10)];
        return pass;
    }
}
let solution = new Password;
val6.addEventListener('click', () => {
    if(val1.checked && val2.checked && val3.checked&&val4.checked){
        val5.value = " ----Error---- "
    }
    else if (val1.checked && val2.checked && val3.checked) {
        val5.value = solution.special2()
    }
    else if (val1.checked && val2.checked) {
        val5.value = solution.numbers()
    }
    else if (val3.checked && val2.checked) {
        val5.value = solution.numspec()
    }
    else if (val1.checked && val3.checked) {
        val5.value = solution.alphaspec()
    }
    else if (val1.checked) {
        val5.value = solution.alphabets()
    }
    else if (val4.checked) {
        val5.value = solution.funny();
    }
    else if(val2.checked) {
        val5.value = solution.onlynums();
    }
})

