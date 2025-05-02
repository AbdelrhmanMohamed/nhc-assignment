export const createQueryString = (
  searchParams: URLSearchParams,
  name: string,
  value: string
) => {
  const params = new URLSearchParams(searchParams.toString());
  if (value) {
    params.set(name, value);
  } else {
    params.delete(name);
  }
  return params.toString();
};
