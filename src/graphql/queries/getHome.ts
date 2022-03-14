const GET_HOME = /* GraphQL */ `
  query GET_HOME {
    home {
      id
      title
      city
      link
      active
      image {
        url
      }
    }
  }
`
export default GET_HOME
