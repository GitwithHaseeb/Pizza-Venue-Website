document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelector(".nav-links");
  const toggleBtn = document.querySelector(".menu-toggle");
  const backToTopBtn = document.getElementById("backToTop");
  const orderButtons = document.querySelectorAll(".order-btn");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const filterItems = document.querySelectorAll(".filter-item");
  const navAnchors = document.querySelectorAll(".nav-link");
  const contactForm = document.getElementById("contactForm");
  const menuCards = document.querySelectorAll(".menu-card");

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  navAnchors.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks) navLinks.classList.remove("open");
    });
  });

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navAnchors.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    if (href === currentPage || (currentPage === "branches.html" && href === "#contact")) {
      link.classList.add("active");
    } else if (currentPage === "index.html" && href === "index.html") {
      link.classList.add("active");
    } else if (currentPage === "menu.html" && href === "menu.html") {
      link.classList.add("active");
    } else if (currentPage === "branches.html" && (href === "branches.html" || href.includes("#contact"))) {
      link.classList.add("active");
    }
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      filterItems.forEach((item) => {
        const category = item.dataset.category;
        if (filter === "all" || filter === category) {
          item.classList.remove("is-hidden");
        } else {
          item.classList.add("is-hidden");
        }
      });
    });
  });

  orderButtons.forEach((button) => {
    button.addEventListener("click", () => {
      alert("Call 03 000 111 831 to order");
    });
  });

  window.addEventListener("scroll", () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been sent. We will contact you soon.");
      contactForm.reset();
    });
  }

  const localImages = {
    steak: "images/steak-real.png",
    burger: "images/burger.svg",
    pasta: "images/pasta.svg",
    broast: "images/broast.svg",
    wings: "images/wings.svg",
    wrap: "images/wrap.svg",
    pizza: "images/pizza.svg",
    molten: "images/molten-double-lava.png",
    cheesyPasta: "images/cheesy-penne-pasta.png",
    creamyMushroomSteak: "images/creamy-mushroom-steak.png",
    periPeriSteak: "images/peri-peri-chicken-steak.png",
    jalapenoSteak: "images/jalapeno-chicken-steak.png",
    dipsQuarter: "images/dips-quarter.png",
    broastFull: "images/broast-full.png",
    superValue: "images/broast-super-value.png",
    grilledChickenBurger: "images/grilled-chicken-burger.png",
    venueSpecialBurger: "images/venue-special-grilled-burger.png",
    butterMilkBurger: "images/butter-milk-chicken-burger.png",
    chipotleBurger: "images/chipotle-grilled-chicken-burger.png",
    mexicanBurger: "images/mexican-grilled-burger.png",
    venueSmashBurger: "images/venue-smash-burger.png",
    mushroomMeatBurger: "images/mushroom-meat-burger.png",
    lagancePasta: "images/lagance-pasta.png",
    behariPasta: "images/behari-pasta.png",
    sweetenTouchSub: "images/sweeten-touch-sub.png",
    venueSpecialGrilledPanini: "images/venue-special-grilled-panini.png",
    classicClubSandwich: "images/classic-club-sandwich.png",
    periPeriGrilledPanini: "images/peri-peri-grilled-panini.png",
    venueSpecialBurrito: "images/venue-special-burrito.png",
    venueCrispyChickenBurrito: "images/venue-crispy-chicken-burrito.png",
    turkishDonnoWrap: "images/turkish-donno-wrap.png",
    dynamiteChicken: "images/dynamite-chicken.png",
    blazonSalameChicken: "images/blazon-salame-chicken.png",
    rackThroatChicken: "images/rack-throat-chicken.png",
    blindWings10pcs: "images/blind-wings-10-pcs.png",
    tacos2pcs: "images/tacos-2pcs.png",
    periPeriWings10pcs: "images/peri-peri-wings-10-pcs.png",
    deal1: "images/deal-1.png",
    deal2: "images/deal-2.png",
    deal3: "images/deal-3.png",
    deal4: "images/deal-4.png",
    deal5: "images/deal-5.png",
    deal6: "images/deal-6.png",
    deal7: "images/deal-7.png",
    deal8: "images/deal-8.png",
    deal9: "images/deal-9.png",
    deal10: "images/deal-10.png"
  };

  const keywordFromName = (name, category) => {
    const n = name.toLowerCase();
    if (n.includes("steak")) return "steak";
    if (n.includes("burger")) return "burger";
    if (n.includes("pasta")) return "pasta";
    if (n.includes("broast")) return "fried-chicken";
    if (n.includes("wing")) return "wings";
    if (n.includes("wrap") || n.includes("burrito")) return "burrito";
    if (n.includes("panini") || n.includes("sandwich") || n.includes("sub")) return "sandwich";
    if (n.includes("taco")) return "taco";
    if (n.includes("deal") || n.includes("pizza")) return "pizza";
    if (category === "steaks") return "steak";
    if (category === "burgers") return "burger";
    if (category === "pasta") return "pasta";
    if (category === "broast") return "fried-chicken";
    if (category === "wings") return "wings";
    return "food";
  };

  const imageForDish = (name, category) => {
    const n = name.toLowerCase();
    if (n.includes("steak")) return localImages.steak;
    if (n.includes("burger")) return localImages.burger;
    if (n.includes("pasta")) return localImages.pasta;
    if (n.includes("broast")) return localImages.broast;
    if (n.includes("wing")) return localImages.wings;
    if (n.includes("wrap") || n.includes("burrito") || n.includes("panini") || n.includes("sandwich") || n.includes("sub")) return localImages.wrap;
    if (n.includes("deal") || n.includes("pizza")) return localImages.pizza;
    if (category === "steaks") return localImages.steak;
    if (category === "burgers") return localImages.burger;
    if (category === "pasta") return localImages.pasta;
    if (category === "broast") return localImages.broast;
    if (category === "wings") return localImages.wings;
    return localImages.pizza;
  };

  const dishQueryMap = {
    "pepperoni chicken steak": "grilled-chicken-steak",
    "creamy mushroom steak": "mushroom-steak",
    "peri peri chicken steak": "peri-peri-chicken",
    "jalapeno chicken steak": "jalapeno-steak",
    "dips quarter": "crispy-fried-chicken",
    "super value": "fried-chicken-platter",
    full: "broast-chicken-bucket",
    "molten double lava": "double-cheese-burger",
    "grilled chicken burger": "grilled-chicken-burger",
    "venue special grilled burger": "special-burger",
    "butter milk chicken burger": "buttermilk-chicken-burger",
    "chipotle grilled chicken burger": "chipotle-burger",
    "mexican grilled burger": "mexican-burger",
    "venue sp. smash burger": "smash-burger",
    "mushroom meat burger": "mushroom-beef-burger",
    "cheesy penne pasta": "penne-pasta",
    "lagance pasta": "creamy-pasta",
    "behari pasta": "spicy-pasta",
    "sweeten touch sub": "chicken-sub-sandwich",
    "venue special grilled panini": "grilled-panini",
    "classic club sandwich": "club-sandwich",
    "peri peri grilled panini": "peri-peri-panini",
    "venue special burrito": "burrito-wrap",
    "venue crispy chicken burrito": "crispy-chicken-burrito",
    "turkish donno wrap": "turkish-wrap",
    "dynamite chicken": "dynamite-chicken",
    "blazon salame chicken": "fried-chicken",
    "rack-throat chicken": "spicy-chicken-bites",
    "tacos (2pcs)": "chicken-tacos",
    "blind wings (10 pcs)": "bbq-wings",
    "peri peri wings (10 pcs)": "peri-peri-wings",
    "deal 1": "pizza-combo",
    "deal 2": "family-pizza-deal",
    "deal 3": "pizza-fries-combo",
    "deal 4": "large-pizza-combo",
    "deal 5": "medium-pizza-combo",
    "deal 6": "pizza-drink-deal",
    "deal 7": "pizza-party-box",
    "deal 8": "pizza-platter",
    "deal 9": "cheese-pizza-deal",
    "deal 10": "supreme-pizza-deal"
  };

  const localDishImageMap = {
    "molten double lava": localImages.molten,
    "cheesy penne pasta": localImages.cheesyPasta,
    "creamy mushroom steak": localImages.creamyMushroomSteak,
    "peri peri chicken steak": localImages.periPeriSteak,
    "jalapeno chicken steak": localImages.jalapenoSteak,
    "dips quarter": localImages.dipsQuarter,
    full: localImages.broastFull,
    "super value": localImages.superValue,
    "grilled chicken burger": localImages.grilledChickenBurger,
    "venue special grilled burger": localImages.venueSpecialBurger,
    "butter milk chicken burger": localImages.butterMilkBurger,
    "chipotle grilled chicken burger": localImages.chipotleBurger,
    "mexican grilled burger": localImages.mexicanBurger,
    "venue sp. smash burger": localImages.venueSmashBurger,
    "mushroom meat burger": localImages.mushroomMeatBurger,
    "lagance pasta": localImages.lagancePasta,
    "behari pasta": localImages.behariPasta,
    "sweeten touch sub": localImages.sweetenTouchSub,
    "venue special grilled panini": localImages.venueSpecialGrilledPanini,
    "classic club sandwich": localImages.classicClubSandwich,
    "peri peri grilled panini": localImages.periPeriGrilledPanini,
    "venue special burrito": localImages.venueSpecialBurrito,
    "venue crispy chicken burrito": localImages.venueCrispyChickenBurrito,
    "turkish donno wrap": localImages.turkishDonnoWrap,
    "dynamite chicken": localImages.dynamiteChicken,
    "blazon salame chicken": localImages.blazonSalameChicken,
    "rack-throat chicken": localImages.rackThroatChicken,
    "blind wings (10 pcs)": localImages.blindWings10pcs,
    "tacos (2pcs)": localImages.tacos2pcs,
    "peri peri wings (10 pcs)": localImages.periPeriWings10pcs,
    "deal 1": localImages.deal1,
    "deal 2": localImages.deal2,
    "deal 3": localImages.deal3,
    "deal 4": localImages.deal4,
    "deal 5": localImages.deal5,
    "deal 6": localImages.deal6,
    "deal 7": localImages.deal7,
    "deal 8": localImages.deal8,
    "deal 9": localImages.deal9,
    "deal 10": localImages.deal10
  };

  menuCards.forEach((card, index) => {
    if (card.querySelector("img")) return;
    const category = card.dataset.category || "other";
    const title = card.querySelector("h3")?.textContent?.trim() || "Pizza Venue food item";
    const keyword = keywordFromName(title, category);
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const query = dishQueryMap[title.toLowerCase()] || keyword;
    const img = document.createElement("img");
    img.loading = "lazy";
    img.alt = title;
    const localDishImage = localDishImageMap[title.toLowerCase()];
    if (localDishImage) {
      img.src = localDishImage;
    } else if (category === "steaks") {
      img.src = localImages.steak;
    } else {
      // Use a dish-focused food image source for missing local assets.
      img.src = `https://source.unsplash.com/600x380/?${encodeURIComponent(query)}&sig=${index + 21}`;
    }
    img.addEventListener("error", () => {
      img.src = imageForDish(slug, category);
    }, { once: true });
    card.prepend(img);
  });

  const revealEls = document.querySelectorAll(".menu-card, .branch-card, .branch-preview-card, .hero-content, .hero-visual");
  revealEls.forEach((el) => el.classList.add("reveal"));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("in-view");
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => observer.observe(el));
});
