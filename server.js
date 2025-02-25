const app = require("./src/app"); // ✅ Import the app without starting it

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));