class Student{
    studentName;
    id;
    currentClass;
    school;
    sscBatch;
    gpa;
    constructor(studentName, id, currentClass, school, sscBatch, gpa){
        this.id = id;
        this.studentName = studentName;
        this.currentClass = currentClass;
        this.school = school;
        this.sscBatch = sscBatch;
        this.gpa = gpa;
    }
}

class SecondaryStudent extends Student{
    group;
    constructor(studentName, id, currentClass, school, sscBatch, gpa, group){
        super(studentName, id, currentClass, school, sscBatch, gpa);
        this.group = group
    }
}

const saif = new SecondaryStudent('Jubayer Hossain', '12', 'xi', 'Pabna', '2022', '5.00', 'science')

console.log(saif);