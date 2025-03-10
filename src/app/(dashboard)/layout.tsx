"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@radix-ui/react-separator";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import {
	SidebarProvider,
	SidebarInset,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
export default function AppLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const pathSegments = pathname.split("/").filter(Boolean);

	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4">
						<SidebarTrigger className="-ml-1" />
						<Separator orientation="vertical" className="mr-2 h-4" />
						<Breadcrumb>
							<BreadcrumbList>
								{pathSegments.map((segment, index) => {
									if (index === pathSegments.length - 1) {
										return (
											<BreadcrumbItem key={segment}>
												<BreadcrumbLink href={`${pathname}`}>
													<span className="capitalize">{segment}</span>
												</BreadcrumbLink>
											</BreadcrumbItem>
										);
									}

									if (index !== pathSegments.length - 1)
										return (
											<div key={segment} className="flex items-center gap-4">
												<BreadcrumbItem className="hidden md:block">
													<BreadcrumbPage>
														<span className="capitalize">{segment}</span>
													</BreadcrumbPage>
												</BreadcrumbItem>

												<BreadcrumbSeparator
													className="hidden md:block"
													key={segment}
												/>
											</div>
										);
								})}
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>

				{children}
			</SidebarInset>
		</SidebarProvider>
	);
}
