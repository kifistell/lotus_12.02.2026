function placeCard(title, img, text, pos = "center 35%") {
    return `
    <article class="place-card">
      <div class="place-media">
        <img class="place-photo" src="${img}" alt="${title}" style="object-position:${pos}">
        <div class="place-media-overlay"></div>
      </div>
      <div class="place-body">
        <h2 class="place-title">${title}</h2>
        <p class="place-text">${text}</p>
      </div>
    </article>
  `;
}


const places = [
  // MOUNTAINS & RANGES
  {
    name: "Altai (Katon-Karagay)",
    type: "mountains",
    content: placeCard(
      "Altai (Katon-Karagay)",
      "altai.jpeg",
      "The Altai mountain area is one of the region’s key natural highlights and a strong base for eco‑tourism. Pine forests, high‑mountain valleys, and a dense river network create a wide variety of routes. Plan about 2–4 days to include viewpoints and short hikes. The best seasons are late spring, summer, and early autumn, when weather is more stable and visibility is at its best. Follow protected‑area rules and plan logistics in advance, because the location is remote.",
      "center 60%"
    )
  },
  {
    name: "Rakhmanov keys",
    type: "lakes",
    content: placeCard(
      "Rakhmanov keys",
      "fotonax.jpeg",
      "The famous Rakhmanovskie Springs are a healing spring consisting of 12 springs. The Rakhmanovskie Springs are located on the right bank of the Arasan River, just 80 meters from Lake Rakhmanovskoye and at an altitude of 1,760 meters above sea level. The borders of Kazakhstan, China, Russia, and Mongolia are nearby. The resort is located within the Katon-Karagay State National Park.",
      "center 60%"
    )
  },
  {
    name: "East Altai",
    type: "mountains",
    content: placeCard(
      "East Altai",
      "vostochaltai.jpg",
      "East Altai is a land of contrasts: highlands, taiga, and glacial landforms create dramatic panoramas. It’s great for active trips—day hikes, photo tours, and wildlife watching. Routes require basic fitness and careful planning around weather, especially in shoulder seasons. The most comfortable period is July–September, with fewer sharp temperature swings. For a safer and smoother trip, go with a guide or stick to verified tracks and bring reliable navigation/communication.",
      "center 60%"
    )
  },
  {
    name: "Bukhtarma Range",
    type: "mountains",
    content: placeCard(
      "Bukhtarma Range",
      "buhtarma.jpg",
      "The Bukhtarma Range is known for long ridgelines and viewpoints that support routes of different difficulty levels. The terrain lets you combine day walks with stops in valleys and near water. When planning, consider elevation changes and limited infrastructure in remote areas. Summer and early autumn are the most predictable seasons, reducing time and safety risks. A practical strategy is to define start/finish points, water stops, and a backup plan in case the weather turns.",
      "center 60%"
    )
  },
  {
    name: "Sarymsak Ridge",
    type: "mountains",
    content: placeCard(
      "Sarymsak Ridge",
      "sarym.jpg",
      "Sarymsak Ridge is a promising trekking area focused on natural landscapes and wide views. You can choose short hikes or longer crossings if the group is well prepared. For a comfortable trip, assess road access and seasonal passability in advance. The best weather windows are stable summer and dry early autumn, with fewer rains and better visibility. For group travel, set clear safety rules and time control to avoid returning at dusk.",
      "center 60%"
    )
  },

  // LAKES & RESERVOIRS
  {
    name: "Bukhtarma Reservoir",
    type: "lakes",
    content: placeCard(
      "Bukhtarma Reservoir",
      "buhtarmail.jpeg",
      "Bukhtarma Reservoir is a major water destination for beach rest, walks, and seasonal activities. The shoreline offers many options—from lively beach zones to quieter, secluded spots. For efficient planning, choose an area with convenient access and infrastructure, especially in peak months. The most popular period is June–August, when the water is warmer and more services are available. Follow boating and fire‑safety rules, as coastal areas are often sensitive to heavy use.",
      "center 60%"
    )
  },
  {
    name: "Lake Zaysan",
    type: "lakes",
    content: placeCard(
      "Lake Zaysan",
      "zaisan.jpg",
      "Lake Zaysan feels like a vast open space—wide horizons and calm water are its main charm. It’s suitable for scenic drives, fishing trips, and routes centered on steppe landscapes. For reliable organization, consider wind exposure and quickly changing conditions on the water. The warm season is best, with more accessible roads and better options for longer stops. Plan supply points in advance and don’t rely on random infrastructure far from settlements."
    )
  },
  {
    name: "Markakol",
    type: "lakes",
    content: placeCard(
      "Markakol",
      "qwerty.jpg",
      "Markakol is a high‑mountain lake with a strong natural identity and a reputation for quiet, slow travel. People come here for eco‑friendly rest, nature observation, and gentle walks. Logistically, include extra time for the road and for mountain weather changes. Mid‑summer and early autumn are the most stable seasons. To preserve the area, follow visitor rules and minimize your footprint—especially waste and campfire impact."
    )
  },

  // FORESTS & TAIGA
  {
    name: "Altai Forests",
    type: "forests",
    content: placeCard(
      "Altai Forests",
      "altai-gory.jpg",
      "Altai forests are a recreational area where conifer massifs and clean air are the main value. Typical visits include walking trails, picnic spots, and nature photography. Choose official paths and designated campsites to reduce pressure on ecosystems. Summer and early autumn are the most comfortable seasons, with drier, more passable trails. Fire safety and the “leave no trace” principle should be a priority.",
      "center 80%"
    )
  },
  {
    name: "Priirtysh Ribbon Pine Forests",
    type: "forests",
    content: placeCard(
      "Priirtysh Ribbon Pine Forests",
      "priirtysh.jpg",
      "Ribbon pine forests are a rare landscape where pine stands form long “ribbons” on sandy soils. It’s convenient for short trips, walks, and family outings without heavy physical strain. For a smooth visit, pick clear entry points and safe parking areas. Dry months are best, when trails are less muddy and walking is more comfortable. The key standard here is strict fire control and careful treatment of the forest undergrowth.",
      "center 15%"
    )
  },
  {
    name: "Siberian Taiga",
    type: "forests",
    content: placeCard(
      "Siberian Taiga",
      "Vostochnaya-sibir.jpg",
      "The Siberian taiga is a high‑value ecosystem with dense conifer cover. Calm formats work best here: wildlife watching, quiet walks, and photo routes. Navigation discipline is important because similar‑looking terrain can make orientation difficult. Plan trips for stable weather and fewer rainy days. Group organizers should in advance fix the route, communication points, and behavior rules for encounter with wild animals.",
      "center 65%"
    )
  },

  // PLATEAUS
  {
    name: "Katon-Karagay Plateau",
    type: "plateaus",
    content: placeCard(
      "Katon-Karagay Plateau",
      "katon-plato.jpg",
      "Katon-Karagay Plateau is valued for open open spaces and relatively even high‑mountain terrain—great for panoramic routes. It fits moderate trekking and photo tours focused on wide landscapes. When planning, consider altitude, wind exposure, and limited shelter in open areas. Stable summer is the best time, with fewer risks of sudden cold snaps and thunderstorms. Coordinate logistics in advance and keep time reserves—weather can change quickly on the plateau.",
      "center 45%"
    )
  },
  {
    name: "Ulba Plateau",
    type: "plateaus",
    content: placeCard(
      "Ulba Plateau",
      "plato.jpeg",
      "Ulba Plateau is a scenic area with rocky forms and viewpoints, ideal for short trips and active walks. You can build 2–6 hour routes without expedition‑level preparation. From a safety standpoint, be careful near cliffs and choose clearly marked paths. Dry weather is most comfortable, when rocky sections are less slippery. For group visits, set meeting points and manage pace so the hike stays easy and safe."
    )
  },

  // CANYONS & GORGES
  {
    name: "Turgen Gorge",
    type: "canyons",
    content: placeCard(
      "Turgen Gorge",
      "turgen.jpg",
      "Turgen Gorge is a classic day‑route location where elevation changes and the river corridor shape the experience. It’s easy to plan as a one‑day program with several stops and short walks. For a consistent result, manage time to avoid returning in dusk and consider seasonal trail wetness. Warm months without prolonged rain are most comfortable, with better passability. Stay within safe trails and keep distance near steep rock sections."
    )
  },
  {
    name: "Black Canyon of the Irtysh",
    type: "canyons",
    content: placeCard(
      "Black Canyon of the Irtysh",
      "cherni_irtish.jpg",
      "The Black Canyon stands out for striking rock outcrops and the contrast between stone and the river line. It’s especially strong for photo routes and viewpoint stops where composition and light matter. For safe organization, choose secure platforms and avoid edges without control. Visit on clear days for maximum visibility and fewer slippery surfaces. Keep the area intact: don’t break fragile edges, don’t litter, and avoid trampling vegetation on slopes."
    )
  },
  {
    name: "Aksu Canyon",
    type: "canyons",
    content: placeCard(
      "Aksu Canyon",
      "kanyon-aksu.jpg",
      "Aksu Canyon is a dramatic geological site with tall rock walls and narrow passages. It’s great for active walks and routes built around strong views. In planning, consider seasonal precipitation—after rain, rocks and soil become less safe. The best time is dry periods with predictable weather and clear visibility. Follow the route strictly, carry enough water, and don’t approach potentially unstable or crumbling sections.",
      "center 65%"
    )
  },

  // MEADOWS & STEPPES
  {
    name: "Katon-Karagay Meadows",
    type: "steppes",
    content: placeCard(
      "Katon-Karagay Meadows",
      "osyl.jpeg",
      "Katon-Karagay Meadows are a gentle landscape with high seasonal appeal. It works well for calm walks, family routes, and photography with mountain backdrops. For the best experience, choose the blooming period and stable weather, when meadows look most vivid. Plan for limited shade and bring sun/wind protection. A good visitor standard is to avoid trampling flowering areas and not drive off-road.",
      "center 65%"
    )
  },

  // GLACIERS
  {
    name: "East Altai Glaciers",
    type: "glaciers",
    content: placeCard(
      "East Altai Glaciers",
      "sofiyski.jpg",
      "East Altai glaciers are a strategic natural resource that shapes river sources and water supply in mountain valleys. For travelers, they are high‑value visual landmarks and a rare natural experience. Visits require care: safe routes, proper equipment, and guidance when needed. Plan for stable weather seasons, when avalanche and rockfall risks are lower. Keep a strict distance from crevasses and never go onto the ice without specialized preparation."
    )
  },
  {
    name: "Belukha Glacier",
    type: "glaciers",
    content: placeCard(
      "Belukha Glacier",
      "beluha.png",
      "Belukha Glacier is one of the most recognizable high‑mountain sites and a key reference point for alpine routes. It delivers a strong visual impact and is valued for its “clean” mountain aesthetic. Visiting requires strict safety discipline: high altitude demands good weather windows and solid gear. Use proven trails and allow time for acclimatization on longer hikes. Prioritize minimal impact on nature and follow guide/service instructions."
    )
  },

  // RIVERS
  {
    name: "Irtysh River",
    type: "rivers",
    content: placeCard(
      "Irtysh River",
      "irtysh_2.jpg",
      "The Irtysh is the region’s main river and an important transport and landscape corridor. Travelers enjoy embankments, viewpoints, and riverside walks. When planning, consider seasonal water levels and wind on open sections. A good format is to combine city spots with natural stops upstream or downstream. Follow basic water safety rules and use official places for rest and access to the shore."
    )
  },
  {
    name: "Bulak River",
    type: "rivers",
    content: placeCard(
      "Bulak River",
      "bulak.jpg",
      "Bulak is a typical mountain river: cold water, a stony channel, and a fast current create its charm. It’s good for short walks, quick stops on the way, and nature photography. Consider slippery stones and quick level changes after rain. Dry weather is best, when trails and access points are safer. Choose spots with stable banks and avoid unnecessary wading.",
      "center 60%"
    )
  },
  {
    name: "Turgusun River",
    type: "rivers",
    content: placeCard(
      "Turgusun River",
      "tursugyn.jpg",
      "Turgusun is a riverside route stop where valleys and riverside landscapes are the main attraction. It fits well into road‑trip programs that need short scenic pauses. For quality visiting, determine access roads and safe shore entry points ahead of time. Warm months without long rains are best, when water is clearer and approaches are stable. Keep the riverbank clean and don’t leave litter to preserve the natural look."
    )
  },
  {
    name: "Katon River",
    type: "rivers",
    content: placeCard(
      "Katon River",
      "katon-rika.jpg",
      "The Katon River is a “mountain axis” connecting valleys and key points of interest. Travelers value clean water, views of mountain slopes, and the ability to walk along the river. In logistics, account for seasonal flow changes and the condition of dirt access roads. Summer and early autumn are the most predictable periods. Stick to safe riverbank zones and avoid steep drop‑offs near the water.",
      "center 65%"
    )
  }
];

