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