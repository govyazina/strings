// 11
// Написать функцию, которая находит сумму всех чисел от 1 до num.
//     num — положительное целое число больше 0
// (2) → 3 (1 + 2)
// (8) → 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

const getSum = (num) => {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}

console.log('задача 11: ' + getSum(8))

// 12
// Реализуйте функцию generateRange(min, max, step),
//     которая принимает три аргумента и генерирует диапазон
// целых чисел от min до max с шагом step.
//     min — левая граница диапазона,
//     max — правая граница диапазона
// step — шаг.
// (мин < макс)
//
// ПРИМЕР
// generateRange(2, 10, 2) => [2,4,6,8,10]
// generateRange(1, 10, 3) => [1,4,7,10]

const generateRange = (min, max, step) => {
    const arr = []
    for (let i = min; i <= max; i += step) {
        arr.push(i)
    }
    return arr
}

console.log('задача 12: ' + generateRange(2, 10, 2))

// 13
// Написать функцию, которая возвращает x в степени n.
//     Иначе говоря, умножает x на себя n раз и возвращает результат.
// // (3, 2) → 3 * 3 = 9, (3, 3) → 3 * 3 * 3 = 27

const power = (x, n) => {
    return x**n
}

console.log('задача 13: ' + power(3, 2))

// 14
// сгенерировать num чисел до 100 и отсортировать их
// в порядке возрастания

const random = (num) => {
    const arr = []
    for (let i = 0; i < num; i++) {
        arr.push(Math.round(Math.random()*100+1))
    }
    return arr.sort((a, b) => a - b)
}

console.log('задача 14: ' + random(12))

// 15
// Напиши функцию, которая в массиве чисел находит и
// возвращает наименьшее число.
//     [94, 2, 71, 10, 22, 71] —>  2

const minNum = (arr) => {
    return Math.min(...arr)
}

console.log('задача 15: ' + minNum([94, 2, 71, 10, 22, 71]))