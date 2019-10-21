const express = require("express"),
          app = express(),
      DB_NAME = "petdb",
         port = 8000,
         cors = require('cors');




app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + "/client/build"));

require('./backend/utils/mongoose')(DB_NAME);
require('./backend/utils/routes')(app);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});