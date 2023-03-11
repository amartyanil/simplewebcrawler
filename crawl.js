function normalizeURL(urlToBeNormalized)
{
    urlToBeNormalized.hostname = urlToBeNormalized.hostname.toLower()
    return urlToBeNormalized
}

module.exports = 
{
    normalizeURL
}