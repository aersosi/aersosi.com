// @ts-ignore
// TODO: a11yDialog types
import A11yDialog from "https://cdn.jsdelivr.net/npm/a11y-dialog@8/dist/a11y-dialog.esm.min.js";
import {
	getNextIndex,
	getNextLink,
	getPrevIndex,
	getPrevLink,
	loadImage,
	loadImages,
} from "./utils";

export class Carousel {
	dialog: any | null = null;
	carouselElem: HTMLElement | null = null;
	slidesUl: HTMLUListElement | HTMLElement | null = null;
	imagesElements: HTMLImageElement[] = [];
	prevLink: HTMLAnchorElement | null = null;
	nextLink: HTMLAnchorElement | null = null;
	closeButton: HTMLButtonElement | null = null;
	currentIdx: number | null = null;
	isOpen: boolean = false;
	circleNavigation: HTMLElement | null = null;

	_popstateHandler = (e: PopStateEvent) => {};
	_keydownHandler = (e: KeyboardEvent) => {};
	_hoverPrevHandler = (e: MouseEvent) => {};
	_hoverNextHandler = (e: MouseEvent) => {};
	_goToPrevHandler = (e: MouseEvent) => {};
	_goToNextHandler = (e: MouseEvent) => {};
	_closeHandler = (e: MouseEvent) => {};
	_updateSlideHandler = (e: any) => {};
	_circleClickHandler = (e: MouseEvent) => {};
	_touchStartHandler = (e: TouchEvent) => {};
	_touchMoveHandler = (e: TouchEvent) => {};
	_touchEndHandler = (e: TouchEvent) => {};
	touchStartX: number = 0;
	touchEndX: number = 0;

	constructor(carouselElem: HTMLElement | null) {
		if (carouselElem == null) {
			console.error("Carousel element is null");
			return;
		}

		// Initialize dialog first - use the document to find it, not the carousel element
		const dialogElement = document.getElementById("carousel-dialog");

		if (dialogElement) {
			try {
				this.dialog = new A11yDialog(dialogElement);
			} catch (error) {
				console.error("Error initializing dialog:", error);
			}
		} else {
			console.error("Dialog element not found");
		}

		// Set carousel element
		this.carouselElem = carouselElem;

		// Get slides
		const slides = carouselElem.querySelector<HTMLUListElement>("#slides");

		if (slides == null) {
			console.error("Slides element not found");
			return;
		}
		this.slidesUl = slides;

		// Get navigation elements - these can be optional if there's only one image
		this.prevLink = carouselElem.querySelector<HTMLAnchorElement>("#prevLink");
		this.nextLink = carouselElem.querySelector<HTMLAnchorElement>("#nextLink");
		this.closeButton = carouselElem.querySelector<HTMLButtonElement>("#closeButton");
		this.circleNavigation = carouselElem.querySelector("#circle-navigation");

		// If close button is missing, we can't close the carousel
		if (this.closeButton == null) {
			console.error("Close button not found");
			return;
		}

		const { currentIndex, isOpen } = this._getCarouselState();
		this.currentIdx = currentIndex;
		this.isOpen = isOpen;

		this.slidesUl.children[this.currentIdx]?.classList.add("carousel__slide--visible");

		this.imagesElements = Array.from(this.slidesUl.children).reduce<HTMLImageElement[]>(
			(acc, c) => {
				const imgElement = c.querySelector("picture img");
				if (imgElement instanceof HTMLImageElement) {
					acc.push(imgElement);
				}
				return acc;
			},
			[],
		);

		if (this.isOpen) {
			this.open(this.currentIdx);
		}

		this._popstateHandler = this._handlePopstate.bind(this);
		addEventListener("popstate", this._popstateHandler);
	}

	open(index: number | undefined = undefined) {
		// Default to 0 if index is undefined or NaN
		if (index === undefined || Number.isNaN(index)) {
			index = 0;
		}

		if (!this.slidesUl) {
			console.error("No slides element found");
			return;
		}

		// Check if index is within bounds
		if (index < 0 || index >= this.slidesUl.childElementCount) {
			console.error("Index out of bounds:", index, "max:", this.slidesUl.childElementCount - 1);
			index = 0; // Default to first slide if out of bounds
		}

		if (!this.dialog) {
			console.error("No dialog element found");
			return;
		}

		document.documentElement.style.overflow = "hidden";
		if (this.carouselElem) this.carouselElem.classList.add("carousel--active");
		this.isOpen = true;
		this._addEvents();
		this._updateCarouselUrl(index);

		try {
			this.dialog.show();
		} catch (error) {
			console.error("Error showing dialog:", error);
		}
	}

	close() {
		document.documentElement.style.overflow = "auto";
		if (this.carouselElem) this.carouselElem.classList.remove("carousel--active");
		this.isOpen = false;
		this._updateCarouselUrl();
		this._removeEvents();
		if (this.dialog) this.dialog.hide();
	}

