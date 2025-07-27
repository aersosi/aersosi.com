import type { ComponentProps } from "astro/types";
import type { Picture } from "astro:assets";

// Photo component props
export type PhotoProps = ComponentProps<typeof Picture> & {
	src: string;
	alt: string;
	aspectRatio?: number;
	classWrapper?: string;
	isCarousel?: boolean;
};

// CarouselSlide component props
export type CarouselSlideProps = ComponentProps<typeof Picture> & {
	src: string;
	alt: string;
};

// Carousel component props
export type CarouselProps = {
	images: Array<CarouselSlideProps>;
	color?: string;
}