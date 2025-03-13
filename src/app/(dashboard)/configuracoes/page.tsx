import { Settings } from "lucide-react";

export default function Page() {
	return (
		<div className="w-full p-4">
			<div
				className="border border-dashed border-zinc-200 rounded-lg h-[500px] flex items-center
			justify-center flex-col gap-2"
			>
				<div className="w-20 h-20 flex items-center justify-center rounded-full bg-muted">
					<Settings size={48} strokeWidth={1} />
				</div>

				<h2 className="text-xl font-semibold">Configurações</h2>

				<span className="text-muted-foreground">Página não disponível</span>
			</div>
		</div>
	);
}
