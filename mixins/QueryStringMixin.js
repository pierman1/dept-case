import { createQueryStringFromObject } from '@/helpers/querystring.js'

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
        this.$router.replace({ query })
      },
      getQueryStringFromUrl() {
        return this.createQueryStringFromObject(this.$route.query)
      },
      resetPageQueryString(key, value) {
        const query = Object.assign({}, this.$route.query)
        delete query.page
        this.$router.replace({ query })
      }
    }
  }
}
export default queryStringMixin()
