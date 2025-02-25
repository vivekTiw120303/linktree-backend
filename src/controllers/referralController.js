const User = require("../models/User");
const Referral = require("../models/Referral");

exports.trackReferral = async (req, res) => {
  try {
    const referrals = await Referral.find({ referrerId: req.user.id });
    res.json(referrals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
