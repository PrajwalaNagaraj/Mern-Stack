const db = require("../models");
const Overlays = db.overlays;

// Create and Save a new Overlay
exports.create = (req, res) => {
   // Validate request
   if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Overlay document
  const overlay = new Overlays({
    OverlayId: req.body.OverlayId,
    Version: req.body.Version,
    NumberOfNodes: req.body.NumberOfNodes,
    NumberOfEdges: req.body.NumberOfEdges,
    Interval: req.body.Interval
  });

  // Save overlay document in the database
  overlay
    .save(overlay)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Overlay."
      });
    });
};

// Retrieve all Overlays from the database.
exports.findAll = (req, res) => {
    //const interval = req.query.Interval;
    //var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    //var condition = {"Interval":interval};
  
    Overlays.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving overlays."
        });
      });
};

// Find a single Overlay with an id
exports.findOne = (req, res) => {
  const Overlayid = req.params.OverlayId;

  Overlays.findById(Overlayid)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Overlay with id " + Overlayid });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Overlay with id=" + Overlayid });
    });
};

// Update a Overlay by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
    
      const Overlayid = req.params.OverlayId;
    
      Overlays.findByIdAndUpdate(Overlayid, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Overlays with id=${Overlayid}. Maybe Overlay was not found!`
            });
          } else res.send({ message: "Overlays was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Overlays with id=" + Overlayid
          });
        });
};

// Delete a Overlay with the specified id in the request
exports.delete = (req, res) => {
    const Overlayid = req.params.OverlayId;

    Tutorial.findByIdAndRemove(Overlayid)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Overlay with id=${Overlayid}. Maybe Overlay was not found!`
          });
        } else {
          res.send({
            message: "Overlay was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Overlay with id=" + Overlayid
        });
      });
};

// Delete all Overlays from the database.
exports.deleteAll = (req, res) => {
    Overlays.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Overlays were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Overlays."
      });
    });
};

// // Find all  Overlays
// exports.findAllVersion = (req, res) => {
//     Tutorial.find({ published: true })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };




