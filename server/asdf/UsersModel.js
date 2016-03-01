var mongoose  = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  user: {
    email: String,
    password: String
  }
});

userSchema.methods.generateHash = function(pw) {
  return bcrypt.hashSync(pw, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(pw) {
  return bcrypt.compareSync(pw, this.local.password);
};

module.exports = mongoose.model('User', userSchema);