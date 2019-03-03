
(function (win) {
    function get(url, id) {
        return new Promise((resolve, reject) => {
            $.get(url, (data) => {
                resolve({
                    data,
                    id
                })
            })
        })
    }

    const DS = [
        {
            ID: '%CONFIG',
            URL: 'https://raw.githubusercontent.com/Hazebyte/CrateReloaded/master/config/config.yml',
        },
        {
            ID: '%CRATE',
            URL: 'https://raw.githubusercontent.com/Hazebyte/CrateReloaded/master/config/crate.yml',
        },
        {
            ID: '%LANG',
            URL: 'https://raw.githubusercontent.com/Hazebyte/CrateReloaded/dev/language/SUPPORTED',
        }
    ]

    win.ScrapePlugin = {
        init () {
            return function (hook) {
                hook.afterEach((content, next) => {
                    let body = content
                    let promises = []
                    DS.forEach((d) => {
                        if (body.indexOf(d.ID) != -1) {
                            promises.push(get(d.URL, d.ID))
                        }
                    })
                    Promise.all(promises).then((results) => {
                        results.forEach((result) => {
                            body = body.replace(result.id, result.data)
                        })
                    }).then(() => {
                        next(body)
                    })
                })
            }
        }

    }
})(window)
