var Bus = function(studentsOnTheBus, driverName, color, gas) {
	this.studentsOnTheBus = studentsOnTheBus;
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function(x) {
		this.studentsOnTheBus.push(x)
		
		for (var i = 0; i < this.studentsOnTheBus.length; i++) {
			console.log(this.studentsOnTheBus[i].name);
		}
	}
	this.busChatter = function() {
		for (var i = 0; i < studentsOnTheBus.length; i++) {
			if( studentsOnTheBus[i].canStudentHaveFun() ) {
				console.log(studentsOnTheBus[i].name + "'s catchphrase is " + studentsOnTheBus[i].catchPhrase);
			}
		}
	}
};

module.exports = Bus;