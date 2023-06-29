export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "f6a407913bmsh23078f2edcc5c1bp1eb569jsn44003914d27b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
