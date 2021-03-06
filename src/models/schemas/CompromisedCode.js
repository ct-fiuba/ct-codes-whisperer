const mongoose = require("mongoose");

let compromisedCodeSchema = mongoose.Schema({
  spaceId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  userGeneratedCode: {
    type: String,
    required: true
  },
  dateDetected: {
    type: Date,
    default: new Date(),
    required: true
  },
  risk: {
    type: Number,
    default: 0,
    required: true
  },
});

const CompromisedCode = module.exports = mongoose.model('CompromisedCode', compromisedCodeSchema);
