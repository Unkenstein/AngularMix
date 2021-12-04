const { default: ow } = require('ow');
const HttpClient = require('./http_client');
const ScrapingClient = require('./scraping_client');

/**
 * ScrapingAntClient is the official library to access ScrapingAnt API from your
 * JavaScript applications. It runs both in Node.js and browser
 *
 * @param {object} options
 * @param {number} [options.maxRetries=8]
 * @param {number} [options.minDelayBetweenRetriesMillis=500]
 * @param {number} [options.timeoutSecs]
 * @param {string} options.apiKey
 */

class ScrapingAntClient {
    constructor(options) {
        ow(options, ow.object.exactShape({
            maxRetries: ow.optional.number,
            minDelayBetweenRetriesMillis: ow.optional.number,
            timeoutSecs: ow.optional.number,
            apiKey: ow.string,
        }));

        const {
            maxRetries = 8,
            minDelayBetweenRetriesMillis = 500,
            timeoutSecs = 60,
            apiKey,
        } = options;

        const httpClient = new HttpClient({
            maxRetries,
            minDelayBetweenRetriesMillis,
            timeoutSecs,
        });

        this.scrapingClient = new ScrapingClient({
            httpClient,
            apiKey,
        });
    }

    /**
     * General Web Scraping method. Requires URL and allows to pass optional parameters
     */
    scrape(url, parameters) {
        ow(url, ow.string);
        return this.scrapingClient.call(url, parameters);
    }
}
