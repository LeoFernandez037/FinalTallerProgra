export const fetchExercises = async () => {
  const response = await fetch("");
  const data = await response.json();
  return data;
};
