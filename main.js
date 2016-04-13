var prompt = require('prompt');
var Student = require('./student.js');
var Bus = require('./bus.js');
var studentArray = [];



var albert = new Student('Albert', 'male', 1, 3.0, 1, 1, 'Yo Yo Ma!');
var barbara = new Student('Barbara', 'female', 2, 3.0, 0, 1, "I'm barb wire!");
var carl = new Student('Carl', 'male', 3, 2.0, 1, 1, "Smokin!");
var derek = new Student('Derek', 'male', 4, 1.0, 4, 6, "How you doin?");
var erica = new Student('Erica', 'female', 5, 4.0, 7, 1, "Uuuuhhhhh...");

var fran = new Student('Fran', 'female', 6, 2.0, 4, 6, "How you doin?");
var gary = new Student('Gary', 'male', 7, 4.0, 1, 4, "How you doin?");
var hillary = new Student('Hillary', 'female', 8, 3.0, 2, 10, "How you doin?");
var ian = new Student('Ian', 'male', 9, 1.0, 2, 6, "How you doin?");
var jane = new Student('Jane', 'female', 10, 1.0, 1, 8, "How you doin?");

var kyle = new Student('Kyle', 'male', 11, 2.0, 5, 1, "How you doin?");
var laura = new Student('Laura', 'female', 12, 1.0, 7, 0, "How you doin?");
var moe = new Student('Moe', 'male', 1, 4.0, 10, 5, "How you doin?");
var neil = new Student('Neil', 'male', 2, 3.0, 5, 3, "How you doin?");
var oprah = new Student('Oprah', 'female', 3, 4.0, 12, 7, "How you doin?");

var parker = new Student('Parker', 'male', 4, 2.0, 3, 3, "How you doin?");
var qing = new Student('Qing', 'female', 5, 2.0, 4, 12, "How you doin?");
var rhonda = new Student('Rhonda', 'female', 6, 3.0, 7, 15, "How you doin?");
var steve = new Student('Steve', 'male', 7, 4.0, 2, 5, "How you doin?");
var tom = new Student('Tom', 'male', 8, 2.0, 1, 6, "How you doin?");

studentArray = [albert, barbara, carl, derek, erica, fran, gary, hillary, ian, jane, kyle, laura, moe, neil, oprah,
				parker, qing, rhonda, steve, tom];

console.log(studentArray);



var bus = new Bus(studentArray, 'Otto', 'yellow', 1);

bus.busChatter();

prompt.start();

prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
  var student = new Student(result.name, result.gender, result.grade, 
  					result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase)

  student.canStudentHaveFun();
  bus.studentEntersBus(student);
});

