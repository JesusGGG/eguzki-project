import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		return this.store.findRecord('student',params.id);
	},
	
	actions:{
		modifyStudent(){
			student.destroyRecord();
		}
	}
});
