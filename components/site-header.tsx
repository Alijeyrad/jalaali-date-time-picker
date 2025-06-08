import Link from "next/link"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "./ui/button"

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
			<div className="flex h-14 items-center justify-between max-w-4xl px-4 mx-auto">
				<Link href="/" className="font-semibold text-lg">
					Jalaali&nbsp;Date-Time&nbsp;Picker
				</Link>

				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<ModeToggle />
						</NavigationMenuItem>

						<NavigationMenuItem>
							<Button variant="ghost" asChild>
								<Link href="/docs">Docs</Link>
							</Button>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<Button variant="ghost" asChild>
								<Link href="/">Demo</Link>
							</Button>
						</NavigationMenuItem>

						<NavigationMenuItem>
							<Button variant="ghost" asChild>
								<Link
									target="_blank"
									rel="noreferrer"
									href="https://github.com/Alijeyrad/jalaali-date-time-picker"
								>
									GitHub
								</Link>
							</Button>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</header>
	)
}
