import url from 'node:url';

function normalizeURL(inputtedURL)
{
    urlobj = new URL(inputtedURL);
    standardURL = `${urlobj.hostname}/${urlobj.pathname}`
    return standardURL
}

module.exports = 
{
    normalizeURL
}