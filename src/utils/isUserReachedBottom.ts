export const isUserReachedBottom = () => {
  const scrollTop =
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop;
  const scrollHeight =
    (document.documentElement && document.documentElement.scrollHeight) ||
    document.body.scrollHeight;
  const clientHeight =
    document.documentElement.clientHeight || window.innerHeight;
  const reachedBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

  return reachedBottom;
};
