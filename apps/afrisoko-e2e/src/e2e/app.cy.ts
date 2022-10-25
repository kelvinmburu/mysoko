import { getAddTodoButton, getTodos } from '../support/app.po';

describe('afrisoko', () => {
  beforeEach(() => cy.visit('/'));

  it('should display afrisoko', () => {
    getTodos().should((t) => expect(t.length).equal(2));
    getAddTodoButton().click();
    getTodos().should((t) => expect(t.length).equal(3));
  });
});
