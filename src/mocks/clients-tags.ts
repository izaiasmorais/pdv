// Define the shape of a tag item for the Combobox
export interface TagItem {
	value: string;
	label: string;
}

// Mock data for client tags
export const clientTags: TagItem[] = [
	{ value: "Açúcar", label: "Açúcar" },
	{ value: "Cliente", label: "Cliente" },
	{ value: "VIP", label: "VIP" },
	{ value: "Novo", label: "Novo" },
	{ value: "Frequente", label: "Frequente" },
];

// Export the clientTags array as the default export
export default clientTags;
