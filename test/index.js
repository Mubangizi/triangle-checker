const chai = require('chai'),
chaiHttp = require('chai-http'),
server = require('../server'),
should = chai.should();

chai.use(chaiHttp);

// Triangles
const equilateralTriangle = {"a":1, "b":1, "c":1},
isoscelesTriangle = {"a":1, "b":1.44, "c":1},
scaleneTriangle = {"a":4, "b":5, "c":6},
notATriangle = {"a":4, "b":20, "c":8},
notIntegers = {"a":"4", "b":"name", "c":6},
missingParams = {"a":4, "c":6};
 
describe('Init', function () {
  it('check app status', function (done) {
      chai.request(server).get('/').end((err, res) => {
          should.not.exist(err);
          res.should.have.status(200);
          done();
      })
  });
});

describe('Triangle', function () {

  it('Check the api request without params', function (done) {
    chai.request(server).post('/triangle').send({}).end((err, res) => {
      should.not.exist(err);
      res.should.have.status(401);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.should.have.property('message').eql('Mandatory params are missing! require a, b and c');
      done();
    })
  });

  it('Check the api request without integers', function (done) {
    chai.request(server).post('/triangle').send(notIntegers).end((err, res) => {
      should.not.exist(err);
      res.should.have.status(401);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.should.have.property('message').eql('Some Params are strings');
      done();
    })
  });

  it('Check the api request with missing params', function (done) {
    chai.request(server).post('/triangle').send(missingParams).end((err, res) => {
      should.not.exist(err);
      res.should.have.status(401);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.should.have.property('message').eql('Mandatory params are missing! require a, b and c');
      done();
    })
  });

  it('Check for not a triangle', function (done) {
    chai.request(server).post('/triangle').send(notATriangle).end((err, res) => {
      should.not.exist(err);
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.should.have.property('message').eql('Incorrect');
      done();
    })
  });

  it('Check for an equlateral triangle', function (done) {
    chai.request(server).post('/triangle').send(equilateralTriangle).end((err, res) => {
      should.not.exist(err);
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.should.have.property('message').eql('Equilateral');
      done();
    })
  });

  it('Check for an isosceles triangle', function (done) {
    chai.request(server).post('/triangle').send(isoscelesTriangle).end((err, res) => {
      should.not.exist(err);
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.should.have.property('message').eql('Isosceles');
      done();
    })
  });

  it('Check for a Scalene', function (done) {
    chai.request(server).post('/triangle').send(scaleneTriangle).end((err, res) => {
      should.not.exist(err);
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('message');
      res.body.should.have.property('message').eql('Scalene');
      done();
    })
  });




});
