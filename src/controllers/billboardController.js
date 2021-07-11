module.exports = function visitsController(compromisedCodeHandler) {
  const errorDB = (res, err) => {
    console.log(err.message);
    return res.status(500).json({ reason: 'DB Error' });
  };

  const get = async (req, res, next) => {
    let filters = req.query;
    return compromisedCodeHandler.findCompromisedCodes(filters)
      .then(codes => res.status(200).json(codes))
      .catch(err => errorDB(res, err));
  };

  return {
    get
  };
};
