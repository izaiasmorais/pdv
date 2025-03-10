"use client";
import { useFormMutation } from "./use-form-mutation";
import { z } from "zod";

export const filterProductSchema = z.object({
	productType: z.string().optional(),
});

export function useFilterProduct() {
	const form = useFormMutation({
		schema: filterProductSchema,
		defaultValues: {
			productType: "",
		},
		onSubmit: (data) => {
			console.log(data);
		},
	});

	return {
		form,
	};
}
