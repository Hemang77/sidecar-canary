module.exports = {
    'MONGODB_URI': 'mongodb+srv://userone:<password>@cluster0.trtymki.mongodb.net/SideCar',

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