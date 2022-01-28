const router = require("express").Router();
// Import all of the API routes from /api/index.js
const apiRoutes = require("./api");

// add prefix /api to all of the api routes imported from the api directory
router.use("/api", apiRoutes);

module.exports = router;
