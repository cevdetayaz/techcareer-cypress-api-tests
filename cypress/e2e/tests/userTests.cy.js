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
    cy.request({ //ilk işlemi ile silinme success ise 200 dönecektir.
      method: 'DELETE',
      url: urls + '/v2/user/ayhanayaz4',
      headers: params.headerPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('code', 200)
      })

    cy.request({
      method: 'DELETE', // ikinci silinme işlemi ile kullanıcının olmadığını doğrulayabiliriz. 404 döner.
      url: urls + '/v2/user/ayhanayaz4',
      headers: params.headerPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })

    cy.request({
      method: 'DELETE', //ilk işlemi ile silinme success ise 200 dönecektir.
      url: urls + '/v2/user/cevdetayaz',
      headers: params.headerPayload()
    })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('code', 200)
      })

    cy.request({
      method: 'DELETE', // ikinci silinme işlemi ile kullanıcının olmadığını doğrulayabiliriz. 404 döner.
      url: urls + '/v2/user/cevdetayaz',
      headers: params.headerPayload(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
      })
  })
})


