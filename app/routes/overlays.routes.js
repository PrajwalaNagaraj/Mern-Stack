module.exports = app => {
    const Overlays = require("../controllers/overlays.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Overlay
    router.post("/", Overlays.create);
  
    // Retrieve all Overlays
    router.get("/", Overlays.findAll);
  
    // Retrieve a single Overlay with id
    router.get("/:Overlayid", Overlays.findOne);
  
    // Update a Overlay with id
    router.put("/:Overlayid", Overlays.update);
  
    // Delete a Overlay with id
    router.delete("/:Overlayid", Overlays.delete);
  
    // Create a new Overlay
    router.delete("/", Overlays.deleteAll);
  
    app.use('/api/Overlays', router);
  };
  