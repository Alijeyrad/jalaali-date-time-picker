import * as react from 'react';
import { ReactNode } from 'react';

interface JalaaliDateTimePickerProps {
    className?: string;
    defaultValue?: Date;
    value?: Date;
    minDate?: Date;
    maxDate?: Date;
    disablePast?: boolean;
    disableFuture?: boolean;
    minuteStep?: number;
    disabled?: boolean;
    showTime?: boolean;
    format?: "jalali" | "gregorian";
    clearable?: boolean;
    inline?: boolean;
    trigger?: ReactNode;
    formatLabel?: (d: Date) => string;
    onChange?: (d: Date) => void;
    onOpenChange?: (open: boolean) => void;
    onClear?: (prev: Date | null) => void;
    inputRef?: React.RefObject<HTMLInputElement>;
    placeholderLabel?: string;
}
interface JalaaliDateTimePickerRef {
    getValue: () => Date | null;
}
declare const JalaaliDateTimePicker: react.ForwardRefExoticComponent<JalaaliDateTimePickerProps & react.RefAttributes<JalaaliDateTimePickerRef>>;

export { JalaaliDateTimePicker, type JalaaliDateTimePickerProps, type JalaaliDateTimePickerRef };
