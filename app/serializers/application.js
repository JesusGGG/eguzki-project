import DS from 'ember-data';
import { underscore } from '@ember/string';

export default DS.RESTSerializer.extend({
	keyForAttribute(attr){
		return underscore(attr);
	}
});	