	private _changeCurrentSlide(oldIdx: number, newIdx: number) {
		if (!this.slidesUl) {
			this.close();
			return;
		}

		if (newIdx > this.slidesUl.childElementCount) {
			this.close();
			return;
		}

		this.slidesUl.children[newIdx]?.classList.add("carousel__slide--visible");

		if (newIdx !== oldIdx) {
			this.slidesUl.children[oldIdx]?.classList.remove("carousel__slide--visible");
		}

		this.currentIdx = newIdx;

		if (this.isOpen) {
			loadImages(this.currentIdx, this.imagesElements);
		}

		if (this.prevLink && this.slidesUl) {
			this.prevLink.href = getPrevLink(this.currentIdx, this.slidesUl.childElementCount);
		}

		if (this.nextLink && this.slidesUl) {
			this.nextLink.href = getNextLink(this.currentIdx, this.slidesUl.childElementCount);
		}

		if (this.circleNavigation) {
			const circles = this.circleNavigation.querySelectorAll(".carousel__circle-button");
			circles.forEach((circle, i) => {
				if (i === newIdx) {
					circle.classList.add("!bg-primary-600", "!w-5", "!h-5");
				} else {
					circle.classList.remove("!bg-primary-600", "!w-5", "!h-5");
				}
			});
		}
	}

	private _handleCircleClick(e: MouseEvent) {
		e.preventDefault();
		const target = e.target as HTMLElement;
		const circleButton = target.closest(".carousel__circle-button") as HTMLElement;

		if (circleButton) {
			const index = parseInt(circleButton.dataset.index || "0", 10);
			if (!isNaN(index)) {
				const oldIdx = this.currentIdx || 0;
				this._changeCurrentSlide(oldIdx, index);
				this._updateCarouselUrl(index);

				// Update active circle
				const circles = this.circleNavigation?.querySelectorAll(".carousel__circle");
				circles?.forEach((circle, i) => {
					if (i === index) {
						circle.classList.add("carousel__circle--active");
					} else {
						circle.classList.remove("carousel__circle--active");
					}
				});
			}
		}
	}

	private _addEvents() {
		this._keydownHandler = this._handleKeydown.bind(this);
		this._hoverPrevHandler = this._hoverPrev.bind(this);
		this._hoverNextHandler = this._hoverNext.bind(this);
		this._goToPrevHandler = this._handleGoToPrev.bind(this);
		this._goToNextHandler = this._handleGoToNext.bind(this);
		this._closeHandler = this._handleClose.bind(this);
		this._updateSlideHandler = this._handleUpdateSlide.bind(this);
		this._touchStartHandler = this._handleTouchStart.bind(this);
		this._touchMoveHandler = this._handleTouchMove.bind(this);
		this._touchEndHandler = this._handleTouchEnd.bind(this);

		if (this.dialog) this.dialog.on("hide", this._closeHandler);

		if (this.prevLink) {
			this.prevLink!.addEventListener("click", this._goToPrevHandler);
			this.prevLink!.addEventListener("mouserenter", this._hoverPrev);
		}
		if (this.nextLink) {
			this.nextLink!.addEventListener("click", this._goToNextHandler);
			this.nextLink!.addEventListener("mouserenter", this._hoverNext);
		}
		if (this.closeButton) this.closeButton!.addEventListener("click", this._closeHandler);

		if (this.carouselElem) {
			this.carouselElem!.addEventListener("touchstart", this._touchStartHandler, { passive: true });
			this.carouselElem!.addEventListener("touchmove", this._touchMoveHandler, { passive: true });
			this.carouselElem!.addEventListener("touchend", this._touchEndHandler);
		}

		// Circle Navigation
		this._circleClickHandler = this._handleCircleClick.bind(this);
		if (this.circleNavigation)
			this.circleNavigation?.addEventListener("click", this._circleClickHandler);

		document.addEventListener("keydown", this._keydownHandler);
	}

	private _removeEvents() {
		if (this.prevLink) {
			this.prevLink.removeEventListener("click", this._goToPrevHandler);
			this.prevLink.removeEventListener("mouserenter", this._hoverPrev);
		}

		if (this.nextLink) {
			this.nextLink.removeEventListener("click", this._goToNextHandler);
			this.nextLink.removeEventListener("mouserenter", this._hoverNext);
		}

		if (this.closeButton) {
			this.closeButton.removeEventListener("click", this._closeHandler);
		}

		if (this.circleNavigation) {
			this.circleNavigation.removeEventListener("click", this._circleClickHandler);
		}

		if (this.carouselElem) {
			this.carouselElem.removeEventListener("touchstart", this._touchStartHandler);
			this.carouselElem.removeEventListener("touchmove", this._touchMoveHandler);
			this.carouselElem.removeEventListener("touchend", this._touchEndHandler);
		}

		document.removeEventListener("keydown", this._keydownHandler);

		if (this.dialog) {
			this.dialog.off("hide", this._closeHandler);
		}
	}

