const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
        name: { type: String, required: true },
        description: { type: String }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
