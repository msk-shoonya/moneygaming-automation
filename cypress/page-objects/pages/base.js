import Header from '../sections/header';

export default class BasePage {
  get header() {
    return new Header();
  }

  open() {
    cy.visit(this.route);
  }
}
