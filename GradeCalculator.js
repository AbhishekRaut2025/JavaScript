// write a function that takes marks of student from student as input and returns the grade according to marks
// 90-100 = A+
// 80-89 = A
// 70-79 = B
// 60-69 = C
// 35-59 = D
// 0-34 = Fail
// else invalid marks
// Early return Pattern

function GetGrade(score) {
    if (score >= 90 && score <= 100) return "A+";
    if (score >= 80 && score <= 89) return "A";
    if (score >= 70 && score <= 79) return "B";
    if (score >= 60 && score <= 69) return "C";
    if (score >= 35 && score <= 59) return "D";
    if (score <= 0 || score < 35) return "Fail";
    return "Invalid Marks";
}

console.log(GetGrade(989));

