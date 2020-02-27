var config = {
    port: "IP"
}
if (process.env.NODE_ENV != 'development'){
    config = {
        port: process.env.boIP
    }
}

module.exports = config;