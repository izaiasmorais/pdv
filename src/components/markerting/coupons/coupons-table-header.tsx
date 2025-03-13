import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Eye, SquarePen } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

export interface CouponTableItem {
	id: string;
	name: string;
	value: string;
	quantity: string;
	remaining: string;
	invested: string;
	isActive: boolean;
	validity: string;
}

export const couponsTableColumns: ColumnDef<CouponTableItem>[] = [
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
		accessorKey: "name",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Nome
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize font-semibold">{row.getValue("name")}</div>
		),
	},
	{
		accessorKey: "value",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Valor
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue("value")}</div>,
	},
	{
		accessorKey: "quantity",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Quantidade
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue("quantity")}</div>,
	},
	{
		accessorKey: "remaining",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Restante
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue("remaining")}</div>,
	},
	{
		accessorKey: "invested",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Investido
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => <div>{row.getValue("invested")}</div>,
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
		id: "copyLink",
		header: "Link",
		enableHiding: false,
		cell: ({ row }) => {
			const coupon = row.original;
			return (
				<Button
					variant="outline"
					className="h-8 py-1 px-2 text-xs"
					onClick={() => navigator.clipboard.writeText(coupon.id)}
				>
					Copiar
				</Button>
			);
		},
	},
	{
		id: "details",
		header: "Detalhes",
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
