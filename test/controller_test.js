import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { get_median_primes, get_all_primes, get_median } from '../controllers/indexController';
let should = chai.should();

chai.use(chaiHttp);

describe('Test Index Controller', () => {
    describe('get_median_primes with standard large input: 10000', () => {
        it('it should return 4523', (done) => {
            var result_list = get_median_primes(10000);
            result_list.should.eql([4523]);
            done();
        });
    });

    describe('get_median_primes with large input and 2 median values: 72', () => {
        it('it should return [29, 31]', (done) => {
            var result_list = get_median_primes(72);
            result_list.should.eql([29, 31]);
            done();
        });
    });

    describe('get_median_primes with no primes less than value', () => {
        it('it should return an empty list', (done) => {
            var result_list = get_median_primes(1);
            result_list.should.be.empty;
            done();
        });
    });

    describe('get_all_primes with base case input: 3', () => {
        it('it should return only 2', (done) => {
            var result_list = get_all_primes(3);
            result_list.should.eql([2]);
            done();
        });
    });

    describe('get_all_primes when input is <= 2', () => {
        it('it should return an empty list', (done) => {
            var result_list = get_all_primes(2);
            result_list.should.be.empty;
            done();
        });
    });

    describe('get_all_primes for standard integer case: 59', () => {
        it('it should return all the primes up to 59', (done) => {
            var result_list = get_all_primes(59);
            result_list.should.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53]);
            done();
        });
    });

    describe('get_all_primes for standard float case: 59.48735', () => {
        it('it should return all the primes up to 59.48735', (done) => {
            var result_list = get_all_primes(59.48735);
            result_list.should.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]);
            done();
        });
    });

    describe('get_median for a single valued list (base case)', () => {
        it('it should return the value in a list', (done) => {
            var result_list = get_median([1]);
            result_list.should.eql([1]);
            done();
        });
    });

    describe('get_median for an even length list', () => {
        it('it should return 2 values as median', (done) => {
            var result_list = get_median([1, 2, 3, 4, 5, 6]);
            result_list.should.eql([3, 4]);
            done();
        });
    });

    describe('get_median for an odd length list', () => {
        it('it should return 1 value as median', (done) => {
            var result_list = get_median([1, 2, 3, 4, 5]);
            result_list.should.eql([3]);
            done();
        });
    });

    describe('get_median for an empty list', () => {
        it('it should return an empty list', (done) => {
            var result_list = get_median([]);
            result_list.should.be.empty;
            done();
        });
    });

});