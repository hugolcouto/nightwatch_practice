module.exports = {
    '@tags': ['google'],
    'Google advanced search: Hello World'(browser) {
        const
            searchQuery = 'Hello World',
            page = browser.page.google()

        page
            .navigate()
            .setQuery(searchQuery)
            .selectFilter('#lr_button', 'ja')
            .executeSearch()
            .saveScreenshot('tests_output/google.png');

        // const
        //     searchQuery = 'Hello World',
        //     queryInput = '[name="as_q"]',
        //     languageSelector = '#lr_button',
        //     languageOption = '.goog-menuitem[value="lang_ja"]',
        //     submitButton = '.jfk-button[type="submit"]',
        //     resultsPageQuerySelector = `#searchform input[name="q"][value="${searchQuery}"]`;

        // browser
        //     .url('https://www.google.com/advanced_search')
        //     .setValue(queryInput, searchQuery)
        //     .click(languageSelector)
        //     .click(languageOption)
        //     .click(submitButton)
        //     .perform(() => { debugger; })
        //     .assert.urlContains('as_q=Hello+World', 'Query is Hello World')
        //     .assert.containsText('.wwUB2c[data-attrid="subtitle"]', 'ハロー・ワールド', 'The subtitle contains ハロー・ワールド text');

        // browser.assert.visible(resultsPageQuerySelector, 'Hello World text is set on the query input');

        // browser.saveScreenshot('tests_output/google.png');
    }
}