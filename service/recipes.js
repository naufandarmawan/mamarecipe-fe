"use server"

export const getRecipeDetails = async (id) => {

  try {

    const response = await fetch(`/v1/recipes/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      throw new Error('Get recipe details failed');
    }

    const res = await response.json();

    return res

  } catch (err) {

    return Promise.reject(err.message);

    // setError(err.message);
    // toast.error(error)

  }
}