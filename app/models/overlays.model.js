module.exports = mongoose => {
    var schema = mongoose.Schema(
    {
      OverlayId : Number,
	    Version : String,
	    NumberOfNodes : Number,
	    NumberOfEdges : Number,
	    Interval : String
    },
    { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.OverlayId = _id;
        return object;
      });
    
      const Overlays = mongoose.model("overlays", schema);
      return Overlays;
    };

   