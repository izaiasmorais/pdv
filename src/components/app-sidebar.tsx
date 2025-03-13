"use client";
import * as React from "react";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import { sidebarData } from "@/mocks/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={sidebarData.teams} />
			</SidebarHeader>

			<SidebarContent>
				<NavMain items={sidebarData.navMain} />
			</SidebarContent>

			<SidebarFooter>
				<NavUser user={sidebarData.user} />
			</SidebarFooter>

			<SidebarRail />
		</Sidebar>
	);
}
