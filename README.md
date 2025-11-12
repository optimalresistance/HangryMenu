# HangryMenu
This website provides five weeks of dinner ideas, each scaled for three people. Every week includes two dessert recipes and a complete shopping list for all meals. I built it to help plan weekly menus, simplify grocery trips, and have something reliable to fall back on when I’m not feeling creative.

This is an **open-source meal planner** that provides five weeks of dinner ideas (for 3 servings each), dessert recipes, and organized shopping lists.  
It’s designed to help you plan meals, simplify shopping, and keep a go-to recipe book when you’re short on ideas.


## 📁 Project Structure

```

local-menu-site/
├── index.html              # Main website page
├── about.html              # About page
├── assets/
│   └── style.css           # Global styling
├── scripts/
│   └── main.js             # Dynamic week switching
├── dinner/                 # Weekly dinner recipes
├── dessert/                # Weekly dessert recipes
├── shopping/               # Weekly shopping lists
└── README.md               # You are here

````

---

## 🧑‍🍳 How to Add or Edit Recipes

1. Open the folder you want to modify (`dinner/`, `dessert/`, or `shopping/`).
2. Each recipe is its own `.html` file containing collapsible sections.
3. Update the text, ingredients, or steps — keep the same structure:
   ```html
   <h3 class="card__header">Recipe Name <span class="chev">▾</span></h3>
   <div class="card__body">
     <div class="section-title">Ingredients</div>
     <ul>…</ul>
     <div class="section-title">Recipe</div>
     <ol>…</ol>
     <span class="badge">Dinner</span><span class="badge">Serves 3</span>
   </div>
````

4. Add the new filename into the correct `recipes-weekX.json` manifest so it loads automatically.

---

## 👨‍👩‍👧‍👦 Share With Family or Friends

* **Option 1:** Publish using **GitHub Pages** (free) — anyone can visit your meal planner through a link like
  `https://yourname.github.io/local-menu-site/`.
* **Option 2:** Send the folder directly — others can open `index.html` locally.
* **Option 3:** Customize it — swap in your own recipes, color scheme, or layout and build your own online recipe book.

---

## 💡 Why I Built This

> I created this project to organize weekly meals, simplify grocery shopping, and have something reliable to fall back on when I’m not feeling creative.

---

## 📲 Follow the Creator

You can follow **Coach Omar** on Instagram for fitness and nutrition content:
👉 [@OptimalResistance](https://www.instagram.com/optimalresistance/)

---

### 🛠 Contributing

This is an open-source project — feel free to fork, remix, or improve it.
If you add new features (like nutrition tracking or search filters), share them back!

---

### 📜 License

This project is open-sourced under the **MIT License**, meaning you can freely use and modify it with credit.

```
