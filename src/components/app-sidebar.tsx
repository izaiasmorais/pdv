"use client";
import * as React from "react";
import {
	AudioWaveform,
	Banknote,
	Bot,
	Command,
	Database,
	GalleryVerticalEnd,
	LayoutDashboard,
	MonitorSmartphone,
	PackageSearch,
	Receipt,
	Rocket,
	Settings,
	ShieldCheck,
	UserCog,
	Users,
} from "lucide-react";
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

const data = {
	user: {
		name: "Izaías Lima",
		email: "izaiaslima356@gmail.com",
		avatar: "Izaías Lima",
	},
	teams: [
		{
			name: "São Cristóvão",
			logo: GalleryVerticalEnd,
			plan: "Aberto",
		},
		{
			name: "Doom",
			logo: AudioWaveform,
			plan: "Fechado",
		},
		{
			name: "Cocóbis",
			logo: Command,
			plan: "Fechado",
		},
	],
	navMain: [
		{
			title: "Dashboard",
			url: "/",
			icon: LayoutDashboard,
			isActive: false,
			isPage: true,
		},
		{
			title: "Vendas",
			url: "vendas",
			icon: Banknote,
			isActive: false,
			isPage: true,
		},
		{
			title: "Chat Bot",
			url: "chat-bot",
			icon: Bot,
			isActive: false,
			isPage: true,
		},
		{
			title: "Cadastro",
			url: "#",
			icon: Database,
			items: [
				{
					title: "Clientes",
					url: "cadastro/clientes",
					icon: Users,
				},
				{
					title: "Produtos",
					url: "cadastro/produtos",
					icon: PackageSearch,
				},
				{
					title: "Colaboradores",
					url: "cadastro/colaboradores",
					icon: UserCog,
				},
			],
		},
		{
			title: "Loja Online",
			url: "#",
			icon: MonitorSmartphone,
			items: [
				{
					title: "Geral",
					url: "#",
				},
				{
					title: "Itens da Loja",
					url: "#",
				},
				{
					title: "Aparência",
					url: "#",
				},
				{
					title: "Formas de Pagamento",
					url: "#",
				},
			],
		},
		{
			title: "Marketing",
			url: "#",
			icon: Rocket,
			items: [
				{
					title: "WhatsApp Marketing",
					url: "#",
				},
				{
					title: "Cupons",
					url: "#",
				},
				{
					title: "Fidelidade",
					url: "#",
				},
			],
		},
		{
			title: "Fiscal",
			url: "#",
			icon: Receipt,
			isActive: false,
			isPage: true,
		},
		{
			title: "Certificado Digital",
			url: "#",
			icon: ShieldCheck,
			isActive: false,
			isPage: true,
		},
		{
			title: "Configurações",
			url: "#",
			icon: Settings,
			isActive: false,
			isPage: true,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>

			<SidebarContent>
				<NavMain items={data.navMain} />
			</SidebarContent>

			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>

			<SidebarRail />
		</Sidebar>
	);
}
