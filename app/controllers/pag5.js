import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addStudent(){
			let name = this.get('name');
			let lastName = this.get('lastName');
			let curp = this.get('curp');

			this.store.createRecord('student', {name,lastName,curp}).save();
			
			this.set('name','');
			this.set('lastName','');
			this.set('curp','');
		},

		deleteStudent(student){
			student.destroyRecord();
		}, 

		modifyStudent(student){
			student.save();
		}
	}
});