	// Handles back/forward events
	private _handlePopstate(this: Carousel, e: PopStateEvent) {
		if (e.state?.imageIndex == null) {
			// Close carousel when going back/forward to an non-carousel url
			if (this.isOpen) {
				this.close();
			}
		} else {
			if (this.isOpen && this.currentIdx !== null) {
				this._changeCurrentSlide(this.currentIdx, e.state?.imageIndex);
			} else {
				this.open(e.state.imageIndex);
			}
		}
	}

	private _handleKeydown(this: Carousel, e: KeyboardEvent) {
		if (e.key == "ArrowLeft") {
			this._handleGoToPrev(e);
		}
		if (e.key == "ArrowRight") {
			this._handleGoToNext(e);
		}
		if (e.key == "Escape") {
			this._handleClose(e);
		}
	}

	private _hoverPrev(this: Carousel, e: MouseEvent) {
		if (this.currentIdx === null || !this.slidesUl || this.imagesElements.length === 0) return;
		const index = getPrevIndex(this.currentIdx, this.slidesUl.childElementCount);
		if (index >= 0 && index < this.imagesElements.length) {
			loadImage(this.imagesElements[index]);
		}
	}

	private _hoverNext(this: Carousel, e: MouseEvent) {
		if (this.currentIdx === null || !this.slidesUl || this.imagesElements.length === 0) return;
		const index = getNextIndex(this.currentIdx, this.slidesUl.childElementCount);
		if (index >= 0 && index < this.imagesElements.length) {
			loadImage(this.imagesElements[index]);
		}
	}

	private _handleGoToPrev(this: Carousel, e: MouseEvent | KeyboardEvent) {
		e.preventDefault();
		if (this.currentIdx === null || !this.slidesUl) return;
		const index = getPrevIndex(this.currentIdx, this.slidesUl.childElementCount);
		this._updateCarouselUrl(index);
	}

	private _handleGoToNext(this: Carousel, e: MouseEvent | KeyboardEvent) {
		e.preventDefault();
		if (this.currentIdx === null || !this.slidesUl) return;
		const index = getNextIndex(this.currentIdx, this.slidesUl.childElementCount);
		this._updateCarouselUrl(index);
	}

	private _handleClose(this: Carousel, e: MouseEvent | KeyboardEvent) {
		this.close();
	}

	private _handleUpdateSlide(this: Carousel, e: any) {
		const { currentIndex, isOpen } = this._getCarouselState();
		if (isOpen && this.currentIdx !== null) {
			this._changeCurrentSlide(this.currentIdx, currentIndex);
		}
	}

	private _handleTouchStart(e: TouchEvent) {
		this.touchStartX = e.changedTouches[0].screenX;
	}

	private _handleTouchMove(e: TouchEvent) {
		// Optional: Hier können Sie während des Wischens Animationen hinzufügen
	}

	private _handleTouchEnd(e: TouchEvent) {
		this.touchEndX = e.changedTouches[0].screenX;
		this._handleSwipe();
	}

	private _handleSwipe() {
		if (!this.slidesUl || this.currentIdx === null) return;

		const swipeThreshold = 50; // Mindestabstand für einen gültigen Swipe
		const swipeDistance = this.touchEndX - this.touchStartX;

		if (swipeDistance > swipeThreshold) {
			// Nach rechts gewischt - vorheriges Bild
			const prevIdx = getPrevIndex(this.currentIdx, this.slidesUl.childElementCount);
			this._updateCarouselUrl(prevIdx);
		} else if (swipeDistance < -swipeThreshold) {
			// Nach links gewischt - nächstes Bild
			const nextIdx = getNextIndex(this.currentIdx, this.slidesUl.childElementCount);
			this._updateCarouselUrl(nextIdx);
		}
	}

	private _getCarouselState() {
		const urlSearchParams = new URLSearchParams(window.location.search);
		const params = Object.fromEntries(urlSearchParams.entries());
		const currentIndex = Number(params.image ?? 0);
		const isOpen = Boolean(params.image);
		return { currentIndex, isOpen };
	}

	private _updateCarouselUrl(newIndex: number | undefined = undefined) {
		const url = new URL(window.location.href);
		if (newIndex == null) {
			url.searchParams.delete("image");
			if (history.state?.imageIndex == null) {
				// Avoids adding the same non-carousel url to history
				history.replaceState(null, "", url);
			} else {
				// Adds new history entry each time the carousel is open
				history.pushState(null, "", url);
			}
		} else {
			url.searchParams.set("image", String(newIndex));
			if (history.state?.imageIndex == null) {
				// Adds new history entry each time the carousel is open
				history.pushState({ imageIndex: newIndex }, "", url);
			} else {
				// Avoids adding each image change to history
				history.replaceState({ imageIndex: newIndex }, "", url);
			}

			// Only change slide if newIndex is valid
			if (this.currentIdx !== null) {
				this._changeCurrentSlide(this.currentIdx, newIndex);
			}
		}
	}
}
