describe('main suite', ()=>{
    it('check title', ()=>{
        cy.title() .then((title)=>{
            cy.log(title)
        })       
    })
});