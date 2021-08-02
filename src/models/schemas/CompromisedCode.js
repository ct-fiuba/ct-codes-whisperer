const mongoose = require("mongoose");

let compromisedCodeSchema = mongoose.Schema({
  scanCode: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  userGeneratedCode: {
    type: String,
    required: true,
    unique: true
  },
  dateDetected: {
    type: Date,
    default: Date.now(),
    required: true
  },
  risk: {
    type: Number,
    default: 0,
    required: true
  },
});

const CompromisedCode = module.exports = mongoose.model('CompromisedCode', compromisedCodeSchema);
