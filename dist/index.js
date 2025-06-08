'use strict';

var jalaali = require('jalaali-js');
var react = require('react');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var jsxRuntime = require('react/jsx-runtime');
var SelectPrimitive = require('@radix-ui/react-select');
var lucideReact = require('lucide-react');
var SheetPrimitive = require('@radix-ui/react-dialog');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var jalaali__default = /*#__PURE__*/_interopDefault(jalaali);
var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespace(SelectPrimitive);
var SheetPrimitive__namespace = /*#__PURE__*/_interopNamespace(SheetPrimitive);

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function toJalaali(date) {
  const { jy, jm, jd } = jalaali__default.default.toJalaali(date);
  return `${jy}/${jm.toString().padStart(2, "0")}/${jd.toString().padStart(2, "0")}`;
}
function fromJalaali(jy, jm, jd) {
  const { gy, gm, gd } = jalaali__default.default.toGregorian(jy, jm, jd);
  return new Date(gy, gm - 1, gd);
}
function getMonthDays(jy, jm) {
  return jalaali__default.default.jalaaliMonthLength(jy, jm);
}
function getFirstDayOfMonth(jy, jm) {
  const { gy, gm, gd } = jalaali__default.default.toGregorian(jy, jm, 1);
  return new Date(gy, gm - 1, gd).getDay();
}
function getJalaliParts(date) {
  return jalaali__default.default.toJalaali(date);
}

