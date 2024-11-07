# 🔮 Sorcery

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![npm](https://img.shields.io/npm/v/sorcery)
![Build](https://img.shields.io/github/workflow/status/sorseang/sorcery/CI)
![Downloads](https://img.shields.io/npm/dm/sorcery)
![TypeScript](https://img.shields.io/badge/types-TypeScript-blue)
![Coverage](https://img.shields.io/codecov/c/github/sorseang/sorcery)

> Modern JavaScript utility library that makes data transformation magical ✨

## ⚡️ Key Features

- 🎯 **Type-safe** - Built with TypeScript
- 🚀 **Modern** - ESM and CommonJS support
- 🧪 **Reliable** - 100% test coverage
- 🪶 **Lightweight** - Zero dependencies
- 🔋 **Batteries included** - Rich utility collection

## 📦 Installation

```bash
npm install sorcery
yarn add sorcery
pnpm add sorcery
```

## 🪄 Quick Start

```javascript
import { transform } from "sorcery";

const str = transform.string("hello_world").toCamelCase().capitalize().value();

const arr = transform
  .array([1, 2, 2, 3])
  .unique()
  .filter((n) => n > 1)
  .value();

const obj = transform
  .object({ user: { name: "john" } })
  .set("user.age", 25)
  .omit(["user.id"])
  .value();
```

# 📚 Core Modules

## String Module

```javascript
transform
  .string("hello_world")
  .toCamelCase()
  .toSnakeCase()
  .toKebabCase()
  .capitalize()
  .trim()
  .truncate(5)
  .value();
```
## Array Module
```javascript
transform.array([1, 2, 2, 3])
  .unique()
  .chunk(2)
  .flatten()
  .shuffle()
  .value()
```
## Object Module
```javascript
transform.object({ user: { name: 'john' }})
  .set('user.age', 25)
  .get('user.name')
  .pick(['user.name'])
  .omit(['user.id'])
  .value()
```

## Date Module
```javascript
transform.date(new Date())
  .addDays(5)
  .subtractMonths(1)
  .startOf('month')
  .endOf('year')
  .format('YYYY-MM-DD')
  .value()
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](https://github.com/tum-nan-thailand/Sorcery/blob/main/CONTRIBUTING.md) before getting started.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/tum-nan-thailand/Sorcery/blob/main/LICENSE) file for details.

---

For more information, visit the [official documentation](https://github.com/tum-nan-thailand/Sorcery#readme).

---

**Author:** Punthawee Sorseang  
**License:** MIT  
**Repository:** [GitHub](https://github.com/tum-nan-thailand/Sorcery)  
**Bugs:** [Issue Tracker](https://github.com/tum-nan-thailand/Sorcery/issues)  
**Homepage:** [Sorcery](https://github.com/tum-nan-thailand/Sorcery#readme)

## Feedback

We value your feedback! If you have any suggestions or ideas for new features, please open an issue on our [GitHub Issue Tracker](https://github.com/tum-nan-thailand/Sorcery/issues).

## Support

If you encounter any issues or need assistance, feel free to reach out via our [support page](https://github.com/tum-nan-thailand/Sorcery#readme).