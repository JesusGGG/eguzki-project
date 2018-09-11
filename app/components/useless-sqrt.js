import Component from '@ember/component';

export default Component.extend({
	number: null,
	actions:{
		calculateSqrt(){
			var number = this.get('number');
			var sqrtResult = Math.sqrt(number);
			this.set('number', sqrtResult)
		}
	}
});
