using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Models;

namespace api
{
    public class Seed
    {
        public static async Task SeedData(RecipeContext context)
        {

            if (context.Recipes.Any())
                return;

            var recipes = new List<Recipe>
            {
                new Recipe
                {
                    Name = "Grilled Chicken Breast",
                    Type = "Cut",
                    Protein = 25,
                    Calories = 230,
                    Fat = 6,
                    Carbs = 0,
                    Grams = 100,
                    isFavored = false
                },
                new Recipe
                {
                    Name = "Quinoa Salad",
                    Type = "Cut",
                    Protein = 8,
                    Calories = 220,
                    Fat = 8,
                    Carbs = 30,
                    Grams = 185,
                    isFavored = false
                },
                new Recipe
                {
                    Name = "Pizza Margherita",
                    Type = "Bulk",
                    Protein = 50,
                    Calories = 800,
                    Fat = 35,
                    Carbs = 85,
                    Grams = 400,
                    isFavored = false
                },
                new Recipe
                {
                    Name = "Spaghetti Carbonara",
                    Type = "Bulk",
                    Protein = 40,
                    Calories = 750,
                    Fat = 30,
                    Carbs = 100,
                    Grams = 350,
                    isFavored = false
                },
                new Recipe
                {
                    Name = "Pesto Pasta with Chicken",
                    Type = "Bulk",
                    Protein = 55,
                    Calories = 765,
                    Fat = 30,
                    Carbs = 95,
                    Grams = 550,
                    isFavored = false
                },
                new Recipe
                {
                    Name = "Lasagna",
                    Type = "Cut",
                    Protein = 40,
                    Calories = 300,
                    Fat = 25,
                    Carbs = 55,
                    Grams = 400,
                    isFavored = false
                },
                new Recipe
                {
                    Name = "Chicken Breast with Rice",
                    Type = "Cut",
                    Protein = 30,
                    Calories = 250,
                    Fat = 15,
                    Carbs = 60,
                    Grams = 300,
                    isFavored = false
                },
                new Recipe
                {
                    Name = "Cheeseburger Homemade",
                    Type = "Bulk",
                    Protein = 50,
                    Calories = 725,
                    Fat = 35,
                    Carbs = 80,
                    Grams = 500,
                    isFavored = false
                },
                new Recipe
                {
                    Name = "Cordon Bleu with Fries",
                    Type = "Bulk",
                    Protein = 60,
                    Calories = 825,
                    Fat = 40,
                    Carbs = 80,
                    Grams = 600,
                    isFavored = false
                },
                new Recipe
                {
                    Name = "Bolognese Pasta",
                    Type = "Bulk",
                    Protein = 55,
                    Calories = 1000,
                    Fat = 30,
                    Carbs = 90,
                    Grams = 550,
                    isFavored = false
                },
            };

            await context.Recipes.AddRangeAsync(recipes);
            await context.SaveChangesAsync();
        }
    }
}