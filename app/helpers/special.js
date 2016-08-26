import Ember from 'ember';

export function special(params/*, hash*/) {
  var responses = params[0];
  var length = responses.get('length');

  if(length === 0){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-exclamation-sign"></span>');
  }
}

export default Ember.Helper.helper(special);
