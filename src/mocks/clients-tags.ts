// Define the shape of a tag item for the Combobox
export interface TagItem {
	value: string;
	label: string;
}

// Mock data for client tags
export const clientTags: TagItem[] = [
	{ value: "Premium", label: "Premium" },
	{ value: "Regular", label: "Regular" },
	{ value: "Inativo", label: "Inativo" },
	{ value: "Potencial", label: "Potencial" },
	{ value: "Leal", label: "Leal" },
];
