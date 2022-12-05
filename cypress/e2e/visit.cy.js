describe("basics", ()=>{
    beforeEach(()=>{

    });
    it('visit textinput page', ()=>{
        cy.visit('/textinput')
    });

    it('get url', ()=>{
        cy.url().then((url)=>{
            cy.log(`Printing url: ${url}`);
            expect(url).to.contains("test");
        });
});
    it('input chalenge', ()=>{
        cy.get('input#newButtonName').type('hello there');
        cy.get('button#updatingButton').click().should('have.text', 'hello there');
});
});