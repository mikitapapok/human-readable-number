module.exports = function toReadable(n) {
    let a = 0;
    let b = 0;
    let c = 0
    let hundreds = '';
    let deacde = ''
    let simple = ''
    let string = ''
    const simpleNumbers = ["",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const decades = ['',
        '',
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
        "hundred",
    ];
    if(n===0){
        string='zero'
    }

    if (n > 0 && n <= 19) {
        simple = simpleNumbers[n]
        string=simple
    }

    if (n >= 20 && n <=99) {
        deacde = decades[Math.floor(n / 10)]
        string=deacde
        if (n % 10 > 0) {
            simple = simpleNumbers[n % 10]
            string+=' '+simple
        }
    }

    if (n >=100 && n <= 999) {
        hundreds = `${simpleNumbers[Math.floor(n/100)]} hundred`;
        a = n % 100
        string+=hundreds
        if (a > 0 && a <= 19) {
            deacde = simpleNumbers[a]
            string+=' '+deacde
        } else if (a > 19) {
            deacde = decades[Math.floor(a / 10)]
            string+=' '+deacde
            simple = simpleNumbers[a % 10]
            if(a%10>0){string+=' '+simple}
        }
    }    
    return string
}