// Make places accessible for other modules (recommendations / trip plan)
window.places = places;
window.__PLACES__ = places;


// (rest of the code kept as-is)
const buttons = document.getElementById("buttons");
const info = document.getElementById("info");

function render(list) {
    buttons.innerHTML = "";
    list.forEach(p => {
        const b = document.createElement("button");
        b.textContent = p.name;
        b.onclick = () => {
            info.innerHTML = p.content + (window.tripInjectActionBar ? window.tripInjectActionBar(p) : "");

            // Update favorites/plan UI (if enabled)
            if (typeof window.renderTripUI === "function") {
                try { window.renderTripUI(); } catch (_) { }
            }

            // Personalization: track user actions (views)
            if (typeof window.trackPlaceView === "function") {
                try { window.trackPlaceView(p); } catch (_) { }
            }

            // If the “Recommended trip” block exists — refresh it
            if (typeof window.refreshRecommendations === "function") {
                try { window.refreshRecommendations(); } catch (_) { }
            }
        };

        buttons.appendChild(b);
    });
}

function applyFilter() {
    const v = document.getElementById("filter").value;
    render(v === "all" ? places : places.filter(p => p.type === v));
}

render(places);

/* ==========================================================
   Favorites ⭐ + "My Trip Plan" (localStorage)
   Keys aligned with existing personalization: userProfile / userHistory_v1
   ========================================================== */
