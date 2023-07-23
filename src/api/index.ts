import { ApolloClient, gql , InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
cache: new InMemoryCache() });



const fetchStats = async () => {
    
  const { data }  = await client.query({ query: gql`
    {
        salesquery {
        _id
        productID {
          category
          name
          _id
          price
        }
        customerIDs{
          country
          age
          name
          gender
        }
        dailyData {
        date
        saleStats {
            totalSales
            totalUnits
        }
        }
        monthlyData {
        month
        saleStats {
            totalSales
            totalUnits
        }
        }
        
        year
        yearlySalesTotal
        targetSales
        yearlyTotalSoldUnits
      }
    }
`
});
    return data;
};

const fetchVisitors = async () => {
    
  const { data }  = await client.query({ query: gql`
    {
      visitorquery {
                totalLeadsGenerated
                totalVisitors
                year
            }
    }
`
});
    return data;
};


export { fetchStats, fetchVisitors };
