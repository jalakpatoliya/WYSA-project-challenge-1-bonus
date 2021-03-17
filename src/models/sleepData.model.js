const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sleepDataSchema = new Schema(
    {
        id: { type: Schema.Types.ObjectId },
        userID: { String },
        sleepStruggleFrom: {
            min: { type: Number, enum: [0, 2, 8] },                     // in weeks
            max: { type: Number, enum: [2, 8, -1] },
        },
        bedTime: Date,
        wakeTime: Date,
        sleepDuration: { type: Number, min: 0, max: 24 },
        dataCollectionStep: { type: Number, min: 1, max: 4 },          // to continue with same screen from which user left
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        deletedAt: { type: Date, default: null },                  // for soft deletion of data
    },
    { timestamps: true, versionKey: false },
    { collection: 'sleepData' }
);
const sleepDataModel = mongoose.model('sleepData', sleepDataSchema);

module.exports = sleepDataModel;
