/**
 * Translates column keys from the CouponsTable into human-readable Portuguese labels.
 * @param key - The column key to translate
 * @returns The translated column name in Portuguese
 */
export function translateCouponsTableKeys(key: string): string {
	const translations: Record<string, string> = {
		select: "Selecionar",
		name: "Nome",
		value: "Valor",
		quantity: "Quantidade",
		remaining: "Restante",
		invested: "Investido",
		isActive: "Ativo",
		validity: "Validade",
		copyLink: "Link",
		details: "Detalhes",
		edit: "Editar",
	};

	return translations[key] || key.charAt(0).toUpperCase() + key.slice(1);
}
