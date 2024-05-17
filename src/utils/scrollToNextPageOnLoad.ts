export const scrollToNextPageOnLoad = (
  page: number,
  elementRef: HTMLUListElement
) => {
  if (page === 1) return;

  const { height } =
    elementRef.firstElementChild?.getBoundingClientRect() as DOMRect;

  window.scrollBy({
    top: height * 2,
    behavior: "smooth",
  });
};
