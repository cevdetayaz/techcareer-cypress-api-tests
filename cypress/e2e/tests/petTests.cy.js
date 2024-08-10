import Pet from "../data/pet";
import Params from "../data/params";

describe("User Tests", () => {
  const pet = new Pet();
  const params = new Params();
  const url = params.url();
  const petName = pet.postBodyPayload().name;
  const updatedPetName = pet.updatePayload().name;

  it("Create Pet", () => {
    cy.request({
      method: "POST",
      url: url + "/v2/pet",
      body: pet.postBodyPayload(),
      headers: params.headerPayload(),
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', petName);
    });
  });

  it("Update Pet Info", () => {
    cy.request({
      method: "PUT",
      url: url + "/v2/pet",
      headers: params.headerPayload(),
      body: pet.updatePayload(),
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', updatedPetName);
    });
  });

  it("Find Pet By ID", () => {
    cy.request("GET", url + "/v2/pet/123456654321").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id", 123456654321);
      expect(response.body).to.have.property('name', updatedPetName);
    });
  });


  it("Update Pet Info By Form Data", () => {
    cy.request({
      method: "POST",
      url: url + "/v2/pet/123456654321",
      form: true, //'Content-Type': 'application/x-www-form-urlencoded'
      body: pet.formDataUpdate()      
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', '123456654321');
    });
  });

  it("Delete Pet By ID", () => {
    cy.request({
      method: "DELETE",
      url: url + "/v2/pet/123456654321",
      headers: params.headerPayload()          
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', '123456654321');
    });
  });

  it("Be Sure Pet Deleted", () => {
    cy.request({
      method: "DELETE",
      url: url + "/v2/pet/123456654321",
      headers: params.headerPayload(),
      failOnStatusCode: false     
    }).then((response) => {
      expect(response.status).to.eq(404);      
    });
  });

  
});
