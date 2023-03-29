let express = require("express");

const PORT = process.env.PORT || 8070;

let app = express();

app.use(express.static("static"))

app.listen(PORT, () => console.log(`server listening on http://localhost:${PORT}`))
