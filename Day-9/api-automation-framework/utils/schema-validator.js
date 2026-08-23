const Ajv = require("ajv");

const ajv = new Ajv();

function validateSchema(data, schema) {

    const validate = ajv.compile(schema);

    const valid = validate(data, schema);

    if (!valid) {
        console.log(validate.errors);
    }

    return valid;
}

module.exports = {
    validateSchema
};