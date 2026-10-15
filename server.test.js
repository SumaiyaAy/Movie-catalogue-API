'use strict';

const request = require('supertest');
const app = require('./server');
app.TESTING = true;

describe('Test the movie service', () => {
    test('GET /movies succeeds', () => {
        return request(app)
            .get('/movies')
            .expect(200);
    });

    test('GET /movies returns JSON', () => {
        return request(app)
            .get('/movies')
            .expect('Content-type', /json/);
    });

    test('GET /movies/search handles missing parameter', () => {
        return request(app)
            .get('/movies/search')
            .expect(400);
    });

    test('POST /movies/new succeeds', () => {
        const params = {
            title: 'Test Movie',
            genre: 'Drama',
            releaseYear: 2025,
            imageURL: '/images/test.png',
            actorIds: [1]
        };

        return request(app)
            .post('/movies/new')
            .send(params)
            .expect(200);
    });

    test('GET /movies includes a known movie', () => {
        return request(app)
            .get('/movies')
            .expect(/Inception/); // change if needed
    });

});