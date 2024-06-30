using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Models;
using api.Data;

namespace api.Controllers
{
    [Route("api/Recipes")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly RecipeContext _context;

        public RecipesController(RecipeContext context)
        {
            _context = context;
        }

        // GET: api/Recipes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetRecipes()
        {
            return await _context.Recipes.ToListAsync();
        }

        [HttpGet("favorite")]
        public async Task<ActionResult<IEnumerable<Recipe>>> GetFavoriteRecipes()
        {
            return await _context.Recipes.Where(x => x.isFavored == true).ToListAsync();
        }

        // GET: api/Recipes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Recipe>> GetRecipe(Guid id)
        {
            var recipe = await _context.Recipes.FindAsync(id);

            if (recipe == null)
            {
                return NotFound();
            }

            return recipe;
        }

        // GET: api/Recipes/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Recipe>> ToggleFavoriteRecipe(Guid id)
        {
            var recipe = await _context.Recipes.FindAsync(id);

            if (recipe == null)
            {
                return NotFound();
            }

            recipe.isFavored = !recipe.isFavored;

            _context.Entry(recipe).State = EntityState.Modified;

            try
            {
                // asta salveaza modificarile in data de baze
                await _context.SaveChangesAsync();

                return recipe;
            }
            catch (DbUpdateConcurrencyException)
            {
                if (recipe == null)
                {
                    return NotFound();
                }

                throw;
            }
        }

        // POST: api/Recipes
        [HttpPost]
        public async Task<ActionResult<Recipe>> PostRecipe([FromBody] RecipePostDTO recipe)
        {
            var localGuid = new Guid();
            var newRecipe = new Recipe
            {
                Id = localGuid,
                Name = recipe.Name,
                Type = recipe.Type,
                Protein = recipe.Protein,
                Calories = recipe.Calories,
                Fat = recipe.Fat,
                Carbs = recipe.Carbs,
                Grams = recipe.Grams,
                isFavored = false
            };
            _context.Recipes.Add(newRecipe);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetRecipe), new { id = localGuid }, recipe);
        }

        // DELETE: api/Recipes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipe(Guid id)
        {
            var recipe = await _context.Recipes.FindAsync(id);
            if (recipe == null)
            {
                return NotFound();
            }

            _context.Recipes.Remove(recipe);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}