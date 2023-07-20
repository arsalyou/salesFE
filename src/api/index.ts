import { useApolloClient, gql } from "@apollo/client";
const KEY =
    '?client_id=5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
const URI = `https://api.unsplash.com/photos/`;

 const MY_QUERY = gql`
   query OUR_QUERY {
    salesquery {
    product
    region
    salesRevenue
  }
   }
`

async function  useFetchStats() {
    const apolloClient = await useApolloClient();
    console.log('calling')
    apolloClient.query({
        query: MY_QUERY,
        fetchPolicy: "cache-first"   // select appropriate fetchPolicy
     }).then((data) => {
        console.log('data', data)   //do whatever you like with the data
     }).catch((err) => {
        console.log(err)
     })
  
    // Use apolloClient and perform any other logic here
    // ...
  
  }
  

const fetchStats = async () => {
    
    const response = await fetch(`${URI}${KEY}&per_page=3&page=1`);
    
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};



export { fetchStats, useFetchStats };
