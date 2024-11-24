# Mocka

Mocka is a powerful and easy-to-use open-source tool for generating mock data. Whether you're building web applications or testing APIs, Mocka works as both an SDK and a CLI, making it effortless to scaffold datasets and mock APIs with just a few commands.

---

## Features

- **Schema-driven data generation**: Define custom schemas to generate data tailored to your needs.
- **Prebuilt templates**: Quickly generate mock datasets with ready-to-use templates.
- **Mock API server**: Serve mock data over REST or GraphQL APIs with ease.
- **CLI & SDK support**: Use Mocka from the command line or integrate it programmatically into your projects.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HoangMinhBK/mocka.git
   cd mocka
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Make the CLI executable:

   ```bash
   chmod +x bin/mocka.js
   ```

4. Add Mocka globally (optional):
   ```bash
   npm link
   ```

---

## Usage

### CLI

Generate mock data from a schema file:

```bash
mocka generate --schema [user-schema.json](http://_vscodecontentref_/1) --output output.json
```

### SDK

Generate mock data programmatically:

```const { generateFromSchema } = require('mocka');

generateFromSchema('examples/user-schema.json', 'output.json');
```

### Contributing
We welcome contributions! Please see `CONTRIBUTING.md` for more details.


### License
This project is licensed under the Apache License 2.0 - see the `LICENSE` file for details.