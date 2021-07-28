

var mainPage = document.getElementById('container');

var lunchItem = [
   "FRESH GNOOCI: Agostino brand fresh gnocchi pasta made from all natural ingredients", 
   "GREEK CHICKEN WRAP: Lettuce, tomato, onion, feta cheese, kalamata olives, pepperoncini & Italian vinaigrette",
   "MEAT RAVIOLI: Jumbo meat ravioli baked in meat sauce",
   "BUFFALO CHICKEN WRAP: Lightly fried chicken hand dipped in buffalo sauce with lettuce, tomato, onion & bleu cheese on the side",
   "BAKED POTATO: Served with sour cream and butter",
   "FETTUCCINE ALFREDO: Fresh cream, butter, and eggs blended with Parmigiano and Romano cheeses",
   "SHRIMP MARINARA: Jumbo Caribbean shrimp prepared in homemade marinara sauce and served over a bed of imported linguine",
   "SAUSAGE, MEATBALLS & PEPPERS: Italian sausage and meatballs with sautéed peppers, served with marinara sauce with choice of potato or spaghetti with tomato sauce",
   "LITTLENECK CLAMS: Sautéed with marinara or garlic and olive oil served over linguine",
   "CHICKEN FRANCESE: Plump chicken breasts dipped in seasoned egg batter and sautéed, served with a sauce of dry white wine, butter and lemon" 
 ];
   
function lunchGenerator() {
   lunchItem.sort(function(a, b){return 0.5 - Math.random()});
   var lunchItemParagraph = document.createElement('p');
   mainPage.appendChild(lunchItemParagraph);
   var lunchItemText = document.createTextNode(lunchItem[0]);
   lunchItemParagraph.appendChild(lunchItemText);
};

