var express = require('express');
var router = express.Router();

router.use(
  function(req,res,next){
      console.log('Middleware kutsuttiin');
      next();
  }
);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//Tulostaa "Hello" ja etunimen
router.get('/1/:firstName',
function(request, response){
  response.send('Hello '+request.params.firstName);
}
);

//Tulostaa "Hello" ja etu- ja sukunimen
router.get('/2/:firstName/:lastName',
function(request, response){
  response.send('Hello '+request.params.firstName+" "+request.params.lastName);
}
);

//Tulostaa bodyyn annetun datan
router.post('/',
    function(request,response){
        response.send(request.body);
    }
);

module.exports = router;
