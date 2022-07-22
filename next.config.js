const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  images: {
    domains: ['personal-images-serve.s3.us-east-2.amazonaws.com']
  },
})
