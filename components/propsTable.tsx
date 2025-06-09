import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"

import { Separator } from "@/components/ui/separator"

export default function PropsTable() {
	const InlineCode = (p: React.ComponentProps<"code">) => (
		<code className="rounded bg-muted px-1 py-0.5 text-[0.85em] font-mono">
			{p.children}
		</code>
	)

	const SubTitle = ({ children }: { children: React.ReactNode }) => (
		<h2 className="mt-10 scroll-m-24 text-xl font-semibold tracking-tight">
			{children}
		</h2>
	)
	return (
		<>
			<Separator />
			<SubTitle>Props</SubTitle>

			<Table>
				<TableCaption>
					Props accepted by <InlineCode>JalaaliDateTimePicker</InlineCode>
				</TableCaption>

				<TableHeader>
					<TableRow>
						<TableHead className="w-[170px]">Prop</TableHead>
						<TableHead className="w-[200px]">Type</TableHead>
						<TableHead>Description</TableHead>
						<TableHead className="w-[110px] text-right">Default</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{/* Controlled / uncontrolled */}
					<TableRow>
						<TableCell>value</TableCell>
						<TableCell>
							<InlineCode>Date &#124; null</InlineCode>
						</TableCell>
						<TableCell>
							Controlled value (makes the picker a&nbsp;controlled component)
						</TableCell>
						<TableCell className="text-right">
							<InlineCode>null</InlineCode>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>defaultValue</TableCell>
						<TableCell>
							<InlineCode>Date</InlineCode>
						</TableCell>
						<TableCell>Initial date for uncontrolled mode</TableCell>
						<TableCell className="text-right">
							<InlineCode>new Date()</InlineCode>
						</TableCell>
					</TableRow>

					{/* Limits */}
					<TableRow>
						<TableCell>minDate</TableCell>
						<TableCell>
							<InlineCode>Date</InlineCode>
						</TableCell>
						<TableCell>Earliest selectable date</TableCell>
						<TableCell className="text-right">—</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>maxDate</TableCell>
						<TableCell>
							<InlineCode>Date</InlineCode>
						</TableCell>
						<TableCell>Latest selectable date</TableCell>
						<TableCell className="text-right">—</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>disablePast</TableCell>
						<TableCell>
							<InlineCode>boolean</InlineCode>
						</TableCell>
						<TableCell>Disallow dates before today</TableCell>
						<TableCell className="text-right">
							<InlineCode>false</InlineCode>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>disableFuture</TableCell>
						<TableCell>
							<InlineCode>boolean</InlineCode>
						</TableCell>
						<TableCell>Disallow dates after today</TableCell>
						<TableCell className="text-right">
							<InlineCode>false</InlineCode>
						</TableCell>
					</TableRow>

					{/* Behaviour / look */}
					<TableRow>
						<TableCell>showTime</TableCell>
						<TableCell>
							<InlineCode>boolean</InlineCode>
						</TableCell>
						<TableCell>Display hour / minute selectors</TableCell>
						<TableCell className="text-right">
							<InlineCode>true</InlineCode>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>minuteStep</TableCell>
						<TableCell>
							<InlineCode>number</InlineCode>
						</TableCell>
						<TableCell>Step for minute picker (1 – 30)</TableCell>
						<TableCell className="text-right">
							<InlineCode>1</InlineCode>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>format</TableCell>
						<TableCell>
							<InlineCode>"jalali" &#124; "gregorian"</InlineCode>
						</TableCell>
						<TableCell>Calendar system used for label & input</TableCell>
						<TableCell className="text-right">
							<InlineCode>"jalali"</InlineCode>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>inline</TableCell>
						<TableCell>
							<InlineCode>boolean</InlineCode>
						</TableCell>
						<TableCell>Render picker inline instead of sheet/dialog</TableCell>
						<TableCell className="text-right">
							<InlineCode>false</InlineCode>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>clearable</TableCell>
						<TableCell>
							<InlineCode>boolean</InlineCode>
						</TableCell>
						<TableCell>Shows “clear” button to reset value</TableCell>
						<TableCell className="text-right">
							<InlineCode>false</InlineCode>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>disabled</TableCell>
						<TableCell>
							<InlineCode>boolean</InlineCode>
						</TableCell>
						<TableCell>Disables trigger & interaction</TableCell>
						<TableCell className="text-right">
							<InlineCode>false</InlineCode>
						</TableCell>
					</TableRow>

					{/* Customisation */}
					<TableRow>
						<TableCell>trigger</TableCell>
						<TableCell>
							<InlineCode>ReactNode</InlineCode>
						</TableCell>
						<TableCell>Your own trigger element (e.g. input, button)</TableCell>
						<TableCell className="text-right">—</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>formatLabel</TableCell>
						<TableCell>
							<InlineCode>(d: Date) =&gt; string</InlineCode>
						</TableCell>
						<TableCell>Custom label for selected date/time</TableCell>
						<TableCell className="text-right">—</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>placeholderLabel</TableCell>
						<TableCell>
							<InlineCode>string</InlineCode>
						</TableCell>
						<TableCell>Text shown when no value is selected</TableCell>
						<TableCell className="text-right">Localized default</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>className</TableCell>
						<TableCell>
							<InlineCode>string</InlineCode>
						</TableCell>
						<TableCell>Extra CSS classes for wrapper</TableCell>
						<TableCell className="text-right">—</TableCell>
					</TableRow>

					{/* Events */}
					<TableRow>
						<TableCell>onOpenChange</TableCell>
						<TableCell>
							<InlineCode>(open: boolean) =&gt; void</InlineCode>
						</TableCell>
						<TableCell>Fires when sheet/dialog toggles</TableCell>
						<TableCell className="text-right">—</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>onClear</TableCell>
						<TableCell>
							<InlineCode>(prev: Date &#124; null) =&gt; void</InlineCode>
						</TableCell>
						<TableCell>Called after value is cleared</TableCell>
						<TableCell className="text-right">—</TableCell>
					</TableRow>

					{/* Form-lib helper */}
					<TableRow>
						<TableCell>inputFieldProps</TableCell>
						<TableCell>
							<InlineCode>
								{"{ name, value, onChange, onBlur, ref }"}
							</InlineCode>
						</TableCell>
						<TableCell>
							Bridge for React Hook Form, Formik, etc. (maps to hidden input)
						</TableCell>
						<TableCell className="text-right">—</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>inputRef</TableCell>
						<TableCell>
							<InlineCode>Ref&lt;HTMLInputElement&gt;</InlineCode>
						</TableCell>
						<TableCell>Access the internal hidden input directly</TableCell>
						<TableCell className="text-right">—</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</>
	)
}
