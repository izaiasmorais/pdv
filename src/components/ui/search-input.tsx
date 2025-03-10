import { Search } from "lucide-react";
import * as React from "react";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInput = React.forwardRef<
	HTMLInputElement,
	React.ComponentProps<"input">
>(({ className, type, ...props }, ref) => {
	return (
		<div className="relative">
			<Search
				size={16}
				className="absolute left-3 top-[18px] transform -translate-y-1/2 text-gray-500 z-10"
			/>

			<input
				className={`w-[400px] pl-9 flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-base
				shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium
				file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none
				focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed
				disabled:opacity-50 md:text-sm ${className}`}
				type={type}
				ref={ref}
				{...props}
			/>
		</div>
	);
});
SearchInput.displayName = "SearchInput";

export { SearchInput };
