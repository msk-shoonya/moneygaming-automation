import BasePage from './base';

class RegistrationPage extends BasePage {
  get signUpForm() {
    return cy.get('#signupForm');
  }

  get titleDropdown() {
    return this.signUpForm.find('#title');
  }

  get firstNameInput() {
    return this.signUpForm.find('#forename');
  }

  get surnameInput() {
    return this.signUpForm.find('[name="map(lastName)"]');
  }

  get dobErrorMessage() {
    return this.signUpForm.find('label[for="dob"].error')
  }

  get termsAndConditionsCheckbox() {
    return this.signUpForm.find('[name="map(terms)"]');
  }

  get joinNowButton() {
    return this.signUpForm.find('#form.promoReg');
  }
}

export default new RegistrationPage();
