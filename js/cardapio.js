document.addEventListener("DOMContentLoaded", () => {
  const productsData = [
    {
      id: "frango-grelhado",
      name: "Frango grelhado + arroz integral + brócolis",
      shortName: "Frango grelhado",
      subtitle: "Arroz integral e brócolis",
      price: 21.50,
      priceFormatted: "R$ 21,50",
      category: "Marmita",
      filterCategory: "marmitas",
      description: "Uma combinação clássica e nutritiva, com frango grelhado, arroz integral e brócolis frescos. Ideal para quem busca uma refeição leve, equilibrada e cheia de sabor.",
      image: "../assets/img/Frango grelahado.jpeg",
      ingredients: "Frango grelhado, arroz integral e brócolis.",
      portion: "Porção: 350g (aprox.)",
      allergens: "Alergênicos: Contém glúten.",
      nutrition: [
        { label: "Valor energético", value: "335 kcal" },
        { label: "Carboidratos", value: "45 g" },
        { label: "Proteínas", value: "32 g" },
        { label: "Gorduras totais", value: "10 g" },
        { label: "Gorduras saturadas", value: "3 g" },
        { label: "Fibras alimentares", value: "6 g" },
        { label: "Sódio", value: "420 mg" }
      ]
    },
    {
      id: "peixe-grelhado",
      name: "Peixe grelhado + purê + legumes",
      shortName: "Peixe grelhado",
      subtitle: "Purê e legumes",
      price: 25.90,
      priceFormatted: "R$ 25,90",
      category: "Marmita",
      filterCategory: "marmitas",
      description: "Filé de peixe leve e macio, acompanhado de um purê cremoso reconfortante e uma seleção de legumes frescos da estação.",
      image: "../assets/img/Peixe grelhado.jpeg",
      ingredients: "Filé de peixe, purê de batata e legumes variados.",
      portion: "Porção: 330g (aprox.)",
      allergens: "Alergênicos: Contém derivados de leite e peixe.",
      nutrition: [
        { label: "Valor energético", value: "280 kcal" },
        { label: "Carboidratos", value: "38 g" },
        { label: "Proteínas", value: "28 g" },
        { label: "Gorduras totais", value: "8 g" },
        { label: "Gorduras saturadas", value: "2.5 g" },
        { label: "Fibras alimentares", value: "5 g" },
        { label: "Sódio", value: "390 mg" }
      ]
    },
    {
      id: "frango-batata-doce",
      name: "Frango + batata-doce + salada",
      shortName: "Frango + batata-doce",
      subtitle: "Batata-doce e salada",
      price: 22.90,
      priceFormatted: "R$ 22,90",
      category: "Marmita",
      filterCategory: "marmitas",
      description: "A clássica combinação fitness com frango magro grelhado, batata-doce energética e uma salada verde fresca e crocante.",
      image: "../assets/img/fragno com batata doce.jpeg",
      ingredients: "Frango grelhado, batata-doce e mix de folhas verdes.",
      portion: "Porção: 340g (aprox.)",
      allergens: "Alergênicos: Não contém glúten.",
      nutrition: [
        { label: "Valor energético", value: "290 kcal" },
        { label: "Carboidratos", value: "40 g" },
        { label: "Proteínas", value: "30 g" },
        { label: "Gorduras totais", value: "7 g" },
        { label: "Gorduras saturadas", value: "2 g" },
        { label: "Fibras alimentares", value: "6 g" },
        { label: "Sódio", value: "350 mg" }
      ]
    },
    {
      id: "marmita-vegetariana",
      name: "Marmita vegetariana do dia",
      shortName: "Marmita vegetariana",
      subtitle: "Proteína de soja, arroz integral e rúcula",
      price: 21.90,
      priceFormatted: "R$ 21,90",
      category: "Vegetariana",
      filterCategory: "vegetarianas",
      description: "Uma deliciosa marmita para quem prefere evitar sofrimento animal composta por proteína de soja ao molho vermelho, arroz integral e salada de rúcula.",
      image: "../assets/img/vgetariana.jpeg",
      ingredients: "Proteína de soja texturizada ao molho, arroz integral e rúcula fresca.",
      portion: "Porção: 320g (aprox.)",
      allergens: "Alergênicos: Contém derivados de soja.",
      nutrition: [
        { label: "Valor energético", value: "320 kcal" },
        { label: "Carboidratos", value: "48 g" },
        { label: "Proteínas", value: "22 g" },
        { label: "Gorduras totais", value: "6 g" },
        { label: "Gorduras saturadas", value: "1.5 g" },
        { label: "Fibras alimentares", value: "7 g" },
        { label: "Sódio", value: "410 mg" }
      ]
    },
    {
      id: "cheesecake-amora",
      name: "Cheesecake de amora",
      shortName: "Cheesecake de amora",
      subtitle: "Sobremesa leve e saborosa",
      price: 21.50,
      priceFormatted: "R$ 21,50",
      category: "Sobremesa",
      filterCategory: "sobremesas",
      description: "Sobremesa cremosa e equilibrada, combinando uma base delicada com cobertura artesanal de amoras frescas.",
      image: "../assets/img/chessecake.jpeg",
      ingredients: "Base de biscoito integral, creme FitLive e amoras frescas.",
      portion: "Porção: 120g (aprox.)",
      allergens: "Alergênicos: Contém lactose e glúten.",
      nutrition: [
        { label: "Valor energético", value: "210 kcal" },
        { label: "Carboidratos", value: "24 g" },
        { label: "Proteínas", value: "8 g" },
        { label: "Gorduras totais", value: "9 g" },
        { label: "Gorduras saturadas", value: "4 g" },
        { label: "Fibras alimentares", value: "3 g" },
        { label: "Sódio", value: "150 mg" }
      ]
    },
    {
      id: "brownie",
      name: "Brownie",
      shortName: "Brownie",
      subtitle: "O clássico que todo mundo ama",
      price: 21.50,
      priceFormatted: "R$ 21,50",
      category: "Sobremesa",
      filterCategory: "sobremesas",
      description: "Brownie artesanal com textura rica e macia, feito para matar aquela vontade de doce sem pesar na consciência.",
      image: "../assets/img/brownie.jpeg",
      ingredients: "Cacau puro, ovos, açúcar de coco e massa integral.",
      portion: "Porção: 100g (aprox.)",
      allergens: "Alergênicos: Pode conter traços de oleaginosas.",
      nutrition: [
        { label: "Valor energético", value: "240 kcal" },
        { label: "Carboidratos", value: "28 g" },
        { label: "Proteínas", value: "6 g" },
        { label: "Gorduras totais", value: "11 g" },
        { label: "Gorduras saturadas", value: "3.5 g" },
        { label: "Fibras alimentares", value: "4 g" },
        { label: "Sódio", value: "110 mg" }
      ]
    }
  ];

  const filterButtons = document.querySelectorAll("header nav button");
  const productArticles = document.querySelectorAll("main > section:nth-of-type(1) article");

  filterButtons.forEach((btn, index) => {
    btn.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.setAttribute("aria-pressed", "false"));
      btn.setAttribute("aria-pressed", "true");

      const filterText = btn.textContent.trim().toLowerCase();

      productArticles.forEach((article, i) => {
        const product = productsData[i];
        if (!product) return;

        let show = false;
        if (filterText === "todas") {
          show = true;
        } else if (filterText === "marmitas" && product.filterCategory === "marmitas") {
          show = true;
        } else if (filterText === "vegetarianas" && product.filterCategory === "vegetarianas") {
          show = true;
        } else if (filterText === "sobremesas" && product.filterCategory === "sobremesas") {
          show = true;
        }

        article.style.display = show ? "flex" : "none";
      });
    });
  });

  const detailsSection = document.querySelector('section[aria-label="Detalhes do produto selecionado"]');
  const closeDetailsBtn = detailsSection ? detailsSection.querySelector('button[aria-label="Fechar detalhes"]') : null;
  const detailImg = detailsSection ? detailsSection.querySelector('figure img') : null;
  const detailH2 = detailsSection ? detailsSection.querySelector('div > h2') : null;
  const detailSubP = detailsSection ? detailsSection.querySelector('div > p') : null;
  const detailPriceP = detailsSection ? detailsSection.querySelector('div > p:nth-of-type(2)') : null;
  const detailCategorySpan = detailsSection ? detailsSection.querySelector('div > span') : null;
  const detailDescP = detailsSection ? detailsSection.querySelector('div > p:nth-of-type(3)') : null;
  const detailPortionP = detailsSection ? detailsSection.querySelector('div > p:nth-of-type(4)') : null;
  const detailAllergensP = detailsSection ? detailsSection.querySelector('div > p:nth-of-type(5)') : null;
  const detailTableBody = detailsSection ? detailsSection.querySelector('table tbody') : null;
  const detailIngredientsP = detailsSection ? detailsSection.querySelector('section:nth-of-type(2) p, div:last-child p') : null;
  const addToCartBtn = detailsSection ? detailsSection.querySelector('div > button:last-of-type') : null;

  function updateDetailsPanel(product) {
    if (!detailsSection || !product) return;

    if (detailImg) {
      detailImg.src = product.image;
      detailImg.alt = product.name;
    }
    if (detailH2) detailH2.textContent = product.shortName;
    if (detailSubP) detailSubP.textContent = product.subtitle;
    if (detailPriceP) detailPriceP.textContent = product.priceFormatted;
    if (detailCategorySpan) detailCategorySpan.textContent = product.category;
    if (detailDescP) detailDescP.textContent = product.description;
    if (detailPortionP) {
      detailPortionP.innerHTML = `<i class="fa-regular fa-clock" aria-hidden="true"></i> ${product.portion}`;
    }
    if (detailAllergensP) {
      detailAllergensP.innerHTML = `<i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> ${product.allergens}`;
    }

    if (detailTableBody && product.nutrition) {
      detailTableBody.innerHTML = "";
      product.nutrition.forEach(nutr => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = nutr.label;
        const td = document.createElement("td");
        td.textContent = nutr.value;
        tr.appendChild(th);
        tr.appendChild(td);
        detailTableBody.appendChild(tr);
      });
    }

    if (detailIngredientsP) {
      detailIngredientsP.textContent = product.ingredients;
    }
  }

  productArticles.forEach((article, index) => {
    const detailBtn = article.querySelector("button");
    const product = productsData[index];

    if (detailBtn && product) {
      detailBtn.addEventListener("click", () => {
        updateDetailsPanel(product);
        detailsSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  });

  if (closeDetailsBtn && detailsSection) {
    closeDetailsBtn.addEventListener("click", () => {
      detailsSection.style.display = "none";
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && detailsSection) {
      detailsSection.style.display = "none";
    }
  });

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      if (!detailH2) return;
      const currentProductName = detailH2.textContent;
      const product = productsData.find(p => p.shortName === currentProductName) || productsData[0];

      let cart = [];
      try {
        const savedCart = localStorage.getItem("fitlive_cart");
        if (savedCart) {
          cart = JSON.parse(savedCart);
        }
      } catch (err) {
      }

      const existingIndex = cart.findIndex(item => item.id === product.id);
      if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        });
      }

      try {
        localStorage.setItem("fitlive_cart", JSON.stringify(cart));
      } catch (err) {
      }

      const originalText = addToCartBtn.innerHTML;
      addToCartBtn.innerHTML = `<i class="fa-solid fa-check" aria-hidden="true"></i> Adicionado com sucesso!`;
      setTimeout(() => {
        addToCartBtn.innerHTML = originalText;
      }, 2000);
    });
  }
});