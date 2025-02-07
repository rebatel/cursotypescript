"use strict";
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('The application crashed', 500);
