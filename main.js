import url from 'node:url';

function normalizeURL(urlToBeNormalized)
{
    urlToBeNormalized.hostname = urlToBeNormalized.hostname.toLower()
    return urlToBeNormalized
}