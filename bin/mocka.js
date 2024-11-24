const { program } = require("commander");
const { generateFromSchema } = require("../src/schemaParser"); // Import the function
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
    generateFromSchema(schemaPath, outputPath);
  });

program
  .command("serve")
  .description("Start the mock API server")
  .action(() => {
    require("../src/server");
  });

program.parse(process.argv);
