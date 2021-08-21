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
    let arr = Array.from(expr);
    let arrFive = [];
    let updArr = [];
    let decodes = [];

    for (let i = 0; i < arr.length; i+=2) {
        updArr.push(`${arr[i]}${arr[i+1]}`);
    }
    // console.log(updArr);
    while(updArr.length) {
        arrFive.push(updArr.splice(0,5));
    }

    arrFive.forEach(item => {
        for (let i = 0; i < item.length; i++) {
            let dot = '.',
                dash = '-';
            if (item[i] === '10') {
                item[i] = dot;
            } else if (item[i] === '11') {
                item[i] = dash;
            } else if (item[i] === '00') {
                item[i] = '';
            }
        }
    })
    for (let i = 0; i < arrFive.length; i++) {
        arrFive[i] = arrFive[i].join('');
    }
    // console.log(arrFive);

    arrFive.forEach (item => {
        if (item === '**********') {
            decodes.push(' ')
        }
        for (let key in MORSE_TABLE) {
            if (key === item) {
                decodes.push(MORSE_TABLE[key]);
            }
        }
    })
    //console.log(decodes.join(''));
    return decodes.join('');
}

module.exports = {
    decode
}