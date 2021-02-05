const Users = require('../controllers/Users.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
    app.post("/api/register", Users.register);
    app.post("/api/login", Users.login);
    app.get("/api/logout", Users.logout);
    app.get("/api/users", Users.getAll);


}