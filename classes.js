class Staff {
    constructor (first_name, last_name, phone_number,address, personal_email,role,schoolida_email,base_salary,bank_info){
        this.first_name=first_name;
        this.last_name=last_name;
        this.phone_number=phone_number;
        this.address=address;
        this.personal_email=personal_email;
        this.role=role;
        this.schoolida_email=schoolida_email;
        this.base_salary=base_salary;
        this.bank_info=bank_info;
    }

}

class Principal extends Staff{
    constructor (first_name, last_name, phone_number,address, personal_email,role,schoolida_email,base_salary,bank_info){
     super.first_name=first_name;
     super.last_name=last_name;
     super.phone_number=phone_number;
     super.address=address;
     super.personal_email=personal_email;
     super.role=role;
     super.schoolida_email=schoolida_email;
     super.base_salary=base_salary;
     super.bank_info=bank_info;
    }
    
}


class Accountant extends Staff{
    constructor (first_name, last_name, phone_number,address, personal_email,role,schoolida_email,base_salary,bank_info){
     super.first_name=first_name;
     super.last_name=last_name;
     super.phone_number=phone_number;
     super.address=address;
     super.personal_email=personal_email;
     super.role=role;
     super.schoolida_email=schoolida_email;
     super.base_salary=base_salary;
     super.bank_info=bank_info;
    }
    
}


class Floor_Directors extends Staff{
    constructor (first_name, last_name, phone_number,address, personal_email,role,schoolida_email,base_salary,bank_info,floor_number){
     super.first_name=first_name;
     super.last_name=last_name;
     super.phone_number=phone_number;
     super.address=address;
     super.personal_email=personal_email;
     super.role=role;
     super.schoolida_email=schoolida_email;
     super.base_salary=base_salary;
     super.bank_info=bank_info;
     this.floor_number=floor_number;
    }
    
}


class Teachers extends Staff{
    constructor (first_name, last_name, phone_number,address, personal_email,role,schoolida_email,base_salary,bank_info,floors_covered,classes_taught,subject,employment_type){
     super.first_name=first_name;
     super.last_name=last_name;
     super.phone_number=phone_number;
     super.address=address;
     super.personal_email=personal_email;
     super.role=role;
     super.schoolida_email=schoolida_email;
     super.base_salary=base_salary;
     super.bank_info=bank_info;
     this.floors_covered=floors_covered;
     this.classes_taught=classes_taught;
     this.subject=subject;
     this.employment_type=employment_type;
    }
    
}


class Counselors extends Staff{
    constructor (first_name, last_name, phone_number,address, personal_email,role,schoolida_email,base_salary,bank_info,creditCardNo,office_days){
     super.first_name=first_name;
     super.last_name=last_name;
     super.phone_number=phone_number;
     super.address=address;
     super.personal_email=personal_email;
     super.role=role;
     super.schoolida_email=schoolida_email;
     super.base_salary=base_salary;
     super.bank_info=bank_info;
     this.creditCardNo=creditCardNo;
     this.office_days=office_days;
    }
    
}


class Floors extends Floor_Directors,Teachers{
    constructor (first_name, last_name, phone_number,address, personal_email,role,schoolida_email,base_salary,bank_info,floors_covered,classes_taught,subject,employment_type,floor_number){
     super.first_name=first_name;
     super.last_name=last_name;
     super.phone_number=phone_number;
     super.address=address;
     super.personal_email=personal_email;
     super.role=role;
     super.schoolida_email=schoolida_email;
     super.base_salary=base_salary;
     super.bank_info=bank_info;
     super.floors_covered=floors_covered;
     super.classes_taught=classes_taught;
     super.subject=subject;
     super.employment_type=employment_type;
     super.floor_number=floor_number;
    }
    
}

class Classes extends Teachers{
    constructor (first_name, last_name, phone_number,address, personal_email,role,schoolida_email,base_salary,bank_info,floors_covered,classes_taught,subject,employment_type,class_name,students,floor){
     super.first_name=first_name;
     super.last_name=last_name;
     super.phone_number=phone_number;
     super.address=address;
     super.personal_email=personal_email;
     super.role=role;
     super.schoolida_email=schoolida_email;
     super.base_salary=base_salary;
     super.bank_info=bank_info;
     super.floors_covered=floors_covered;
     super.classes_taught=classes_taught;
     super.subject=subject;
     super.employment_type=employment_type;
     this.class_name=class_name;
     this.students=students;
     this.floor;
    }
    
}

class Part_Time_Teachers extends Teachers{
    constructor (first_name, last_name, phone_number,address, personal_email,role,schoolida_email,base_salary,bank_info,floors_covered,classes_taught,subject,employment_type,office_hours,hourly_rate){
     super.first_name=first_name;
     super.last_name=last_name;
     super.phone_number=phone_number;
     super.address=address;
     super.personal_email=personal_email;
     super.role=role;
     super.schoolida_email=schoolida_email;
     super.base_salary=base_salary;
     super.bank_info=bank_info;
     super.floors_covered=floors_covered;
     super.classes_taught=classes_taught;
     super.subject=subject;
     super.employment_type=employment_type;
     this.office_hours=office_hours;
     this.hourly_rate=hourly_rate;
    }
    
}

class Info {
    constructor(Employees){
        this.Employees=Employees;
    }
    getEmployeeInfo(){
        return this.Employees;
    }
}

class Assignments {
    constructor(file_upload,deadline, grade, problems, Teacher,students){
        this.file_upload=file_upload;
        this.deadline=deadline;
        this.grade=grade;
        this.problems=problems;
        this.Teacher=Teacher;
        this.students=students;
    }
}

class Problems{
    constructor(problem_type,problem_question,problem_answer){
        this.problem_answer=problem_answer;
        this.problem_type=problem_type;
        this.problem_question=problem_question;
    }
}

class Students{
    constructor(fisrt_name , last_name,mother_name,father_name,schoolida_email,classes){
        this.first_name=fisrt_name;
        this.father_name=father_name;
        this.mother_name=mother_name;
        this.last_name=last_name;
        this.schoolida_email=schoolida_email;
        this.classes=classes;
    }
}