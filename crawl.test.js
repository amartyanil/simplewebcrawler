const {test, expect} = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

test
(
    'The normalized version of GOOGLE.com is google.com',() =>
    {
        expect(normalizeURL('GOOGLE.com')).toBe('google.com');
    }
);