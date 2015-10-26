/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'hello': function(req, res){
    User.find(function(err, result){
      console.log(result.length);
      res.view('User', { User:result });
    });

  }
};

