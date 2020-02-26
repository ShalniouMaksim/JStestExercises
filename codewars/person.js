export class Person {
  static a = '111';

  static b = 1;

  constructor(first, last, age, gender) {
    this.name = {
      first,
      last,
    };
    this.age = age;
    this.gender = gender;
  }
}
export class TheSecondPerson extends Person {
  static c = '';
}
