module.exports = {
    '@tags': ['google'],
    // '@disabled': true,
    'Google advanced search: Hello World'(browser) {
        const
            searchQuery = 'Hello World',
            page = browser.page.google()

        page
            .navigate()
            .setQuery(searchQuery)
            .selectFilter('#lr_button', 'pt')
            .executeSearch()
            .assert.urlContains('as_q=Hello+World', 'Query is Hello World')
            .assert.containsText('.wwUB2c[data-attrid="subtitle"]', 'ハロー・ワールド', 'The subtitle contains ハロー・ワールド text')
            .saveScreenshot('tests_output/screenshots/google.png')
    }
}