(() => {
  const FAV_KEY = "userFavorites_v1";
  const PLAN_KEY = "userTripPlan_v1";

  const $ = (id) => document.getElementById(id);

  const safeParse = (v, fallback) => {
    try { return JSON.parse(v); } catch { return fallback; }
  };

  const getFavorites = () => safeParse(localStorage.getItem(FAV_KEY) || "[]", []);
  const setFavorites = (arr) => localStorage.setItem(FAV_KEY, JSON.stringify(arr));

  const getPlan = () => safeParse(localStorage.getItem(PLAN_KEY) || "[]", []);
  const setPlan = (arr) => localStorage.setItem(PLAN_KEY, JSON.stringify(arr));

  const esc = (s) => String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

  const stripHTML = (html) => {
    const d = document.createElement("div");
    d.innerHTML = String(html ?? "");
    return (d.textContent || "").trim();
  };

  // your places don't have a stable key -> use name as primary
  const placeKey = (p) => p?.key || p?.id || p?.name;

  const getPlaceByKey = (key) => {
    const arr = window.__PLACES__ || window.places || [];
    return arr.find(p => placeKey(p) === key) || null;
  };

  const isFav = (key) => getFavorites().includes(key);

  const toggleFav = (key) => {
    const fav = getFavorites();
    const i = fav.indexOf(key);
    if (i >= 0) fav.splice(i, 1);
    else fav.push(key);
    setFavorites(fav);
  };

  const addToPlan = (key) => {
    const plan = getPlan();
    if (!plan.some(x => x.key === key)) {
      plan.push({ key, note: "", addedAt: Date.now() });
      setPlan(plan);
    }
  };

  const removeFromPlan = (key) => {
    setPlan(getPlan().filter(x => x.key !== key));
  };

  const movePlan = (key, dir) => {
    const plan = getPlan();
    const i = plan.findIndex(x => x.key === key);
    const j = i + dir;
    if (i < 0 || j < 0 || j >= plan.length) return;
    [plan[i], plan[j]] = [plan[j], plan[i]];
    setPlan(plan);
  };

  const updateNote = (key, note) => {
    const plan = getPlan();
    const item = plan.find(x => x.key === key);
    if (!item) return;
    item.note = String(note ?? "").slice(0, 400);
    setPlan(plan);
  };

  // Inject buttons into the place view (#info)
  window.tripInjectActionBar = (p) => {
    const key = placeKey(p);
    if (!key) return "";
    return `
      <div class="place-actions" style="display:flex; gap:10px; align-items:center; justify-content:flex-end; margin-top:12px;">
        <button class="fav-btn" type="button" data-fav="${esc(key)}" aria-label="Add to favorites">☆</button>
        <button class="trip-btn primary" type="button" data-add-plan="${esc(key)}">Add to plan</button>
      </div>
    `;
  };

  // Main renderer for section #trip
  function renderTripUI() {
    const favList = $("favList");
    const planList = $("planList");
    if (!favList || !planList) return;

    const fav = getFavorites();
    const plan = getPlan();

    // Favorites list
    if (!fav.length) {
      favList.innerHTML = `<div class="trip-meta">Nothing here yet. Click ☆ on a place to add it.</div>`;
    } else {
      favList.innerHTML = fav.map((key) => {
        const p = getPlaceByKey(key);
        const title = p?.name || key;
        const desc = p ? stripHTML(p.content).slice(0, 110) : "";
        return `
          <div class="trip-item">
            <div>
              <div class="trip-title">${esc(title)}</div>
              <div class="trip-meta">${esc(desc)}${desc.length >= 110 ? "…" : ""}</div>
            </div>
            <div class="trip-actions">
              <button class="trip-btn primary" type="button" data-add-plan="${esc(key)}">Add to plan</button>
              <button class="trip-btn" type="button" data-fav="${esc(key)}">Remove</button>
            </div>
          </div>
        `;
      }).join("");
    }

    // Plan list
    if (!plan.length) {
      planList.innerHTML = `<div class="trip-meta">Add 2–6 places to your plan and arrange the order.</div>`;
    } else {
      planList.innerHTML = plan.map((item, idx) => {
        const p = getPlaceByKey(item.key);
        const title = p?.name || item.key;
        return `
          <div class="trip-item">
            <div>
              <div class="trip-title">${idx + 1}. ${esc(title)}</div>
              <textarea class="trip-note" data-note="${esc(item.key)}"
                placeholder="Note (time, budget, what to pack)">${esc(item.note || "")}</textarea>
            </div>
            <div class="trip-actions">
              <button class="trip-btn" type="button" data-move="${esc(item.key)}" data-dir="-1">↑</button>
              <button class="trip-btn" type="button" data-move="${esc(item.key)}" data-dir="1">↓</button>
              <button class="trip-btn" type="button" data-remove-plan="${esc(item.key)}">✕</button>
            </div>
          </div>
        `;
      }).join("");
    }

    // Update stars on visible place actions
    document.querySelectorAll(".fav-btn[data-fav]").forEach(btn => {
      const key = btn.getAttribute("data-fav");
      const on = isFav(key);
      btn.classList.toggle("is-on", on);
      btn.textContent = on ? "★" : "☆";
    });
  }

  // Delegated events (works for dynamically injected buttons)
  document.addEventListener("click", (e) => {
    const favBtn = e.target.closest("[data-fav]");
    if (favBtn) {
      toggleFav(favBtn.getAttribute("data-fav"));
      renderTripUI();
      return;
    }

    const addBtn = e.target.closest("[data-add-plan]");
    if (addBtn) {
      addToPlan(addBtn.getAttribute("data-add-plan"));
      renderTripUI();
      return;
    }

    const rmBtn = e.target.closest("[data-remove-plan]");
    if (rmBtn) {
      removeFromPlan(rmBtn.getAttribute("data-remove-plan"));
      renderTripUI();
      return;
    }

    const mvBtn = e.target.closest("[data-move]");
    if (mvBtn) {
      movePlan(mvBtn.getAttribute("data-move"), Number(mvBtn.getAttribute("data-dir")));
      renderTripUI();
      return;
    }
  });

  document.addEventListener("input", (e) => {
    const note = e.target.closest("[data-note]");
    if (!note) return;
    updateNote(note.getAttribute("data-note"), note.value);
  });

  // Clear buttons in your HTML
  window.addEventListener("DOMContentLoaded", () => {
    $("tripClearFav")?.addEventListener("click", () => {
      setFavorites([]);
      renderTripUI();
    });

    $("tripClearPlan")?.addEventListener("click", () => {
      setPlan([]);
      renderTripUI();
    });

    renderTripUI();
  });

  // expose
  window.renderTripUI = renderTripUI;
})();

