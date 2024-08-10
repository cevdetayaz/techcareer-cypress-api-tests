import Store from "../data/store"
import Params from "../data/params"


describe('User Tests', () => {

  const store = new Store;
  const params = new Params;
  const url = params.url();
  const urlPath = store.urlStoreFix();

  it('Create Pet', () => {
    cy.request({
      method: 'POST',
      url: url + urlPath,
      body: store.orderPetBody(),
      headers: params.headerPayload()
    })
      .then((response) => {
        console.log(response)
        expect(response.status).to.eq(200)
      })
  })

  it('Find Order By ID', () => {
    cy.request('GET', url + urlPath + store.orderPetBody().id.toString())
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id', store.orderPetBody().id)
      })
  })

  it('Delete Order By ID', () => {
    cy.request('DELETE', url + urlPath + store.orderPetBody().id.toString())
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('message', store.orderPetBody().id.toString())
      })
  })

  it('Be Sure Order Deleted ', () => {
    cy.request({
      method: 'DELETE',
      url: url + urlPath + store.orderPetBody().id.toString(),
      failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404)
        expect(response.body).to.have.property('message', 'Order Not Found')
      })
  })

  
})

