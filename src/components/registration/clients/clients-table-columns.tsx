import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// Define the shape of a client item
export interface ClientTableItem {
  id: string;
  name: string;
  phone: string;
  address: string;
  neighborhood: string;
  email: string;
  tag: string;
  isActive: boolean;
}

// Define the columns for the clients table
export const clientsTableColumns: ColumnDef<ClientTableItem>[] = [
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
    accessorKey: "phone",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="!p-0 hover:bg-transparent"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Telefone
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("phone")}</div>
    ),
  },
  {
    accessorKey: "address",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="!p-0 hover:bg-transparent"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Endereço
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("address")}</div>
    ),
  },
  {
    accessorKey: "neighborhood",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="!p-0 hover:bg-transparent"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Bairro
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("neighborhood")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="!p-0 hover:bg-transparent"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        E-mail
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "tag",
    header: ({ column }) => (
      <Button
        variant="ghost"
        className="!p-0 hover:bg-transparent"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Tag
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <Badge className="rounded-full text-muted-foreground shadow-none bg-muted hover:bg-muted capitalize">
        {row.getValue("tag")}
      </Badge>
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
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const client = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir Menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(client.id)}
            >
              Copiar ID do cliente
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

export default clientsTableColumns;
