import Prismic from '@prismicio/client';

export function getPrismicClient() {
  const prismic = Prismic.client(
    process.env.PRISMIC_ENDPOINT,
    {
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    }
  )

  return prismic
}

// const Prismic = require('@prismicio/client');


// const apiEndpoint = process.env.PRISMIC_ENDPOINT
// const acessToken = process.env.PRISMIC_ACCESS_TOKEN
// export const Client = Prismic.client(
//   apiEndpoint,
//   { 
//     req: req,  
//     acessToken
//   }
// )