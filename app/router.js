import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});
Router.map(function(){
  this.route('pag2');
  this.route('pag3');
  this.route('pag4');
  this.route('pag5');
  this.route('useless-calculator');
  this.route('detail');
  this.route('musicBook',{path:'/'});
  this.route('album', { path: '/album/:id'});
});

export default Router;
