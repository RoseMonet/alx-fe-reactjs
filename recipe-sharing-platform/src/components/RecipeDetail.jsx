import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the recipe data from data.json
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          navigate('/'); // Redirect to Home Page if recipe not found
        }
      })
      .catch((error) => console.error('Error fetching recipe details:', error));
  }, [id, navigate]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-4" />
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Cooking Instructions:</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
        </ol>
      </div>
      <button
        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
};

export default RecipeDetail;