/* ==========================================================
   SHARE "MY TRIP PLAN" VIA URL (works even on file:///)
   - Button: id="tripShareLink"
   - Storage: tripPlan_v1
   ========================================================== */
(function setupTripShare() {
  const TRIP_KEY = "tripPlan_v1";

  function safeTrip() {
    try {
      return JSON.parse(localStorage.getItem(TRIP_KEY) || '{"favorites":[],"plan":[]}');
    } catch {
      return { favorites: [], plan: [] };
    }
  }

  function encodePayload(payload) {
    const json = JSON.stringify(payload);
    // JSON -> base64url
    return btoa(unescape(encodeURIComponent(json)))
      .replaceAll("+", "-")
      .replaceAll("/", "_")
      .replaceAll("=", "");
  }

  function decodeToken(token) {
    try {
      let b64 = token.replaceAll("-", "+").replaceAll("_", "/");
      while (b64.length % 4 !== 0) b64 += "=";
      const json = decodeURIComponent(escape(atob(b64)));
      return JSON.parse(json);
    } catch {
      return null;
    }
  }

  // ---- Copy link (robust: prompt fallback; works on file://) ----
  function copyLink() {
    const trip = safeTrip();

    const payload = {
      v: 1,
      fav: Array.isArray(trip.favorites) ? trip.favorites : [],
      plan: Array.isArray(trip.plan)
        ? trip.plan.map(x => ({ key: x.key, note: String(x.note || "").slice(0, 400) }))
        : []
    };

    const token = encodePayload(payload);
    const url = new URL(window.location.href);
    url.searchParams.set("trip", token);

    const text = url.toString();

    // Clipboard API is often blocked on file://. Try clipboard only when secure, otherwise prompt.
    const canClipboard = !!(navigator.clipboard && window.isSecureContext);
    if (canClipboard) {
      navigator.clipboard.writeText(text).then(() => {
        alert("Link copied ✅");
      }).catch(() => {
        window.prompt("Copy the link (Ctrl+C, Enter):", text);
      });
    } else {
      window.prompt("Copy the link (Ctrl+C, Enter):", text);
    }
  }

  // Bind click
  window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("tripShareLink");
    if (btn) btn.addEventListener("click", copyLink);
  });

  // ---- Import from URL (once per open) ----
  (function importTripFromUrlOnce() {
    const url = new URL(window.location.href);
    const token = url.searchParams.get("trip");
    if (!token) return;

    const data = decodeToken(token);
    if (!data || data.v !== 1) return;

    const current = safeTrip();
    const favSet = new Set([...(current.favorites || []), ...(data.fav || [])]);

    const planMap = new Map();
    (current.plan || []).forEach(x => x?.key && planMap.set(x.key, x));
    (data.plan || []).forEach(x => {
      if (!x?.key) return;
      if (!planMap.has(x.key)) planMap.set(x.key, { key: x.key, note: String(x.note || "").slice(0, 400), addedAt: Date.now() });
    });

    localStorage.setItem(TRIP_KEY, JSON.stringify({
      favorites: Array.from(favSet),
      plan: Array.from(planMap.values())
    }));

    // Remove query param from the address (so it won't re-import on refresh)
    url.searchParams.delete("trip");
    history.replaceState({}, "", url.toString());

    if (typeof window.renderTripUI === "function") {
      try { window.renderTripUI(); } catch {}
    }

    alert("Trip plan imported ✅");
  })();
})();
