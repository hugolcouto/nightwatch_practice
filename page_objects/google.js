module.exports = {
    url: 'https://www.google.com/advanced_search',
    elements: {
        queryInput: '[name="as_q"]',
        submitButton: '.jfk-button[type="submit"]',
    },
    commands: [{
        setQuery(query) {
            const page = this;
            page.
                setValue(this.elements.queryInput, query)

            return this;
        },
        selectFilter(selector, value) {
            const page = this;
            page
                .click(selector)
                .click(`.goog-menuitem[value="lang_${value}"]`)

            return this;
        },
        executeSearch() {
            const page = this;
            page.click(this.elements.submitButton)

            return this;
        }
    }]
};