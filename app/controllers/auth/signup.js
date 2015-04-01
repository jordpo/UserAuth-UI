import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:oauth2-password-grant',

  actions: {
    save() {
      const password = this.get('model.password');
      const email = this.get('model.email');

      this.get('model').save().then(() => {
        this.setProperties({
          identification: email,
          password: password
        });
        this.send('authenticate');
      });
    }
  }
});
