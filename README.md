Recipes App

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/bogdanilchenko1987/recipes-app.git
```

2. Change directory

```bash
cd recipes-app
```

3. Install dependencies

```bash
npm install
```

4. Create .env.local file

In the root of the project, create a file .env.local and add your Spoonacular API key:

SPOONACULAR_API_KEY=your_api_key_here

NEXT_PUBLIC_SPOONACULAR_API_KEY=your_api_key_here

5. Run the development server

```bash
npm run dev
```

6. Open in browser

Open http://localhost:3000 with your browser to see the result.

---

## About the Project

This application allows users to search for recipes by name, cuisine, or preparation time, browse a list of matching recipes, and view detailed information about each recipe including ingredients.
The app is built with Next.js, styled with Tailwind CSS, and fetches data from the Spoonacular API.

1. Features

Search recipes using multiple filters

Caching of search results for faster performance

Dynamic recipe detail pages with ingredients, cooking time, and servings

Responsive design for mobile and desktop devices

Uses React Suspense and Skeleton components for better user experience

2. Code Quality
   Configured with ESLint and Prettier for consistent and clean code

## Notes

An API key from Spoonacular is required to make requests — you can get one at:
https://spoonacular.com/food-api

Don’t forget to add your .env.local file to .gitignore — it’s already set in this project

## Contact

If you have any questions or suggestions — feel free to reach out to me!
