function FibCheck() {
	this.sequence = [0,1];
};

FibCheck.prototype.fibNum = function(number) {
	if(number===1 || number===2) {
		return this.sequence[number - 1];
	}
	if (number > 2) {
		for(var i=0; i<number-2; i++) {
			this.sequence.push(this.sequence[i]+this.sequence[i+1]);
		}
		var answer = this.sequence[number-1];
		this.sequence = [0,1];
		return answer;
	}
};

FibCheck.prototype.fibChecker = function(number) {
	for(var i=1; i < number; i++) {
		if(this.fibNum(i) === number) return true;
		if(this.fibNum(i) > number) return false;
	}	 
};

// var check = new FibCheck();
// console.log(check.fibNum(30));
// console.log(check.fibNum(10));
// console.log(check.fibNum(20));
// console.log(check.fibNum(10));
// console.log(check.sequence);