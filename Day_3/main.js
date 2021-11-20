
let grades = [
    { name: "John", grade: 8, sex: "M" },
    { name: "Sarah", grade: 12, sex: "F" },
    { name: "Bob", grade: 16, sex: "M" },
    { name: "Johnny", grade: 2, sex: "M" },
    { name: "Ethan", grade: 4, sex: "M" },
    { name: "Paula", grade: 18, sex: "F" },
    { name: "Donald", grade: 5, sex: "M" },
    { name: "Jennifer", grade: 13, sex: "F" },
    { name: "Courtney", grade: 15, sex: "F" },
    { name: "Jane", grade: 9, sex: "F" },
];

// 1. Tìm thứ hạng trung bình của cả lớp
// 2. Tìm thứ hạng trung bình của nam trong lớp
// 3. Tìm thứ hạng trung bình của Nữ trong lớp
// 4. Tìm thứ hạng cao nhất của Nam trong lớp
// 5. Tìm thứ hạng cao nhất của Nữ trong lớp
// 6. Tìm thứ hạng thấp nhất của Nam trong lớp
// 7. Tìm thứ hạng thấp nhất của Nữ trong lớp
// 8. Tìm thứ hạng cao nhất của cả lớp
// 9. Tìm thứ hạng thấp nhất của cả lớp
// 10. Lấy ra danh sách tất cả học viên nữ trong lớp
// 11. Sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
// 12. Sắp xếp thứ hạng học viên theo chiều giảm dần
// 13. Lấy ra học viên nữ có tên bắt đầu bằng "J"
// 14. Lấy ra top 5 người có thứ hạng cao nhất



function filterMale(arr){
    return arr.filter(e => e.sex === "M")
}

function filterFemale(arr){
    return arr.filter(e => e.sex === "F")
}

function highestGrade(arr){
    return Math.max(...arr.map(e => e.grade))
}

function minGrade(arr){
    return Math.min(...arr.map(e => e.grade))
}


function avgGrade(grades){
    let total = grades.map(e => e.grade).reduce((a , b) => a + b, 0)
    return total / grades.length
}

function sortByName(arr){
    return arr.map(e => e.name).sort()
}

function sortByGrade(arr){
    return arr.map(e => e.grade).sort((a, b) => b - a)
}

function femaleNameStartJ(arr){
    return arr.map(e => e.name).filter(s => s.charAt(0) == 'J')
}

function sortByGradeAsc(arr){
    return arr.map(e => e.grade).sort((a, b) => a - b)
}

function takeFirst5(arr){
    let result = []
    for(let i = 0; i < 5; i++){
        result.push(arr[i])
    }
    return result
}

function findMatch(arr1, arr2){
    return arr1.filter(e => arr2.includes(e.grade))
}



//1
console.log(avgGrade(grades));

//2
console.log(avgGrade(filterMale(grades)));

//3
console.log(avgGrade(filterFemale(grades)));

//4
console.log(highestGrade(filterMale(grades)));

//5
console.log(highestGrade(filterFemale(grades)));

//6
console.log(minGrade(filterMale(grades)));

//7
console.log(minGrade(filterFemale(grades)));

//8
console.log(highestGrade(grades));

//9
console.log(minGrade(grades));

//10
console.log(filterFemale(grades));

//11
console.log(sortByName(grades));

//12
console.log(sortByGrade(grades));

//13
console.log(femaleNameStartJ(filterFemale(grades)));

//14
console.log(findMatch(grades, takeFirst5(sortByGradeAsc(grades))));





