// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Website metadata
export const SITE_URL: string = "https://beatblog.netlify.app/";
export const SITE_TITLE: string = "BeatBlog";
export const SITE_DESCRIPTION: string = "Welcome to BeatBlog";

// Repo info
export const REPO: string = "scottclayton22/blog"; // TODO: Update dynamically
export const DEFAULT_BRANCH: string = "main"; // TODO: Update dynamically

// SEO metadata
export const TWITTER_CREATOR: string = "@xxx";

// Navigation
type Page = {
	title: string;
	href: string;
	children?: Page[];
};

export const PAGES: Page[] = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Blog",
		href: "/blog",
	},
	{
		title: "Free Stuff",
		href: "https://madeforlifemusic.com",
	},
	{
		title: "About",
		href: "/about",
	},
];

// i18n
export const DEFAULT_LOCALE = "en";
export const LOCALES = {
	en: "en", // the `defaultLocale` value must present in `locales` keys
	it: "it",
};

// Hosting
export const HOSTING_SERVICE: "cloudflare" | "netlify" | "none" = "cloudflare";
