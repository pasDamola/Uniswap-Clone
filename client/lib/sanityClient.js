import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'rl28yksl',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skvcBw8ie8ds0yoo180UKHsd4138jjbyUGFoD50rqArVSDgR2q5UvqZOovkxHwnKAOr3fV5CBbTLAxoDF3yY2QqVPnkj6WK04ic91tF3pwk476pLcDqreNYkhFE71a1APZBTsriE5B00BQo9tdZIiLu0aakQuueYIOG0OuMZAtniJYHEI4KQ',
  useCdn: false,
})