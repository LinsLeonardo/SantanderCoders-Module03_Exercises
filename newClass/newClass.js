class Person {
  constructor (firstName, lastName, age, gender, interests){
      this.name = `${firstName} ${lastName}`;
      this.age = age;
      this.gender = gender;
      this.interests = interests;
  }

  bio(){
      return (`${this.name} is ${this.age} yers old. They like ${this.interests}`);
  }

  greeting(){
      return (`Hi! I'm ${this.name}`);
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, age, gender, interests, subject){
      super(firstName, lastName, age, gender, interests);
      this.subject = subject;
      this.lastName = lastName;
  }
  greeting(){
      return (`Hello. My name is ${this.lastName}, and I teach ${this.subject}`);
  }

}

class Student extends Person {
  constructor(firstName, lastName, age, gender, interests){
      super(firstName, lastName, age, gender, interests);
      this.firstName = firstName;
  }
  greeting(){
      return (`Yo! I'm ${this.firstName}`);
  }
}