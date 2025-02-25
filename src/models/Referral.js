const mongoose = require("mongoose");

const ReferralScheme = new mongoose.Schema({
    referrerId : {type: mongoose.Schema.Types.ObjectId, ref:"User", required: true},
    referredUserId : {type: mongoose.Schema.Types.ObjectId, ref:"User"},
    status : {type: String, enum: ["pending","successful"], default:"pending"},
}, {timestamps: true} );

module.exports = mongoose.model("Referral", ReferralScheme);