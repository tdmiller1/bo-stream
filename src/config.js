var config = {
    port: "IP"
}
if (process.env.NODE_ENV != 'development'){
    config = {
        port: process.env.REACT_APP_BO_IP
    }
}

module.exports = config;