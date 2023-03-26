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
    return email.match(/^[-.\w]+@([\w-]+\.)+[\w-]+$/g) ? email + ' ok' : email + ' not ok. check it!'
}

console.log('задача 7: ' + checkEmail('my_mail 123@mail.ru'))

// Задача 8
// Дана строка с буквами, пробелами и цифрами.
//     Найдите сумму всех чисел из данной строки.

const getSumFromString = (str) => {
    return str.match(/\d+/g).reduce((acc, el) => acc + Number(el),0)
}

console.log('задача 8: ' + getSumFromString('hfh 34jkj   2 lkll80'))

// Задача 9
// Удалите одной регуляркой все повторяющиеся слова из строки,
//     например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'.

const deleteDuplicates = (str) => {
    const obj = {}
    return str.replace(/\w+/g, el => {
        if (obj[el]) {
            obj[el]++
            return ''
        }
        else {
            obj[el] = 1
            return el
        }
    }).replace(/\s+/g, ' ')
}

console.log('задача 9: ' + deleteDuplicates('dsf xxx xxx sd'))

// Задача 10
// Напишите функцию change_register(str), которая принимает
// в качестве аргумента строку и и заменяет регистр каждого
// символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК»,
// то на выходе должно быть «кАжДыЙ оХоТнИк».

const changeRegister = (str) => {
    return str.replace(/./g, letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()
    )
}

console.log('задача 10: ' + changeRegister('КаЖдЫй ОхОтНиК'))