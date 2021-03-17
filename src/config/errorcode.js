const errorCodes = {};

errorCodes.successMessage = {
    status: 'success',
    data: {},
    message: 'operation completed successfully',
    displayMessage: 'Successful'
};

errorCodes.internalError = {
    status: 'error',
    data: {},
    message: `internal error`,
    displayMessage: `internal error, please try again later`
};

errorCodes.badRequest = {
    status: 'error',
    data: {},
    message: `Required Parameter missing or invalid`,
    displayMessage: `Required Parameter missing or invalid`
};

module.exports = errorCodes;
