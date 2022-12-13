class Button {
    static initial(selector, value) {
        $(selector).append(
            `
            <input class="jq-button" type="button" value="${value}"></input>
            `
        );

        $(`${selector} .jq-button`).click(function(e) {
            console.log(`${value} button is clicked`);
        });
    };

}