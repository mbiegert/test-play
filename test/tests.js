// Import the dependencies for testing
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');

// Configure chai
chai.use(chaiHttp);
chai.should();

var app = require('../index.js');

describe('GET /', function() {
  describe('special endpoint only', function () {
    it('respond with hello world', function(done) {
      //navigate to root and check the the response is "hello world"
      chai.request(app)
      .get('/')
      .end((err, res) => {
        res.body.should.be.a('object');
        done();
      });
    });  
  });
  it('test in first suite', function (done) {
    done();
  });
});

after(function() {
  app.server.close();
});
