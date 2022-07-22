function greed(person: string, date: Date) {
    return `asd ${person}, ${date.toDateString()}`
}
greed("gray", new Date())

// string number boolean

let str: string = '123'
let num: number = 223
let flag: boolean = false

let arr: number[] = [1, 23, 23]

let a: any

type name = string | number

function greet(name: name): string | number {
    return name
}

greet('123')

interface point {
    x: number,
    y: number
}

function printPoort(point: point) {
    return point
}

printPoort({ x: 1, y: 2 })

