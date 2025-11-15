
describe('ReqRes API Tests', () => {

  it('GET - List users', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.length.above(0);
      });
  });
  it('POST - Create user (Unauthorized test)', () => {
  cy.request({
    method: 'POST',
    url: 'https://reqres.in/api/users',
    body: {
      name: 'John Doe',
      job: 'QA Engineer'
    },
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.eq(401);
    expect(response.body.error).to.eq('Missing API key');
  });
});


 
  it('PUT - Update user (Unauthorized test)', () => {
  cy.request({
    method: 'PUT',
    url: 'https://reqres.in/api/users/2',
    body: {
      name: 'John Updated',
      job: 'Senior QA'
    },
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.eq(401);
    expect(response.body.error).to.eq('Missing API key');
  });
});


  it('DELETE - Delete user (Unauthorized test)', () => {
  cy.request({
    method: 'DELETE',
    url: 'https://reqres.in/api/users/2',
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.eq(401);
    expect(response.body.error).to.eq('Missing API key');
  });
});

});
