
export const fetchSingleTodo = async (id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/todo/${id}`);
        if (!res.ok) {
          throw new Error(
            `API request to get single doc failed with status code ${res.status}`,
          );
        }
        const data = await res.json()
        return data
      } catch (error) {
        console.log(`Error while fetching single doc`, error);
      }

}