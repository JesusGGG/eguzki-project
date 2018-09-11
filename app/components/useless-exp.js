import Component from '@ember/component';

export default Component.extend({
	number: null,
	actions:{
		calculateExp(){
			let number = this.get('number');
			var rootResult = Math.pow(number,2);
			this.set('number', rootResult)
		}
	}
});
