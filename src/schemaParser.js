const { faker } = require("@faker-js/faker");
const fs = require("fs");
const Ajv = require("ajv");

const ajv = new Ajv();

function validateSchema(schema) {
  const schemaDefinition = {
    type: "object",
    properties: {
      count: { type: "integer" },
      users: { type: "array" },
    },
  };

  const validate = ajv.compile(schemaDefinition);
  const valid = validate(schema);
  if (!valid) {
    console.error("Invalid schema:", validate.errors);
    process.exit(1);
  }
}

function generateField(type) {
  switch (type) {
    case "uuid":
      return faker.string.uuid();
    case "name":
      return faker.person.fullName();
    case "email":
      return faker.internet.email();
    case "phone":
      return faker.phone.number();
    case "address":
      return {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        country: faker.location.country(),
      };
    case "boolean":
      return faker.datatype.boolean();
    case "date":
      return faker.date.past();
    case "number":
      return faker.datatype.number();
    case "custom":
      return "custom value"; // Replace with custom logic
    default:
      return null;
  }
}

function generateDataFromSchema(schema) {
  validateSchema(schema);

  let generatedData = {};
  const count = schema.count || 1;

  for (let key in schema) {
    if (key === "count") continue;

    if (Array.isArray(schema[key])) {
      generatedData[key] = [];
      for (let i = 0; i < count; i++) {
        generatedData[key].push(generateDataFromSchema(schema[key][0]));
      }
    } else if (typeof schema[key] === "object") {
      generatedData[key] = generateDataFromSchema(schema[key]);
    } else {
      generatedData[key] = generateField(schema[key]);
    }
  }

  return generatedData;
}

module.exports = {
  generateDataFromSchema,
  generateFromSchema: function (schemaPath, outputPath) {
    const schema = require(schemaPath);
    const data = generateDataFromSchema(schema);
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`Mock data saved to: ${outputPath}`);
  },
};
