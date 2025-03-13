/**
 * Translates column keys from the ClientsTable into human-readable Portuguese labels.
 * @param key - The column key to translate
 * @returns The translated column name in Portuguese
 */
export function translateClientsTableKeys(key: string): string {
	const translations: Record<string, string> = {
		name: "Nome",
		phone: "Telefone",
		address: "Endereço",
		neighborhood: "Bairro",
		email: "E-mail",
		tag: "Tag",
		isActive: "Ativo",
		actions: "Ações",
	};

	return translations[key] || key.charAt(0).toUpperCase() + key.slice(1); // Fallback to capitalize the key if not found
}

export default translateClientsTableKeys;
