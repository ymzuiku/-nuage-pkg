/// <reference types="cypress" />

import { symbolName } from "typescript";

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://0.0.0.0:3000");
  });
  it("查找账号输入框", () => {
    cy.get("body").should("be.visible", true);
    cy.get("#root").should("contain.text", "hello vite");
  });
});
