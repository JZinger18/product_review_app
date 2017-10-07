var YouTube = require('youtube-node');

module.exports = (value)=>{

var youTube = new YouTube();

youTube.setKey('AIzaSyAwef6wBJ9KUllwk0ab6ynzOKzrYutkaoM');

  var wholeObject;

 youTube.search(value, 10,{type:'channel'}, function(error, result) {
  if (error) {
    console.log(error);
  }
  else {

  wholeObject = result;

  }

});

return wholeObject

}