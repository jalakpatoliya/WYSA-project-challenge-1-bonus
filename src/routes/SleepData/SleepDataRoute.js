const router = require('express').Router();
const bodyParser = require('body-parser');
const SleepData = require('../../models/sleepData.model');
const errorCodes = require('../../config/errorcode')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/**
 * Create or update sleepData
 */
router.post('/update/details', async (req, res) => {
  try {

    const { body: { updateObject }, user: { _id: userID } } = req;

    // 1. allowed fields details
    const allowedFields = [
      'sleepStruggleFrom',
      'bedTime',
      'wakeTime',
      'sleepDuration',
      'dataCollectionStep',
    ];

    for (const field in updateObject) {
      if (!allowedFields.includes(field)) {
        return res.status(403).json({
          ...errorCodes.badRequest,
          message: `bad request`,
          displayMessage: `Non updateable field:${field}`
        });
      }
    }

    // 2. create or update data 
    const data = await SleepData.findOneAndUpdate(
      {
        userID
      },
      {
        ...req.body.updateObject
      },
      {
        upsert: true, new: true
      }
    );

    return res.status(200).json({ status: 'success', data });
  } catch (error) {
    res.status(500).json({ status: 'fail', error: error.message });
  }
});

module.exports = router;
