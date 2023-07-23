import { ApolloClient, gql , InMemoryCache} from "@apollo/client";

const KEY =
    '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URI = `https://api.unsplash.com/photos/`;

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
cache: new InMemoryCache() });

 const MY_QUERY = gql`
   query OUR_QUERY {
    salesquery {
    product
    region
    salesRevenue
  }
   }
`



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
