# Local Menu Site

## Run a local server
Use Python (already on macOS/Linux, easy on Windows):
```bash
# In this folder:
python3 -m http.server 8000
# then visit http://localhost:8000
```
On Windows, you can also try:
```powershell
py -m http.server 8000
```

## Add a new Dinner recipe
1) Create a new file in `./dinner/`, e.g. `butter-chicken.html` using the same structure:
```html
<h3 class="card__header">Butter Chicken <span class="chev">▾</span></h3>
<div class="card__body">
  <div class="section-title">Ingredients</div>
  <ul>
    <li>...</li>
  </ul>
  <div class="section-title">Recipe</div>
  <ol>
    <li>...</li>
  </ol>
  <span class="badge">Spicy</span>
</div>
```
2) Edit `./dinner/recipes.json` and add your filename to the list:
```json
{
  "files": [
    "spaghetti-aglio-olio.html",
    "sheet-pan-lemon-chicken.html",
    "butter-chicken.html"
  ]
}
```
3) Refresh the browser. Done.

## Add a new Dessert recipe
Do the same steps but in the `./dessert/` folder and its `recipes.json`.
