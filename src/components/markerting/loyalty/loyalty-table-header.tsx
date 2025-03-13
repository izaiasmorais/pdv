import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Eye, SquarePen } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

export interface LoyaltyTableItem {
	id: string;
	campaign: string;
	stamps: number;
	validity: string;
	isActive: boolean;
}

export const loyaltyTableColumns: ColumnDef<LoyaltyTableItem>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "campaign",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Campanha
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("campaign")}</div>
		),
	},
	{
		accessorKey: "stamps",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Selos
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue("stamps")}</div>,
	},
	{
		accessorKey: "validity",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Validade
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue("validity")}</div>,
	},
	{
		accessorKey: "isActive",
		header: "Ativo",
		cell: ({ row }) => (
			<Switch
				checked={row.getValue("isActive")}
				onCheckedChange={(value) => (row.original.isActive = value)}
				aria-label="Toggle active status"
			/>
		),
	},
	{
		id: "clients",
		header: "Clientes",
		enableHiding: false,
		cell: () => (
			<Button variant="outline" className="p-0 ">
				<Eye />
			</Button>
		),
	},
	{
		id: "edit",
		header: "Editar",
		enableHiding: false,
		cell: () => (
			<Button variant="outline" className="p-0">
				<SquarePen />
			</Button>
		),
	},
];
