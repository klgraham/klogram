// Mount point for future circuits-style explorations.
// Static pages stay readable if this module never runs.
//
// A page opts in with:
//   <div id="exploration-root" data-exploration="name">…fallback…</div>
// When `name` is a known exploration, this file dynamically imports
// `./explorations/${name}.js` and calls `mount(root)`.

const registry = {
  // none: reserved. Add named explorations here as they ship.
};

export async function mount(root) {
  if (!root) return;
  const name = root.dataset.exploration;
  if (!name || name === "none") return;

  const load = registry[name];
  if (typeof load === "function") {
    const mod = await load();
    if (mod && typeof mod.mount === "function") {
      mod.mount(root);
    }
    return;
  }

  try {
    const mod = await import(`./explorations/${name}.js`);
    if (mod && typeof mod.mount === "function") {
      mod.mount(root);
    }
  } catch (err) {
    console.warn(`Exploration "${name}" was not loaded.`, err);
  }
}

const root = document.getElementById("exploration-root");
if (root) {
  mount(root);
}
