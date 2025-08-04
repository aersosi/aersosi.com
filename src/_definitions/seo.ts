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
};
