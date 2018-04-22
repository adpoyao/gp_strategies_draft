// All Products
gql`query {
  allProducts {
    nodes {
      id
      modelName
      modelYear
      heroTitle
      heroBody
    }
  }
}`

//Search Product
gql`query {
  searchProducts (search: "Kona"){
    nodes {
      id
      modelName
      modelYear
    }
  }
}`