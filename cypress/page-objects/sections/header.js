export default class Header {
  get element() {
    return cy.get('.header');
  }

  get joinNowButton() {
    return this.element.find('.newUser');
  }
}
