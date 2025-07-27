export type TextProps = {
	tag?:
		| "a"
		| "p"
		| "em"
		| "span"
		| "small"
		| "strong"
		| "summary"
		| "blockquote"
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6";
	id?: string;
	href?: string;
	class?: string;
	variant?: string;
}

export type WrapperProps = {
	variant?: "standard" | "prose";
	class?: string;
}
