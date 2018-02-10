
(function (win) {
    const GIT_CONFIG_URL = 'https://raw.githubusercontent.com/Hazebyte/CrateReloaded/config/2.0.0/config/config.yml'
    const GIT_CRATE_URL = 'https://raw.githubusercontent.com/Hazebyte/CrateReloaded/config/2.0.0/config/crate.yml'

    const configData = getConfig().then(data => data)
    const crateData = getCrate().then(data => data)

    function getConfig () {
        return new Promise((resolve, reject) => {
            $.get(GIT_CONFIG_URL, (data) => {
                resolve(data)
            })
        })
    }

    function getCrate () {
        return new Promise((resolve, reject) => {
            $.get(GIT_CRATE_URL, (data) => {
                resolve(data)
            })
        })
    }

    win.ScrapePlugin = {
        init () {
            return function (hook) {
                hook.afterEach((content, next) => {
                    let body = content
                    configData.then((data) => {
                        body = body.replace('{{CONFIG}}', data)
                        next(body)
                    }).then(crateData.then((data) => {
                        body = body.replace('{{CRATE}}', data)
                    })).then(() => {
                        next(body)
                    })
                })
            }
        }

    }
})(window)
