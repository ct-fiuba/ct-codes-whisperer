const CompromisedCode = require('../schemas/CompromisedCode');

module.exports = function CompromisedCodeHandler() {
  const findCompromisedCodes = async (query) => {
    return CompromisedCode.find(query);
  };

  return {
    findCompromisedCodes
  };
};
