module.exports = {
    'MONGODB_URI': 'mongodb://127.0.0.1:27017/SideCar',

    'PORT': 6000,
    'NODE_ENV': 'local',
    "serverConfig": {
        "CORS": {
            "allowedHosts": ['http://localhost:4000']
        }
    },
    "jwtAuthSecret": "secret",
    "jwtRefreshSecret": "secretrefresh"
}