// lib/locale-fa.ts
var persianWeekdaysShort = ["\u0634", "\u06CC", "\u062F", "\u0633", "\u0686", "\u067E", "\u062C"];
var persianMonthNames = [
  "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646",
  "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A",
  "\u062E\u0631\u062F\u0627\u062F",
  "\u062A\u06CC\u0631",
  "\u0645\u0631\u062F\u0627\u062F",
  "\u0634\u0647\u0631\u06CC\u0648\u0631",
  "\u0645\u0647\u0631",
  "\u0622\u0628\u0627\u0646",
  "\u0622\u0630\u0631",
  "\u062F\u06CC",
  "\u0628\u0647\u0645\u0646",
  "\u0627\u0633\u0641\u0646\u062F"
];
function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
var buttonVariants = classVarianceAuthority.cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button(_a) {
  var _b = _a, {
    className,
    variant,
    size,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "asChild"
  ]);
  const Comp = asChild ? reactSlot.Slot : "button";
  return /* @__PURE__ */ jsxRuntime.jsx(
    Comp,
    __spreadValues({
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className }))
    }, props)
  );
}
function Select(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Root, __spreadValues({ "data-slot": "select" }, props));
}
function SelectValue(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Value, __spreadValues({ "data-slot": "select-value" }, props));
}
function SelectTrigger(_a) {
  var _b = _a, {
    className,
    size = "default",
    children
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Trigger,
    __spreadProps(__spreadValues({
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    })
  );
}
function SelectContent(_a) {
  var _b = _a, {
    className,
    children,
    position = "popper"
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "position"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Content,
    __spreadProps(__spreadValues({
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsxRuntime.jsx(
          SelectPrimitive__namespace.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx(SelectScrollDownButton, {})
      ]
    })
  ) });
}
function SelectItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    SelectPrimitive__namespace.Item,
    __spreadProps(__spreadValues({
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children })
      ]
    })
  );
}
function SelectScrollUpButton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.ScrollUpButton,
    __spreadProps(__spreadValues({
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronUpIcon, { className: "size-4" })
    })
  );
}
function SelectScrollDownButton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SelectPrimitive__namespace.ScrollDownButton,
    __spreadProps(__spreadValues({
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props), {
      children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDownIcon, { className: "size-4" })
    })
  );
}
function Sheet(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Root, __spreadValues({ "data-slot": "sheet" }, props));
}
function SheetTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Trigger, __spreadValues({ "data-slot": "sheet-trigger" }, props));
}
function SheetPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ jsxRuntime.jsx(SheetPrimitive__namespace.Portal, __spreadValues({ "data-slot": "sheet-portal" }, props));
}
function SheetOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Overlay,
    __spreadValues({
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )
    }, props)
  );
}
function SheetContent(_a) {
  var _b = _a, {
    className,
    children,
    side = "right"
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "side"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxRuntime.jsxs(
      SheetPrimitive__namespace.Content,
      __spreadProps(__spreadValues({
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )
      }, props), {
        children: [
          children,
          /* @__PURE__ */ jsxRuntime.jsxs(SheetPrimitive__namespace.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsxRuntime.jsx(lucideReact.XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntime.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
}
function SheetHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    __spreadValues({
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className)
    }, props)
  );
}
function SheetTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Title,
    __spreadValues({
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className)
    }, props)
  );
}
function SheetDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ jsxRuntime.jsx(
    SheetPrimitive__namespace.Description,
    __spreadValues({
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
var JalaaliDateTimePicker = react.forwardRef(
  ({
    className,
    defaultValue = /* @__PURE__ */ new Date(),
    value,
    minDate,
    maxDate,
    disablePast = false,
    disableFuture = false,
    minuteStep = 1,
    disabled = false,
    showTime = true,
    format = "jalali",
    clearable = false,
    inline = false,
    trigger,
    formatLabel,
    onChange,
    onOpenChange,
    onClear,
    inputRef,
    placeholderLabel
  }, ref) => {
    const startOf = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
    const today = startOf(/* @__PURE__ */ new Date());
    const rawMin = startOf(minDate != null ? minDate : new Date(1970, 0, 1));
    const rawMax = startOf(maxDate != null ? maxDate : new Date(2100, 11, 31));
    const min = disablePast ? rawMin > today ? rawMin : today : rawMin;
    const max = disableFuture ? rawMax < today ? rawMax : today : rawMax;
    const init = value != null ? value : defaultValue;
    const { jy: iy, jm: im, jd: id } = getJalaliParts(init);
    const [open, setOpen] = react.useState(false);
    const [year, setYear] = react.useState(iy);
    const [month, setMonth] = react.useState(im);
    const [selectedDay, setSelectedDay] = react.useState(id);
    const [hour, setHour] = react.useState(init.getHours());
    const [minute, setMinute] = react.useState(init.getMinutes());
    const [confirmedDate, setConfirmedDate] = react.useState(null);
    const [error, setError] = react.useState(null);
    react.useEffect(() => {
      if (!value) return;
      const { jy, jm, jd } = getJalaliParts(value);
      setYear(jy);
      setMonth(jm);
      setSelectedDay(jd);
      setHour(value.getHours());
      setMinute(value.getMinutes());
      setConfirmedDate(value);
    }, [value]);
    const { weeks, daysFlat, canPrevMonth, canNextMonth } = react.useMemo(() => {
      const dim = getMonthDays(year, month);
      const shift = (getFirstDayOfMonth(year, month) + 1) % 7;
      const all = Array.from({ length: 42 }, (_, i) => {
        const d = i - shift + 1;
        return d > 0 && d <= dim ? d : null;
      });
      return {
        weeks: Array.from({ length: 6 }, (_, w) => all.slice(w * 7, w * 7 + 7)),
        daysFlat: all.map((d) => d != null ? d : -1),
        canPrevMonth: fromJalaali(year, month, 1) > min,
        canNextMonth: fromJalaali(year, month, dim) < max
      };
    }, [year, month, min, max]);
    const finalDate = react.useMemo(() => {
      const d = fromJalaali(year, month, selectedDay);
      d.setHours(showTime ? hour : 0);
      d.setMinutes(showTime ? minute : 0);
      return d;
    }, [year, month, selectedDay, hour, minute, showTime]);
    react.useImperativeHandle(ref, () => ({ getValue: () => confirmedDate }), [
      confirmedDate
    ]);
    const yearOptions = react.useMemo(() => {
      const minJ = getJalaliParts(min).jy;
      const maxJ = getJalaliParts(max).jy;
      return Array.from({ length: maxJ - minJ + 1 }, (_, i) => minJ + i);
    }, [min, max]);
    const isDisabledDay = react.useCallback(
      (d) => {
        const g = fromJalaali(year, month, d);
        return g < min || g > max;
      },
      [year, month, min, max]
    );
    const formatBuiltIn = (d) => format === "gregorian" ? d.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }) : toJalaali(d);
    const labelText = confirmedDate ? formatLabel ? formatLabel(confirmedDate) : formatBuiltIn(confirmedDate) : void 0;
    const moveSelection = react.useCallback(
      (delta) => {
        const curIdx = daysFlat.findIndex((d) => d === selectedDay);
        let idx = curIdx + delta;
        while (idx >= 0 && idx < daysFlat.length && daysFlat[idx] === -1) {
          idx += delta > 0 ? 1 : -1;
        }
        const nextDay = daysFlat[idx];
        if (nextDay !== void 0 && nextDay !== -1) setSelectedDay(nextDay);
      },
      [daysFlat, selectedDay]
    );
    const submit = react.useCallback(() => {
      var _a;
      if (finalDate < min || finalDate > max) {
        setError("\u062A\u0627\u0631\u06CC\u062E \u062E\u0627\u0631\u062C \u0627\u0632 \u0645\u062D\u062F\u0648\u062F\u0647 \u0645\u062C\u0627\u0632 \u0627\u0633\u062A");
        return;
      }
      setError(null);
      setConfirmedDate(finalDate);
      if (!inline) setOpen(false);
      onChange == null ? void 0 : onChange(finalDate);
      (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.setAttribute("value", finalDate.toISOString());
    }, [finalDate, inline, min, max, onChange, inputRef]);
    const clearSelection = react.useCallback(() => {
      var _a;
      onClear == null ? void 0 : onClear(confirmedDate);
      setConfirmedDate(null);
      (_a = inputRef == null ? void 0 : inputRef.current) == null ? void 0 : _a.setAttribute("value", "");
    }, [onClear, confirmedDate, inputRef]);
    const applyPreset = react.useCallback((d) => {
      const { jy, jm, jd } = getJalaliParts(d);
      setYear(jy);
      setMonth(jm);
      setSelectedDay(jd);
      setHour(d.getHours());
      setMinute(d.getMinutes());
    }, []);
    const TopControls = /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            size: "icon",
            variant: "ghost",
            onClick: () => canNextMonth && (month === 12 ? (setMonth(1), setYear((y) => y + 1)) : setMonth((m) => m + 1)),
            disabled: !canNextMonth,
            "aria-label": "\u0645\u0627\u0647 \u0628\u0639\u062F",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronRight, { className: "w-4 h-4" })
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsx("div", { className: "font-semibold w-24 text-center", children: persianMonthNames[month - 1] }),
        /* @__PURE__ */ jsxRuntime.jsx(
          Button,
          {
            size: "icon",
            variant: "ghost",
            onClick: () => canPrevMonth && (month === 1 ? (setMonth(12), setYear((y) => y - 1)) : setMonth((m) => m - 1)),
            disabled: !canPrevMonth,
            "aria-label": "\u0645\u0627\u0647 \u0642\u0628\u0644",
            children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronLeft, { className: "w-4 h-4" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntime.jsxs(Select, { value: year.toString(), onValueChange: (v) => setYear(+v), children: [
        /* @__PURE__ */ jsxRuntime.jsx(SelectTrigger, { className: "w-[96px]", children: /* @__PURE__ */ jsxRuntime.jsx(SelectValue, { placeholder: "\u0633\u0627\u0644" }) }),
        /* @__PURE__ */ jsxRuntime.jsx(SelectContent, { children: yearOptions.map((y) => /* @__PURE__ */ jsxRuntime.jsx(
          SelectItem,
          {
            value: y.toString(),
            disabled: fromJalaali(y, 12, 29) < min || fromJalaali(y, 1, 1) > max,
            children: y
          },
          y
        )) })
      ] })
    ] });
    const CalendarTable = /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        onKeyDown: (e) => {
          switch (e.key) {
            case "ArrowLeft":
              moveSelection(-1);
              e.preventDefault();
              break;
            case "ArrowRight":
              moveSelection(1);
              e.preventDefault();
              break;
            case "ArrowUp":
              moveSelection(-7);
              e.preventDefault();
              break;
            case "ArrowDown":
              moveSelection(7);
              e.preventDefault();
              break;
            case "Enter":
              submit();
              e.preventDefault();
              break;
          }
        },
        children: /* @__PURE__ */ jsxRuntime.jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsxRuntime.jsx("thead", { children: /* @__PURE__ */ jsxRuntime.jsx("tr", { children: persianWeekdaysShort.map((d) => /* @__PURE__ */ jsxRuntime.jsx(
            "th",
            {
              className: "text-center text-sm font-medium text-muted-foreground",
              children: d
            },
            d
          )) }) }),
          /* @__PURE__ */ jsxRuntime.jsx("tbody", { children: weeks.map((wk, wi) => /* @__PURE__ */ jsxRuntime.jsx("tr", { children: wk.map((d, di) => /* @__PURE__ */ jsxRuntime.jsx("td", { className: "p-0", children: d ? /* @__PURE__ */ jsxRuntime.jsx(
            Button,
            {
              size: "sm",
              className: "w-full hover:ring ring-primary/40",
              variant: d === selectedDay ? "default" : "ghost",
              onClick: () => !isDisabledDay(d) && setSelectedDay(d),
              disabled: isDisabledDay(d),
              "aria-selected": d === selectedDay,
              children: d
            }
          ) : /* @__PURE__ */ jsxRuntime.jsx("span", { className: "inline-block h-9 w-full" }) }, di)) }, wi)) })
        ] })
      }
    );
    const TimeSelectors = showTime && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex gap-6 justify-center mt-2", children: [
      {
        label: "\u0633\u0627\u0639\u062A",
        value: hour,
        inc: () => setHour((h) => (h + 1) % 24),
        dec: () => setHour((h) => (h + 23) % 24)
      },
      {
        label: "\u062F\u0642\u06CC\u0642\u0647",
        value: minute,
        inc: () => setMinute((m) => (m + minuteStep) % 60),
        dec: () => setMinute((m) => (m - minuteStep + 60 * 60) % 60)
      }
    ].map(({ label, value: value2, inc, dec }) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsxRuntime.jsx("span", { className: "text-sm mb-1", children: label }),
      /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntime.jsx(Button, { size: "icon", variant: "ghost", onClick: inc, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronUp, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntime.jsx("span", { className: "w-10 text-center", children: value2.toString().padStart(2, "0") }),
        /* @__PURE__ */ jsxRuntime.jsx(Button, { size: "icon", variant: "ghost", onClick: dec, children: /* @__PURE__ */ jsxRuntime.jsx(lucideReact.ChevronDown, { className: "h-3.5 w-3.5" }) })
      ] })
    ] }, label)) });
    const Actions = /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "flex gap-2 mt-4", children: [
      /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "secondary", onClick: () => applyPreset(/* @__PURE__ */ new Date()), children: "\u0627\u0644\u0627\u0646" }),
      /* @__PURE__ */ jsxRuntime.jsx(
        Button,
        {
          variant: "secondary",
          onClick: () => {
            const t = /* @__PURE__ */ new Date();
            t.setDate(t.getDate() + 1);
            applyPreset(t);
          },
          children: "\u0641\u0631\u062F\u0627"
        }
      ),
      clearable && /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline", onClick: clearSelection, children: "\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646" }),
      /* @__PURE__ */ jsxRuntime.jsx(Button, { onClick: submit, children: "\u062B\u0628\u062A" })
    ] });
    const placeholder = placeholderLabel != null ? placeholderLabel : showTime ? "\u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646" : "\u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0627\u0631\u06CC\u062E";
    if (inline) {
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          className: cn(
            "p-4 space-y-4 border rounded-lg bg-background max-w-md mx-auto",
            className
          ),
          children: [
            TopControls,
            CalendarTable,
            TimeSelectors,
            Actions,
            error && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-destructive text-center mt-2", children: error })
          ]
        }
      );
    }
    const handleOpenChange = (o) => {
      if (!disabled) {
        setOpen(o);
        onOpenChange == null ? void 0 : onOpenChange(o);
      }
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(Sheet, { open, onOpenChange: handleOpenChange, children: [
      /* @__PURE__ */ jsxRuntime.jsx(SheetTrigger, { asChild: true, className: "w-fit", children: trigger != null ? trigger : /* @__PURE__ */ jsxRuntime.jsx(Button, { variant: "outline", disabled, children: confirmedDate ? /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "text-sm text-muted-foreground", children: [
        showTime ? `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")} - ` : "",
        labelText
      ] }) : placeholder }) }),
      /* @__PURE__ */ jsxRuntime.jsxs(
        SheetContent,
        {
          side: "bottom",
          className: cn("max-w-md mx-auto", className),
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs(SheetHeader, { className: "text-center", children: [
              /* @__PURE__ */ jsxRuntime.jsx(SheetTitle, { children: showTime ? "\u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646" : "\u0627\u0646\u062A\u062E\u0627\u0628 \u062A\u0627\u0631\u06CC\u062E" }),
              /* @__PURE__ */ jsxRuntime.jsx(SheetDescription, { children: showTime ? "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F" : "\u062A\u0627\u0631\u06CC\u062E \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F" })
            ] }),
            /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "p-4 space-y-4", children: [
              TopControls,
              CalendarTable,
              TimeSelectors,
              Actions,
              error && /* @__PURE__ */ jsxRuntime.jsx("p", { className: "text-sm text-destructive text-center mt-2", children: error })
            ] })
          ]
        }
      )
    ] });
  }
);
JalaaliDateTimePicker.displayName = "JalaaliDateTimePicker";

exports.JalaaliDateTimePicker = JalaaliDateTimePicker;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map