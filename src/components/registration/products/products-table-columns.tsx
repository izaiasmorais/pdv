import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductsTableItem } from "@/mocks/products";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch"; // Importando o Switch
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuItem,
	DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export const productsTableColumns: ColumnDef<ProductsTableItem>[] = [
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
				<ArrowUpDown />
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize font-semibold">{row.getValue("name")}</div>
		),
	},
	{
		accessorKey: "type",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Tipo
				<ArrowUpDown />
			</Button>
		),
		cell: ({ row }) => (
			<Badge className="rounded-full text-muted-foreground shadow-none bg-muted hover:bg-muted capitalize">
				{row.getValue("type")}
			</Badge>
		),
	},
	{
		accessorKey: "onlinePricr",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Preço Online
				<ArrowUpDown />
			</Button>
		),
		cell: ({ row }) => {
			const price = parseFloat(row.getValue("onlinePricr"));
			const formatted = new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL",
			}).format(price);
			return <div className="font-medium">{formatted}</div>;
		},
	},
	{
		accessorKey: "pdvPrice",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Preço PDV
				<ArrowUpDown />
			</Button>
		),
		cell: ({ row }) => {
			const price = parseFloat(row.getValue("pdvPrice"));
			const formatted = new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL",
			}).format(price);
			return <div className="font-medium">{formatted}</div>;
		},
	},
	{
		accessorKey: "stock",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Estoque
				<ArrowUpDown />
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("stock")}</div>
		),
	},
	{
		accessorKey: "maxStock",
		header: ({ column }) => (
			<Button
				variant="ghost"
				className="!p-0 hover:bg-transparent"
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Qtd. Máx
				<ArrowUpDown />
			</Button>
		),
		cell: ({ row }) => (
			<div className="capitalize">{row.getValue("maxStock")}</div>
		),
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
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => (
			<Badge
				className={`rounded-full shadow-none ${
					row.getValue("status") === "completo"
						? "bg-green-50 text-green-800"
						: "bg-red-50 text-red-800"
				}`}
			>
				<span className="capitalize">{row.getValue("status")}</span>
			</Badge>
		),
	},
	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const product = row.original;
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Abrir Menu</span>
							<MoreHorizontal />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Ações</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => navigator.clipboard.writeText(product.id)}
						>
							Copiar ID do produto
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Ver detalhes</DropdownMenuItem>
						<DropdownMenuItem>Editar</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
