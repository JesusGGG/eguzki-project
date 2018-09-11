import Controller from '@ember/controller';

export default Controller.extend({
	tasks: [{
		task: 'Tarea'
		},{
		task: 'Lavar trastes'
		},{
		task: 'Pasear al perro'
	}],
	
	actions: {
		neddDo(newtask){
			if(!newtask){
				alert('Missed data');
			}else{
			var tasks = this.get('tasks');
			tasks.pushObject({
				task: newtask
			})
			this.set('newtask','')
			}
		},

		deletetask(){
			alert('Error');
		}
	}
});
