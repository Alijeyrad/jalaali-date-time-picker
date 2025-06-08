# Jalaali Date-Time Picker 🗓️

Production-ready Jalali (Persian) date + time picker for **React / Next.js**.

[![npm version](https://img.shields.io/npm/v/jalaali-calendar.svg)](https://www.npmjs.com/package/jalaali-calendar)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-%5E3.0-38b2ac?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![ShadCN](https://img.shields.io/badge/ShadCN-UI-purple?logo=react)](https://ui.shadcn.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-%5E5.0-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

---

- Fully typed
- Tree-shakable ESM build
- Built on Tailwind + ShadCN
- Headless – bring your own theme if you like
- Keyboard navigation (← ↑ → ↓ + Enter)

---

## Installation

```bash
npm install jalaali-calendar
```

## Peer Dependencies

Ensure the following packages are installed in your project:

- [`next`](https://nextjs.org/)
- [`shadcn`](https://ui.shadcn.com/docs)
- [`tailwindcss`](https://tailwindcss.com/)
- [`lucide-react`](https://lucide.dev/guide/packages/lucide-react)

## Tailwind Configuration

You **must** include this path in your `tailwind.config.js`:

```js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/jalaali-calendar/**/*.{js,ts,jsx,tsx}", // required
  ],
}
```

Or in your `app/globals.css` (or similar global style file), add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@source "../../node_modules/jalaali-calendar/**/*.{js,ts,jsx,tsx}";
```

## RTL Support

To render correctly, the parent document must be in RTL mode:

```html
<div lang="fa" dir="rtl">
```

## Usage

```tsx
import { JalaaliDateTimePicker } from "jalaali-calendar";

export default function Page() {
  return (
    <div dir="rtl">
      <JalaaliDateTimePicker onChange={(d) => console.log(d)} />
    </div>
  );
}
```

## Interactive Example

See the full interactive demo [here](https://alijeyrad.github.io/jalaali-date-time-picker/).

---

## Contributing

Contributions are welcome and encouraged! 🙌

If you find a bug or have a feature request, please [open an issue](https://github.com/alijeyrad/jalaali-date-time-picker/issues).

To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them
4. Push to your fork and submit a pull request

---

## Author Information

### 👤 Ali Julaee Rad

[![GitHub followers](https://img.shields.io/github/followers/alijeyrad?label=Follow&style=social)](https://github.com/alijeyrad)

- **GitHub**: [alijeyrad](https://github.com/alijeyrad)
- **LinkedIn**: [in/ali-julaee-rad](https://www.linkedin.com/in/ali-julaee-rad/)
- **Email**: [alijrad.dev@gmail.com](mailto:alijrad.dev@gmail.com)

---

> Made with ❤️ in Iran.
