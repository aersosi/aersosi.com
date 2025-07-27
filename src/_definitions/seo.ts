export type SeoProps = {
	pageTitle?: string;
	pageTitleTemplate?: string;
	pageDescription?: string;
	image?: string;
	article?: boolean;
	publishDate?: Date;
	modifiedDate?: Date;
	author?: string;
	noindex?: boolean;
	nofollow?: boolean;
	robotsProps?: {
		nosnippet?: boolean;
		noimageindex?: boolean;
		noarchive?: boolean;
		maxSnippet?: number;
		maxImagePreview?: "none" | "standard" | "large";
		maxVideoPreview?: number;
	};

	facebookAppId?: string;

	additionalMetaTags?: Array<{
		name?: string;
		content?: string;
		property?: string;
		httpEquiv?: string;
		charSet?: string;
	}>;

	additionalLinkTags?: Array<{
		rel: string;
		href: string;
		sizes?: string;
		type?: string;
		color?: string;
		as?: string;
		crossOrigin?: string;
	}>;
}

// Validierungsfunktion für SEO-Props um null/undefined-Werte zu erkennen
export function validateSeoProps(props: Record<string, unknown>) {
	// Optionale Props, die keine Warnung auslösen sollen, wenn sie undefined sind
	const optionalProps = [
		"pageTitleTemplate",
		"image",
		"publishDate",
		"modifiedDate",
		"author",
		"robotsProps",
		"facebookAppId",
		"additionalMetaTags",
		"additionalLinkTags",
	];

	Object.entries(props).forEach(([key, value]) => {
		if (value === null || (value === undefined && !optionalProps.includes(key))) {
			console.warn(`Fehlender SEO-Wert für: ${key}`);
		}
	});
	return props;
}

// Sichere Array-Initialisierung
export function ensureArray<T>(value: T[] | undefined | null): T[] {
	return Array.isArray(value) ? value : [];
}