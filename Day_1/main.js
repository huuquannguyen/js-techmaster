//1
function markRange(mark){
    if(mark >= 85){
        console.log("A")
    }else if(mark >= 70){
        console.log("B")
    }else if(mark >= 40){
        console.log("C")
    }else{
        console.log("D")
    }
}
let mark = prompt("Mark?")
markRange(mark)

//2
function dayInWeek(day){
    switch(day){
        case "1":
            console.log("Thu 2")
            break
        case "2":
            console.log("Thu 3")
            break
        case "3":
            console.log("Thu 4")
            break
        case "4":
            console.log("Thu 5")
            break
        case "5":
            console.log("Thu 6")
            break
        case "6":
            console.log("Thu 7")
            break
        case "0":
            console.log("Chu nhat")
            break
        default:
            console.log("khong ton tai")
    }
}
let choose = prompt("Number?")
dayInWeek(choose)

//3
function randomInRange(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}
console.log(randomInRange(0,10))

//4
function sumOdd(){
    let result = 0;
    for(let i = 1; i <= 100; i += 2){
        result += i
    }
    console.log("Sum odd numbers from 1 to 100: " + result)
}
sumOdd()

//5
function sum(){
    let result = 0;
    for(let i = 0; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            result += i
        }
    }
    console.log("Result for exercise 5 = " + result)
}
sum()