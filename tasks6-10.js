// Задача 6
// Дана строка 'ahb acb aeb aeeb adcb axeb'.
//     Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону:
//     буква 'a', любой символ, буква 'b'.

const getSubstrings = (str) => {
    return str.match(/a.b/g)

}

console.log('задача 6: ' + getSubstrings('ahb acb aeb aeeb adcb axeb'))