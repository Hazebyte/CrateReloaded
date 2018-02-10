(function (win) {
    win.FooterPlugin = {
        init () {
            return function (hook) {
                const footer = [
                    '<hr/>',
                    '<footer>',
                    '</footer>'
                ].join('')

                hook.afterEach(html => html + footer)
            }
        }
    }
})(window)
