let age_2 = 18;
let age_3 = 60;

const checkage = function(age) {
    age = Number(age)
    alert(age)
if(typeof age == 'number') {
    if (age < age_2){
        alert("You don't have access cause your age is", age)
    } else if(age >= age_2 && age < age_3){
        alert("Welcome !")  
    }else if(age > age_3){
        alert("Keep calm and look Culture channel")
    }else {
        console.log("Technical work")
    }
} else {
    console.log("Error")
}
}

let a = prompt('Enter your age')
checkage(a)
