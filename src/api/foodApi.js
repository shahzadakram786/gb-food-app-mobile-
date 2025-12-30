const BASE_URL = "http://10.0.2.2:5000/api/foods";
// const BASE_URL = "http://localhost:5000/api/foods"; // Android emulator

// Android emulator
// Use "http://localhost:5000/api/foods" for web or Expo Go on same network

export const getFoods = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch foods");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
