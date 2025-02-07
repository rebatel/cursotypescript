
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }
}

console.log('The application crashed', 500)