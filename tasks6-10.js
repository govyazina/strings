// Задача 6
// Дана строка 'ahb acb aeb aeeb adcb axeb'.
//     Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону:
//     буква 'a', любой символ, буква 'b'.

const getSubstrings = (str) => {
    return str.match(/a.b/g)

}

console.log('задача 6: ' + getSubstrings('ahb acb aeb aeeb adcb axeb'))


// Задача 7
// Определите, что переданная строка является емэйлом.
//     Примеры емэйлов для тестирования mymail@mail.ru, my.mail@mail.ru,
// my-mail@mail.ru, my_mail@mail.ru, mail@mail.com, mail@mail.by,
// mail@yandex.ru.

const checkEmail = (email) => {
    return email.match(/[-.\w]+@([\w-]+\.)+[\w-]+/g) ? email + ' ok' : email + ' not ok. check it!'
}

console.log('задача 7: ' + checkEmail('my_mail123@mail.ru'))
