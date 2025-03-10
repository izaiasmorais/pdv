export function translateProductsTableKeys(key: string): string {
	const translations: Record<string, string> = {
		id: "ID",
		name: "Nome",
		code: "Código",
		type: "Tipo",
		price: "Preço",
		max_quantity: "Quantidade Máxima",
		budget: "Orçamento",
	};

	return translations[key] || key;
}
