describe('GraphQL API Test', () => {
  it('Gets visitors data with a GraphQL query', () => {
    const query = `
      query {
        visitorquery {
          totalLeadsGenerated
          totalVisitors
          year
        }
      }
    `;

    cy.request({
      method: 'POST',
      url: 'localhost:4000/graphql',
      body: {
        query: query,
      },
    }).then((response) => {
      expect(response.status).to.equal(200); // Assuming 200 is the success status code
      cy.log('RESPONSE', JSON.stringify(response));
      expect(response.body.data).to.have.property('visitorquery');
      expect(response.body.data).to.have.property('visitorquery');
      expect(response.body.data.visitorquery[0]).to.have.property('totalLeadsGenerated');
      expect(response.body.data.visitorquery[0]).to.have.property('totalVisitors');
      expect(response.body.data.visitorquery[0]).to.have.property('year');

     
    });
  });

  it('Gets Sales data with a GraphQL query', () => {
    const query = `
      query {
        salesquery {
          _id
          yearlySalesTotal
          yearlyTotalSoldUnits
          year
          targetSales
        }
      }
    `;

    cy.request({
      method: 'POST',
      url: 'localhost:4000/graphql',
      body: {
        query: query,
      },
    }).then((response) => {
      expect(response.status).to.equal(200); // Assuming 200 is the success status code
      cy.log('RESPONSE', JSON.stringify(response));
      expect(response.body.data).to.have.property('salesquery');
      expect(response.body.data.salesquery[0]).to.have.property('yearlySalesTotal');
      expect(response.body.data.salesquery[0]).to.have.property('yearlyTotalSoldUnits');
      expect(response.body.data.salesquery[0]).to.have.property('year');
      expect(response.body.data.salesquery[0]).to.have.property('targetSales');

     
    });
  });
})

describe('template spec', () => {
  beforeEach(()=>{
    cy.visit("localhost:3000")
  })

  it('should render a button with text "Toggle Mode"', () => {
    cy.contains('Toggle Mode').should('exist');
  });

  it('should render Monthly Sales', () => {
    cy.contains('Monthly Sales').should('exist');
  });

  it('should render Sales by Category', () => {
    cy.contains('Sales by Category').should('exist');
  });

  it('should render Top 3 Selling products', () => {
    cy.contains('Top 3 Selling products').should('exist');
  });

  it('should render Ages Data', () => {
    cy.contains('<18').should('exist');
    cy.contains('<45').should('exist');
    cy.contains('<75').should('exist');

  });

  


})

describe('GraphQL API Test', () => {
  it('Gets visitors data with a GraphQL query', () => {
    const query = `
      query {
        visitorquery {
          totalLeadsGenerated
          totalVisitors
          year
        }
      }
    `;

    cy.request({
      method: 'POST',
      url: 'localhost:4000/graphql',
      body: {
        query: query,
      },
    }).then((response) => {
      expect(response.status).to.equal(200); // Assuming 200 is the success status code
      cy.log('RESPONSE', JSON.stringify(response));
      expect(response.body.data).to.have.property('visitorquery');
      expect(response.body.data).to.have.property('visitorquery');
      expect(response.body.data.visitorquery[0]).to.have.property('totalLeadsGenerated');
      expect(response.body.data.visitorquery[0]).to.have.property('totalVisitors');
      expect(response.body.data.visitorquery[0]).to.have.property('year');

     
    });
  });

  it('Gets Sales data with a GraphQL query', () => {
    const query = `
      query {
        salesquery {
          _id
          yearlySalesTotal
          yearlyTotalSoldUnits
          year
          targetSales
        }
      }
    `;

    cy.request({
      method: 'POST',
      url: 'localhost:4000/graphql',
      body: {
        query: query,
      },
    }).then((response) => {
      expect(response.status).to.equal(200); // Assuming 200 is the success status code
      cy.log('RESPONSE', JSON.stringify(response));
      expect(response.body.data).to.have.property('salesquery');
      expect(response.body.data.salesquery[0]).to.have.property('yearlySalesTotal');
      expect(response.body.data.salesquery[0]).to.have.property('yearlyTotalSoldUnits');
      expect(response.body.data.salesquery[0]).to.have.property('year');
      expect(response.body.data.salesquery[0]).to.have.property('targetSales');

     
    });
  });
})