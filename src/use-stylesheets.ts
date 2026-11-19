import { useEffect } from "react";

export function useStylesheets(urls: string[]) {
	const key = urls.join("\n");

	useEffect(() => {
		const links = key
			.split("\n")
			.filter(Boolean)
			.map((href) => {
				const link = document.createElement("link");
				link.rel = "stylesheet";
				link.href = href;
				document.head.append(link);
				return link;
			});

		return () => {
			for (const link of links) {
				link.remove();
			}
		};
	}, [key]);
}
