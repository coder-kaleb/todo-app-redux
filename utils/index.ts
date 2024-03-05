export const fetchSingleTodo = async (id: string) => {
  try {
    const res = await fetch(`https://sereneschedule.vercel.app/api/todo/${id}`);
    if (!res.ok) {
      throw new Error(
        `API request to get single doc failed with status code ${res.status}`,
      );
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`Error while fetching single doc`, error);
  }
};
export const deleteTodo = async (id: string) => {
  try {
    await fetch(`https://sereneschedule.vercel.app/api/todo/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(`Error while deleting todo`, error);
  }
};
