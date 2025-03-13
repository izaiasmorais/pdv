import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
	title: "PDV",
	description: "O melhor PDV do Brasil",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="pt-br"
			className={GeistSans.className}
			suppressHydrationWarning={true}
		>
			<body className="antialised vsc-initialized" cz-shortcut-listen="true">
				{children}
			</body>
		</html>
	);
}
