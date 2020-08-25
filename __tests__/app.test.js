const app = require('../app');
const request = require('supertest');
const connection = require('../db/connection');
describe('/api', () => {
  afterAll(() => {
    return connection.destroy();
  });
  beforeEach(() => {
    return connection.seed.run();
  });
  describe('topics', () => {
    describe('GET', () => {
      test('GET 200: responds with an array of topics objects', () => {
        return request(app)
          .get('/api/topics')
          .expect(200)
          .then(({ body }) => {
            body.topics.forEach((topic) => {
              expect(topic).toHaveProperty('slug');
            });
          });
      });
      test('GET 404: invalid path', () => {
        return request(app)
          .get('/api/toper')
          .expect(404)
          .then(({ body }) => {
            console.log(body);
            expect(body.msg).toBe('Path not found, try again.');
          });
      });
    });
  });
  describe('users', () => {
    describe('GET', () => {
      test('GET 200: responds with an array with the object containing the username', () => {
        return request(app)
          .get('/api/users/butter_bridge')
          .expect(200)
          .then(({ body }) => {
            console.log(body);
            expect(body.user.username).toBe('butter_bridge');
          });
      });
      test('GET 404: invalid username query', () => {
        return request(app)
          .get('/api/users/butterAndJamme')
          .expect(404)
          .then(({ body }) => {
            console.log(body);
            expect(body.msg).toBe('query does not exist');
          });
      });
    });
  });
  describe('articles', () => {
    describe('GET', () => {
      test('GET 200: responds with an array with the object containing the article_id', () => {
        return request(app)
          .get('/api/articles/1')
          .expect(200)
          .then(({ body }) => {
            console.log(body);
            expect(body.article.article_id).toBe(1);
          });
      });

      test('GET 404: invalid article_id query', () => {
        return request(app)
          .get('/api/articles/1000000')
          .expect(404)
          .then(({ body }) => {
            console.log(body);
            expect(body.msg).toBe('query does not exist');
          });
      });
      test('GET 400: invalid written article_id query', () => {
        return request(app)
          .get('/api/articles/abc')
          .expect(400)
          .then(({ body }) => {
            expect(body.msg).toBe('Bad request!');
          });
      });
    });
    describe('POST', () => {
      test('post 201:can add a comment to the ', () => {
        return request(app)
          .post('/api/articles/8')
          .send({
            body: 'hello has anyone got a rope and a chear ?',
            username: 'butter_bridge',
          })
          .expect(201)
          .then(({ body }) => {
            console.log(body.article.body);
            expect(body.article.body).toBe(
              'hello has anyone got a rope and a chear ?'
            );
            expect(body.article.author).toBe('butter_bridge');
          });
      });
    });

    describe('patch', () => {
      test('patch 200:update votes', () => {
        return request(app)
          .patch('/api/articles/1')
          .send({ inc_votes: 100 })
          .expect(200)
          .then(({ body }) => {
            console.log(body);
            expect(body.article[0].votes).toBe(200);
          });
      });
      test('patch 400: invalid written article_id query', () => {
        return request(app)
          .patch('/api/articles/abc')
          .send({ inc_votes: 100 })
          .expect(400)
          .then(({ body }) => {
            expect(body.msg).toBe('Bad request!');
          });
      });
      test('patch 404: invalid article_id query', () => {
        return request(app)
          .patch('/api/articles/1000000')
          .send({ inc_votes: 100 })
          .expect(404)
          .then(({ body }) => {
            console.log(body);
            expect(body.msg).toBe('query does not exist');
          });
      });
    });
    describe('get', () => {
      // test('GET 200: responds with an array with the object containing the article_id', () => {
      //   return request(app)
      //     .get('/api/articles/1/comments')
      //     .expect(200)
      //     .then(({ body }) => {
      //       console.log(body)
      //       expect(body.article.article_id).toBe(1);
      //     });
      // });
      test('GET 200: responds with an array with the object containing the article_id', () => {

        return request(app)
          .get('/api/articles?sort_by=article_id')
          .expect(200)
          .then(({ body }) => {
            console.log(body);
            let idCount = 0;
            body.articles.forEach((oneBody) => {
              idCount++;
              expect(oneBody.article_id).toBe(idCount);
            });
            // expect(body.article).toBe(1);
          });
      });
      //   test.only('GET 200: responds with an array with the object containing the article_id', () => {
      //     return request(app)
      //       .get('/api/articles?sort_by=article_id ?order=dec')
      //       .expect(200)
      //       .then(({ body }) => {
      //         let idCount = body.articles.length()
      //         console.log(idCount)
      //         body.articles.forEach(oneBody => {
      //           idCount--
      //           expect(oneBody.article_id).toBe(idCount)
      //       });
      //   });
      // });#
      test('GET 200: responds with an array with the object containing the author', () => {
        return request(app)
          .get('/api/articles?author=rogersop')
          .expect(200)
          .then(({ body }) => {
            console.log(body);

            body.articles.forEach((oneBody) => {
              expect(oneBody.author).toBe('rogersop');
            });
          });
      });
      test('GET 200: responds with an array with the object containing the topic ', () => {
        return request(app)
          .get('/api/articles?topic=cats')
          .expect(200)
          .then(({ body }) => {
            console.log(body);

            body.articles.forEach((oneBody) => {
              expect(oneBody.topic).toBe('cats');
            });
          });
      });
    });
  });
  describe("comments",()=>{
    describe.only("patch",()=>{
      test("patch:201 ",()=>{
          return request(app)
          .patch('/api/comments/1')
          .send({ inc_votes: 100 })
          .expect(201)
          .then(({ body }) => {
            console.log(body);

            body.articles.forEach((oneBody) => {
              expect(oneBody.topic).toBe('cats');
            });
          });
      })
    })
  })
});
