/**
 * Created by Андрей on 22.09.2015.
 */
module.exports = {
  'test1': function(req, res){
    res.json('testAngular');
  },
  'test2': function(req, res){
    res.json(this);
  }
}
