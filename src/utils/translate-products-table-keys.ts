/**
 * Translates column keys from the ProductsTable into human-readable Portuguese labels.
 * @param key - The column key to translate
 * @returns The translated column name in Portuguese
 */
export function translateProductsTableKeys(key: string): string {
	const translations: Record<string, string> = {
		select: "Selecionar",
		id: "ID",
		name: "Nome",
		onlinePricr: "Preço Online",
		pdvPrice: "Preço PDV",
		type: "Tipo",
		stock: "Estoque",
		minStock: "Estoque Mínimo",
		maxStock: "Estoque Máximo",
		isActive: "Ativo",
		status: "Status",
		actions: "Ações",
	};

	return translations[key] || key.charAt(0).toUpperCase() + key.slice(1);
}
