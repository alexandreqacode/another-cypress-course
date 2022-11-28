describe('empty spec', () => {
  before(()=>{//execute algo antes de todos os testes
    cy.log('hello from the before hook')
  });
  after(()=>{//executa algo depois do último teste
    cy.log('hello from after all hook')
  });
  beforeEach(()=>{//executa algo antes de cada teste
    cy.log('hello from beforeEach hook')
  });
  afterEach(()=>{//executa algo depois de cada teste
    cy.log('hello from afterEach hook')
  })
  it('passes', () => {
    cy.log('hello world')
  });
  it('passes', () => {
    cy.log('hello world')
  });
  it.skip('passes', () => {
    cy.log('hello world')
  })
})