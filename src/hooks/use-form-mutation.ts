"use client";
import { useForm, FieldValues, DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";
import { toast } from "sonner";

interface UseFormMutationProps<TSchema extends FieldValues> {
	schema: ZodType<TSchema>;
	defaultValues: DefaultValues<TSchema>;
	onSubmit: (data: TSchema) => void;
}

export function useFormMutation<TSchema extends FieldValues>({
	schema,
	defaultValues,
	onSubmit,
}: UseFormMutationProps<TSchema>) {
	const form = useForm<TSchema>({
		defaultValues,
		resolver: zodResolver(schema),
	});

	const handleSubmitForm = form.handleSubmit((data) => {
		try {
			onSubmit(data);
		} catch (error) {
			toast.error("Ocorreu um erro ao processar a requisição");
			console.error(error);
		}
	});

	return { ...form, handleSubmitForm };
}
