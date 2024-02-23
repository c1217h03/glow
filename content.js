function compare(ingredient) {
  const first_letter = ingredient.charAt(0).toLowerCase();

  switch (first_letter) {
    case "a":
      return compare_A(ingredient.toLowerCase());

    case "b":
      return compare_B(ingredient.toLowerCase());

    case "c":
      return compare_C(ingredient.toLowerCase());

    case "d":
      return compare_D(ingredient.toLowerCase());

    case "e":
      return compare_E(ingredient.toLowerCase());

    case "g":
      return compare_G(ingredient.toLowerCase());

    case "h":
      return compare_H(ingredient.toLowerCase());

    case "i":
      return compare_I(ingredient.toLowerCase());

    case "k":
      return compare_K(ingredient.toLowerCase());

    case "l":
      return compare_L(ingredient.toLowerCase());

    case "m":
      return compare_M(ingredient.toLowerCase());

    case "o":
      return compare_O(ingredient.toLowerCase());

    case "p":
      return compare_P(ingredient.toLowerCase());

    case "r":
      return compare_R(ingredient.toLowerCase());

    case "s":
      return compare_S(ingredient.toLowerCase());

    case "w":
      return compare_W(ingredient.toLowerCase());

    case "x":
      return compare_X(ingredient.toLowerCase());
  }
}

function compare_A(ingredient) {
  const ingredient_A = [
    "Acetylated Lanolin",
    "Acetylated Lanolin Alcohol",
    "Algae Extract",
    "Algin",
  ];
  for (let i = 0; i < ingredient_A.length; i++) {
    if (ingredient == ingredient_A[i].toLowerCase()) {
      return true;
    }
  }

  return false;
}

function compare_B(ingredient) {
  return ingredient == "Butyl Stearate".toLowerCase();
}

function compare_C(ingredient) {
  const ingredient_C = [
    "Carrageenan",
    "Cetyl Acetate",
    "Cetearyl Alcohol + Ceteareth 20",
    "Chondrus Crispus (aka Irish Moss or Carageenan Moss)",
    "Chlorella",
    "Coal Tar",
    "Cocoa Butter",
    "Coconut Alkanes",
    "Coconut Butter",
    "Coconut Oil",
    "Colloidal Sulfur",
    "Cotton Awws Oil",
    "Cotton Seed Oil",
  ];
  for (let i = 0; i < ingredient_C.length; i++) {
    let ingredientC = ingredient_C[i].toLowerCase();
    if (ingredient == ingredientC) {
      return true;
    }
  }

  return false;
}

function compare_D(ingredient) {
  const ingredient_D = [
    "D & C Red # 17",
    "D & C Red # 21",
    "D & C Red # 3",
    "D & C Red # 30",
    "D & C Red # 36",
    "Decyl Oleate",
    "Dioctyl Succinate",
    "Disodium Monooleamido PEG 2- Sulfosuccinate",
  ];
  for (let i = 0; i < ingredient_D.length; i++) {
    let ingredientD = ingredient_D[i].toLowerCase();
    if (ingredient == ingredientD) {
      return true;
    }
  }

  return false;
}

function compare_E(ingredient) {
  return (
    ingredient == "Ethoxylated Lanolin" || ingredient == "Ethylhexyl Palmitate"
  );
}

function compare_G(ingredient) {
  return (
    ingredient == "Glyceryl Stearate SE".toLowerCase() ||
    ingredient == "Glyceryl-3 Diisostearate".toLowerCase()
  );
}

function compare_H(ingredient) {
  return (
    ingredient == "Hexadecyl Alcohol".toLowerCase() ||
    ingredient == "Hydrogenated Vegetable Oil".toLowerCase()
  );
}

function compare_I(ingredient) {
  const ingredient_I = [
    "Isocetyl Alcohol",
    "Isocetyl Stearate",
    "Isodecyl Oleate",
    "Isopropyl Isostearate",
    "Isopropyl Linolate",
    "Isopropyl Linoleate",
    "Isopropyl Myristate",
    "Isopropyl Palmitate",
    "Isostearyl Isostearate",
    "Isostearyl Neopentanoate",
  ];
  for (let i = 0; i < ingredient_I.length; i++) {
    let ingredientI = ingredient_I[i].toLowerCase();
    if (ingredient == ingredientI) {
      return true;
    }
  }

  return false;
}

