const Pets = require('../controllers/pets');

module.exports = function(app) {
    app.get("/pet", Pets.GetAll);
    app.get("/pet/:_id", Pets.GetOne);
    app.post("/pet", Pets.Create);
    app.put("/pet/:_id", Pets.Update);
    app.delete("/pet/:_id", Pets.Delete);
}