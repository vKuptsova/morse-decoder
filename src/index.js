const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let arr2 = [];
    let t = expr.length / 10;
    let pos = 0;
    const iterator = Object.keys(MORSE_TABLE);
    for (let i = 0; i<t; i++) {
        arr[i] = expr.substring(10+pos, pos);
        pos +=10;
        let p = 0;
            let a = arr[i];
            if (a != '**********') { 
              for (let j = 0; j<5; j++) {
                if ( a.substring(2+p, p) === '10') {
                    arr2[j] = ".";
                    p += 2;
                } else if ( a.substring(2+p, p) === '11'){
                    arr2[j] = "-";
                    p += 2;
                } else if ( a.substring(2+p, p) === '00'){
                    arr2[j] = "";
                    p += 2;
                }
                
            } 
            arr[i] = arr2.join('');
        } else {
                arr[i] = " ";
            }
        for (const key of iterator) {
        if (arr[i] === key){
           arr[i] = MORSE_TABLE[key];
        }
    } 
  }
    return arr.join("");
}

module.exports = {
    decode
}