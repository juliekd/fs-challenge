import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app';
let should = chai.should();

chai.use(chaiHttp);

describe('Test Routes', () => {

    describe('GET invalid route', () => {
        it('it should return the appropriate error message and 404 status', (done) => {
            chai.request(server)
                .get('/tester')
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.message.should.eql("Not Found");
                    done();
                });
        });
    });

    describe('GET / and number', () => {
        it('it should return the median primes and 200 status', (done) => {
            chai.request(server)
                .get('/?num=80')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.list.should.eql([31, 37]);
                    done();
                });
        });
    });

    describe('GET / and number as float', () => {
        it('it should return the median primes and 200 status', (done) => {
            chai.request(server)
                .get('/?num=80.4739485')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.list.should.eql([31, 37]);
                    done();
                });
        });
    });



    describe('GET / and number with no primes', () => {
        it('it should return no median primes and 200 status', (done) => {
            chai.request(server)
                .get('/?num=1')
                .end((err, res) => {
                   res.should.have.status(200);
                   res.body.list.should.eql([]);
                   done();
              });
        });
    });

    describe('GET / and negative number', () => {
        it('it should return the correct error message', (done) => {
            chai.request(server)
                .get('/?num=-10')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.list.should.eql([]);
                    res.body.errors.should.include("Please provide a positive number");
                    done();
                });
        });
    });

    describe('GET / and invalid input', () => {
        it('it should return the correct error message', (done) => {
            chai.request(server)
                .get('/?num=testing')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.list.should.eql([]);
                    res.body.errors.should.include("Please provide a positive number");
                    done();
                });
        });
    });

    describe('GET / and undefined input', () => {
        it('it should return the correct error message', (done) => {
            chai.request(server)
                .get('/?num=')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.list.should.eql([]);
                    res.body.errors.should.include("Please provide a positive number");
                    done();
                });
        });
    });

    describe('GET / with no parameter', () => {
        it('it should return the correct error message', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.list.should.eql([]);
                    res.body.errors.should.include("Please provide a positive number");
                    done();
                });
        });
    });

});