import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		fizzguzz () {			
			var i = 1;
			for (i; i <= 100; i++) {
				if (i % 3 === 0 && i % 5===0){
					document.write(i+'=fizzguzz!, ');
				} 
				else if (i % 5 === 0){
					document.write(i+'=guzz!, ');
				} 
				else if (i % 3 === 0){
					document.write(i+'=fizz!, ');
				} 
				else {
					document.write(i+', ');
				}
			}
		},

		findPrime(){
			var number = this.get("number");
			var a = 0;
			var j = 2;
			
			if (number){
				for (j; j <= number/2; j++) {
					if (number%j===0) {
						a++;
					}
				}
				
				if(a != 0){
					this.set('isPrime', false);
				} 
				else {
					this.set('isPrime', true);
				}
			}
		}
	}
});
