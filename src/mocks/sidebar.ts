import {
	AudioWaveform,
	Banknote,
	Bot,
	Command,
	CreditCard,
	Database,
	GalleryVerticalEnd,
	Ham,
	LayoutDashboard,
	Map,
	MonitorSmartphone,
	PackageSearch,
	Palette,
	Phone,
	Receipt,
	Rocket,
	Settings,
	ShieldCheck,
	Star,
	Store,
	TicketPercent,
	UserCog,
	Users,
} from "lucide-react";

export const sidebarData = {
	user: {
		name: "Izaías Lima",
		email: "izaiaslima356@gmail.com",
		avatar: "Izaías Lima",
	},
	teams: [
		{
			name: " Baia's Grill",
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
			url: "/vendas",
			icon: Banknote,
			isActive: false,
			isPage: true,
		},
		{
			title: "Chat Bot",
			url: "/chat-bot",
			icon: Bot,
			isActive: false,
			isPage: true,
		},
		{
			title: "Cadastro",
			url: "#",
			icon: Database,
			isActive: false,
			items: [
				{
					title: "Clientes",
					url: "/cadastro/clientes",
					icon: Users,
				},
				{
					title: "Produtos",
					url: "/cadastro/produtos",
					icon: PackageSearch,
				},
				{
					title: "Colaboradores",
					url: "/cadastro/colaboradores",
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
					url: "/loja-online/geral",
					icon: Store,
				},
				{
					title: "Itens da Loja",
					url: "/loja-online/itens-da-loja",
					icon: Ham,
				},
				{
					title: "Áreas de Entrega",
					url: "/loja-online/areas-de-entrega",
					icon: Map,
				},
				{
					title: "Aparência",
					url: "/loja-online/aparencia",
					icon: Palette,
				},
				{
					title: "Formas de Pagamento",
					url: "/loja-online/formas-de-pagamento",
					icon: CreditCard,
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
					url: "/marketing/whatsapp",
					icon: Phone,
				},
				{
					title: "Cupons",
					url: "/marketing/cupons",
					icon: TicketPercent,
				},
				{
					title: "Fidelidade",
					url: "/marketing/fidelidade",
					icon: Star,
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
