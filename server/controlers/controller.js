const keywordsDb = require('../schemas/keywords')
const articlesDb = require('../schemas/articles')

module.exports = {

    saveKeywords: async (req, res) => {
        const {words} = req.params

        let keywords = new keywordsDb
        keywords.keywords = words
        await keywords.save()

        res.send({error: false, message: 'Keyword saved'})
    },

    saveArticles: async (req, res) => {
        const {title, description, url, image, publishedAt} = req.body

        let articles = new articlesDb

        articles.title = title
        articles.description = description
        articles.url = url
        articles.image = image
        articles.publishedAt = publishedAt

        await articles.save()

        res.send({error: false, message: 'Article saved'})
    }
}