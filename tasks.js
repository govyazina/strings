// Задача 1
// Реализуйте функцию, принимающую слово и возвращающую количество
// заглавных букв в нем
// ПРИМЕР
// ("проКрАСТИНация") -> 6

const getSumUpperCases = (str) => {
    // return str.match(/[А-Я]/g).length
    let i = 0
    for (const strElement of str) {
        if (strElement === strElement.toUpperCase()) {
            i++
        }
    }
    return i
}


console.log('задача 1: ' + getSumUpperCases("проКрАСТИНация"))

// Задача 2
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!'

const replace = (str) => {
    return str.replaceAll('@', '!')
}

console.log('задача 2: ' + replace('aaa@bbb@ccc'))

// Задача 3
// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'

const cut = (str, word) => {
    return str.split(word).map(el => el.trim()).join(' ')
}

console.log('задача 3: ' + cut('aaa bbb ccc', 'bbb'))

// Задача 4
// Дана переменная str, в которой хранится какой-либо текст.
//     Реализуйте обрезание длинного текста по следующему принципу:
//     если количество символов этого текста больше заданного
// в переменной n, то в переменную result запишем первые n символов
// строки str и добавим в конец троеточие '...'.
//     В противном случае в переменную result запишем содержимое
// переменной str.

const threeDots = (str, n) => {
    let result = str.slice(0, n) + '...'
    return result
}

console.log('задача 3: ' + threeDots('Дана переменная str, в которой хранится какой-либо текст.', 25))