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
		doSomething () {
			var nameuser = this.get("nameuser");
			var passworduser = this.get("passworduser");

			if (nameuser === 'jesus' && passworduser ==='istherock') {
				alert('Yeah! you are the rock ' + nameuser);
				this.transitionToRoute('pag2');
			} else {
				alert('No estas registrado');
			}
		},

		neddDo(newtask){
			var tasks = this.get('tasks');
			tasks.pushObject({
				task: newtask
			})
			this.set('newtask','')
		}
	}

});
