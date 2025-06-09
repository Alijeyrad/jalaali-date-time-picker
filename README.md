# Jalaali Date-Time Picker 🗓️

Production-ready Jalali (Persian) date + time picker for **React / Next.js**.

- Fully typed
- Tree-shakable ESM build
- Built on Tailwind + ShadCN
- Headless – bring your own theme if you like
- Keyboard navigation (← ↑ → ↓ + Enter)

---

## Installation

```bash
npm install jalaali-date-time-picker
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
    "./node_modules/jalaali-date-time-picker/**/*.{js,ts,jsx,tsx}", // required
  ],
}
```

Or in your `app/globals.css` (or similar global style file), add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@source "../../node_modules/jalaali-date-time-picker/**/*.{js,ts,jsx,tsx}";
```

## RTL Support

To render correctly, the parent document must be in RTL mode:

```html
<div lang="fa" dir="rtl">
```

## Usage

```tsx
import { JalaaliDateTimePicker } from "jalaali-date-time-picker";

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

## Props

| Prop             | Type                                              | Default            | Description |
|------------------|---------------------------------------------------|--------------------|-------------|
| `className`      | `string`                                          | `""`               | Optional Tailwind class |
| `defaultValue`   | `Date`                                            | `new Date()`       | Default initial date |
| `value`          | `Date`                                            | `undefined`        | Controlled value |
| `minDate`        | `Date`                                            | `1970-01-01`       | Minimum date allowed |
| `maxDate`        | `Date`                                            | `2100-12-31`       | Maximum date allowed |
| `disablePast`    | `boolean`                                         | `false`            | Disallow past dates |
| `disableFuture`  | `boolean`                                         | `false`            | Disallow future dates |
| `minuteStep`     | `number`                                          | `1`                | Step for minute selection |
| `disabled`       | `boolean`                                         | `false`            | Disable the picker |
| `showTime`       | `boolean`                                         | `true`             | Show time picker |
| `format`         | `"jalali" \| "gregorian"`                        | `"jalali"`         | Date format to display |
| `clearable`      | `boolean`                                         | `false`            | Show "clear" button |
| `inline`         | `boolean`                                         | `false`            | Render in-place instead of a modal |
| `trigger`        | `ReactNode`                                       | `undefined`        | Custom trigger component |
| `formatLabel`    | `(date: Date) => string`                          | `undefined`        | Custom display label formatter |
| `onChange`       | `(date: Date) => void`                            | `undefined`        | Callback when value changes |
| `onOpenChange`   | `(open: boolean) => void`                         | `undefined`        | Callback when modal opens/closes |
| `onClear`        | `(prev: Date \| null) => void`                   | `undefined`        | Callback when cleared |
| `inputRef`       | `React.RefObject<HTMLInputElement>`              | `undefined`        | Ref to hidden input |
| `placeholderLabel` | `string`                                        | `"انتخاب تاریخ و زمان"` | Placeholder |
| `inputFieldProps` | `InputFieldProps`                                | `undefined`        | Pass props from RHF, Formik, etc. |


---

## Goal

The long-term goal of this package is to make it as lightweight and dependency-free as possible, reducing external reliance without compromising functionality or designI'm starting with icon rendering as the first optimization.

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
