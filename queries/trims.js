//Search Trims
gql`query {
  searchTrims (search: ""){
    nodes {
      id
      productId
      name
    }
  }
}`