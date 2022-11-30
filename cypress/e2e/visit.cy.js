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
        
})
})