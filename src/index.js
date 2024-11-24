// index.js
const { program } = require("commander");
const { generateFromSchema } = require("./schemaParser"); // Import the function
const path = require("path");

program
  .command("generate")
  .description("Generate mock data based on schema")
  .option("--schema <schemaPath>", "Path to the schema file")
  .option("--output <outputPath>", "Path to save the generated data")
  .action((options) => {
    const schemaPath = path.resolve(options.schema);
    const outputPath = path.resolve(options.output);
    console.log(`Generating data based on schema: ${schemaPath}`);
    generateFromSchema(schemaPath, outputPath); // Use the imported function
  });

program.parse(process.argv);
