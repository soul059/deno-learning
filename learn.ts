//tuples
let person: [string,number,boolean] = ['John', 25, true];

// function
function calculateTextLength(text: string ): number { // : number is the return type
    return text.length;
}

function say(text = "hello"): void {
    console.log(text);
}


//object

let person1 :{
    name: string,
    age: number,
    isStudent: boolean,
    getcurrentYear: () => number
} = {
    name: 'John',
    age: 25,
    isStudent: true,
    getcurrentYear: function(){
        return new Date().getFullYear();
    }
}


// Type alias

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    getcurrentYear: () => number
}

let person2: Person = {
    name: 'John',
    age: 25,
    isStudent: true,
    getcurrentYear: function(){
        return new Date().getFullYear();
    }
}
// union and intersection types

type PersonType = {
    name: string,
    age: number
}

type StudentType = {
    isStudent: boolean,
    school: string
}

// Intersection type: combines properties from both PersonType and StudentType
type PersonStudentType = PersonType & StudentType;

let personStudent: PersonStudentType = {
    name: 'John',
    age: 25,
    isStudent: true,
    school: 'XYZ University'
}

// Union type: can be either PersonType or StudentType
type PersonOrStudentType = PersonType | StudentType;

let personOrStudent1: PersonOrStudentType = {
    name: 'John',
    age: 25
}

let personOrStudent2: PersonOrStudentType = {
    isStudent: true,
    school: 'XYZ University'
}

//literal types
let question: 'color' | 'size' = 'color';
type Answer = 'yes' | 'no';

let answer: Answer = 'yes';


// Enum

enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Green;

// optional chaining
let person5 = {
    name: 'John',
    age: 25,
    isStudent: true,
    school: {
        name: 'XYZ University'
    }
}

let schoolName = person5.school?.name;

// Nullish coalescing
let schoolName1 = person5.school?.name ?? 'No school';

// Type assertion
let text = 'Hello';
let textLength = (text as string).length;

// Type guard
function isPerson(obj: any): obj is Person {
    return obj.name !== undefined;
}

if(isPerson(person5)){
    console.log(person5.name);
}

// Type guard using typeof

function isNumber(value: any): value is number {
    return typeof value === 'number';
}


// Interface

interface PersonInterface {
    name: string,
    age: number,
    isStudent: boolean,
    getcurrentYear: () => number
}

let person3: PersonInterface = {
    name: 'John',
    age: 25,
    isStudent: true,
    getcurrentYear: function(){
        return new Date().getFullYear();
    }
}

// Class

class PersonClass {
    name: string;
    age: number;
    isStudent: boolean;
    constructor(name: string, age: number, isStudent: boolean){
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    getcurrentYear(){
        return new Date().getFullYear();
    }
}

let person4 = new PersonClass('John', 25, true);
// diffrence in class and interface is that class can have constructor and interface can't have constructor