function compare_K(ingredient) {
  return ingredient == "Kelp".toLowerCase();
}

function compare_L(ingredient) {
  const ingredient_L = [
    "Laminaria Digitata Extract",
    "Laminaria Saccharina Extract (Laminaria Saccharine)",
    "Laminaria Saccharine",
    "Laureth-23",
    "Laureth-4",
    "Lauric Acid",
    "Lanolin",
    "Lanolin Acid",
  ];
  for (let i = 0; i < ingredient_L.length; i++) {
    let ingredientL = ingredient_L[i].toLowerCase();
    if (ingredient == ingredientL) {
      return true;
    }
  }

  return false;
}

function compare_M(ingredient) {
  const ingredient_M = [
    "Mink Oil",
    "Myristic Acid",
    "Myristyl Lactate",
    "Myristyl Myristate",
  ];
  for (let i = 0; i < ingredient_M.length; i++) {
    let ingredientM = ingredient_M[i].toLowerCase();
    if (ingredient == ingredientM) {
      return true;
    }
  }

  return false;
}

function compare_O(ingredient) {
  const ingredient_O = [
    "Octyl Palmitate",
    "Octyl Stearate",
    "Oleth-3",
    "Oleyl Alcohol",
  ];
  for (let i = 0; i < ingredient_O.length; i++) {
    let ingredientO = ingredient_O[i].toLowerCase();
    if (ingredient == ingredientO) {
      return true;
    }
  }

  return false;
}

function compare_P(ingredient) {
  const ingredient_P = [
    "PEG 16 Lanolin",
    "PEG 200 Dilaurate",
    "PEG 8 Stearate",
    "PG Monostearate",
    "PPG 2 Myristyl Propionate",
    "Plankton",
    "Polyglyceryl-3 Diisostearate",
    "Potassium Chloride",
    "Propylene Glycol Monostearate",
    "Petroleum Jelly",
  ];
  for (let i = 0; i < ingredient_P.length; i++) {
    let ingredientP = ingredient_P[i].toLowerCase();
    if (ingredient == ingredientP) {
      return true;
    }
  }

  return false;
}

function compare_R(ingredient) {
  return ingredient == "Red Algae".toLowerCase();
}

function compare_S(ingredient) {
  const ingredient_S = [
    "Seaweed",
    "Shark Liver Oil (Squalene)",
    "Squalene",
    "Shea Butter",
    "Sodium Laureth Sulfate",
    "Sodium Lauryl Sulfate",
    "Solulan 16",
    "Sorbitan Oleate",
    "Soybean Oil",
    "Spirulina",
    "Steareth 10",
    "Stearic Acid Tea",
    "Stearyl Heptanoate",
  ];
  for (let i = 0; i < ingredient_S.length; i++) {
    let ingredientS = ingredient_S[i].toLowerCase();
    if (ingredient == ingredientS) {
      return true;
    }
  }

  return false;
}

function compare_W(ingredient) {
  return (
    ingredient == "Wheat Germ Glyceride".toLowerCase() ||
    ingredient == "Wheat Germ Oil".toLowerCase()
  );
}

function compare_X(ingredient) {
  return ingredient == "Xylene".toLowerCase();
}

function start() {
  console.log("Starting Content Script");
  const ingredients = document.getElementById("ingredients");
  const productNameElement = document.querySelector('[data-at="product_name"]');
  const product_name = productNameElement.textContent;

  if (ingredients) {
    const text = ingredients.innerText;
    const ingredients_array = text.split(/\s*,\s*/).filter(Boolean);
    console.log("There is ingredients");
    let there_is_a_match = false;

    for (let i = 0; i < ingredients_array.length; i++) {
      console.log(ingredients_array[i]);
      there_is_a_match = compare(ingredients_array[i]);

      if (there_is_a_match) {
        chrome.runtime.sendMessage({
          message: "pore clogging ingredient found",
          productName: product_name,
        });
        // console.log("There is a pore clogging ingredient");
        break;
      } else {
        chrome.runtime.sendMessage({
          message: "clean",
          productName: product_name,
        });
      }
    }
  } else {
    console.log("No ingredients section");
  }
}

start();
