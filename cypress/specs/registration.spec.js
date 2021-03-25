import HomePage from '../page-objects/pages/home';
import RegistrationPage from '../page-objects/pages/registration';

describe('User Registration', () => {
  before(() => {
    HomePage.open();
  });

  it('should display validation message when Date of Birth field is not entered', () => {
    HomePage.header.joinNowButton.click();
    cy.fixture('resources/user').then(userDetails => {
      const { title, firstName, lastName } = userDetails.user1;

      RegistrationPage.titleDropdown.select(title);
      RegistrationPage.firstNameInput.type(firstName);
      RegistrationPage.surnameInput.type(lastName);
    });
    RegistrationPage.termsAndConditionsCheckbox.check();
    RegistrationPage.joinNowButton.click();
    RegistrationPage.dobErrorMessage.should('be.visible').and('have.text', 'This field is required');
  });
});
