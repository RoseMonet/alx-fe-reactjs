import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!title) newErrors.title = 'Recipe title is required.';
    if (!ingredients) newErrors.ingredients = 'Please list at least two ingredients.';
    if (!steps) newErrors.steps = 'Preparation steps are required.';
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Here you would typically handle form submission, such as sending data to a backend or updating state
      console.log({
        title,
        ingredients: ingredients.split('\n'), // Split ingredients into an array by line breaks
        steps: steps.split('\n'), // Split steps into an array by line breaks
      });
      // Reset form fields after submission
      setTitle('');
      setIngredients('');
      setSteps('');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
            Ingredients (separate each with a new line)
          </label>
          <textarea
            id="ingredients"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.ingredients && <p className="text-red-500 text-xs mt-1">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="steps">
            Preparation Steps (separate each with a new line)
          </label>
          <textarea
            id="steps"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 ${
              errors.steps ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.steps && <p className="text-red-500 text-xs mt-1">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;