export function fetchImage(inputValue) {
  const APIKEY = '43173042-04092544e8d4f8f0c3df25e51';
  const searchParams = new URLSearchParams({
    orientation: 'horizontal',
    image_type: 'photo',
    safesearch: true,
    per_page: 15,
  });

  return fetch(
    `https://pixabay.com/api/?key=${APIKEY}&q=${inputValue}&${searchParams}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
