// Задача 2
// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!'

const replace = (str) => {
    return str.replaceAll('@', '!')
}

console.log(replace('aaa@bbb@ccc'))