/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");
  });
  it("查找账号输入框", () => {
    cy.get("#email1").type("hello dog").should("have.value", "hello cat");
  });
});
