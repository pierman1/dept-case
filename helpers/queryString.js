export const createQueryStringFromObject = (queryObject) => {
  let queryString = ''

  if (!queryObject) {
    return queryString
  }

  Object.keys(queryObject).map((key) => {
    if (!queryString) {
      queryString = `?${getKeyValueString(key, queryObject[key])}`
      return
    }

    queryString = `${queryString}&${getKeyValueString(key, queryObject[key])}`
  })

  return queryString
}

const getKeyValueString = (key, value) => {
  return value ? `${key}=${value}` : `${key}`
}
