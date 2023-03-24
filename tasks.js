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