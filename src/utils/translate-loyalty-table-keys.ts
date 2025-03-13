/**
 * Translates column keys from the LoyaltyTable into human-readable Portuguese labels.
 * @param key - The column key to translate
 * @returns The translated column name in Portuguese
 */
export function translateLoyaltyTableKeys(key: string): string {
	const translations: Record<string, string> = {
		select: "Selecionar",
		campaign: "Campanha",
		stamps: "Selos",
		validity: "Validade",
		isActive: "Ativo",
		clients: "Clientes Participantes",
		edit: "Editar",
	};

	return translations[key] || key.charAt(0).toUpperCase() + key.slice(1);
}
