import User from "../data/user"
import Params from "../data/params"

describe('User Tests', () => {

  const user = new User;
  const params = new Params;
  const urls = params.url();

  it('Create User With List', () => {
    cy.request({
      method: 'POST',
      url: urls + '/v2/user/createWithList',
      body: user.listPostData(),
      headers: params.headerPayload()
    })
      .then((response) => {
        console.log(response)
        expect(response.status).to.eq(200)
      })
  })

  it('Get User Info', () => {
    cy.request({
      method: 'GET',
      url: urls + '/v2/user/cevdetayaz',
      headers: params.headerPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id', 98)
        expect(response.body).to.have.property('username', 'cevdetayaz')// true
      })
  })

  it('User Not Found', () => {
    cy.request({
      method: 'GET',
      url: urls + '/v2/user/deneme-user-test',
      headers: params.headerPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })
  })

  it('Update User Info', () => {
    cy.request({
      method: 'PUT',
      url: urls + '/v2/user/ayhanayaz',
      body: user.userPostData(),
      headers: params.headerPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('code', 200)
      })
  })

  it('Delete User', () => {
    cy.request({ //ilk silme işlemi ile success ise 200 dönecektir.
      method: 'DELETE',
      url: urls + '/v2/user/ayhanayaz4',
      headers: params.headerPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('code', 200)
      })

    cy.request({
      method: 'DELETE', // ikinci silnme işlemi ile kullanıcının olmadığını doğrulayabiliriz. 404 döner.
      url: urls + '/v2/user/ayhanayaz4',
      headers: params.headerPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })

    cy.request({
      method: 'DELETE', //ilk silme işlemi ile success ise 200 dönecektir.
      url: urls + '/v2/user/cevdetayaz',
      headers: params.headerPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('code', 200)
      })

    cy.request({
      method: 'DELETE', // ikinci silme işlemi ile kullanıcının olmadığını doğrulayabiliriz. 404 döner.
      url: urls + '/v2/user/cevdetayaz',
      headers: params.headerPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })
  })
})


