import { createQueryStringFromObject } from '@/helpers/queryString.js'

const queryStringMixin = () => {
  return {
    methods: {
      createQueryStringFromObject,
      updateQueryString(key, value) {
        const query = Object.assign({}, this.$route.query)
        if (!value || !key) {
          delete query[key]
        } else {
          query[key] = value
        }
        this.$router.push({ query })
      },
      getQueryStringFromUrl() {
        return this.createQueryStringFromObject(this.$route.query)
      },
      resetPageQueryString(key, value) {
        const query = Object.assign({}, this.$route.query)
        delete query.page
        this.$router.push({ query })
      }
    }
  }
}
export default queryStringMixin()
