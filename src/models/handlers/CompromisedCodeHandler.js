const CompromisedCode = require('../schemas/CompromisedCode');

module.exports = function CompromisedCodeHandler() {
  const findCompromisedCodes = async (query) => {
    const { from, ...fields} = query
    return CompromisedCode.find({
      ...from && ({"dateDetected": {
        "$gte": new Date(from)
      }}), 
      ...fields
    });
  };

  return {
    findCompromisedCodes
  };
};
