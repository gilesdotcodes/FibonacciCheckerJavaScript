describe ('Fibonacci Checker', function() {

	beforeEach(function(){
		checker = new FibCheck
	});

	it('should know that the first Fibonacci number is 0', function() {
		expect(checker.fibNum(1)).toEqual(0);
	});

	it('should know that the second Fibonacci number is 1', function() {
		expect(checker.fibNum(2)).toEqual(1);
	});

	it('should know that the third Fibonacci number is 1', function() {
		expect(checker.fibNum(3)).toEqual(1);
	});

	it('should know that the tenth Fibonacci number is 34', function() {
		expect(checker.fibNum(10)).toEqual(34);
	});

	it('should know that 10 is not a Fibonacci number', function() {
		expect(checker.fibChecker(10)).toBe(false);
	});

	it('should know that 4181 is a Fibonacci number', function() {
		expect(checker.fibChecker(4181)).toBe(true);
	});

});