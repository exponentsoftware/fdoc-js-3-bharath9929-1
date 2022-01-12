// 	Write a function called convertArrayToObject which can convert the array to a structured object.


function convertArrayToObject(students) {

    let stu_array = students.map(s1 => 
        Object.assign({"name": s1[0],
         "skills":JSON.stringify(s1[1]),
         "scores":JSON.stringify(s1[2])})
    )

    return stu_array
}


const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

console.log(convertArrayToObject(students))
