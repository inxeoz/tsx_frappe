function loadCSS(href) {
  return new Promise((resolve, reject) => {
    console.log(`📦 [loadCSS] Preparing to load CSS: ${href}`);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;

    link.onload = () => {
      console.log(`✅ [loadCSS] CSS loaded successfully: ${href}`);
      resolve();
    };

    link.onerror = (err) => {
      console.error(`❌ [loadCSS] Failed to load CSS: ${href}`, err);
      reject(err);
    };

    document.head.appendChild(link);
    console.log(`📄 [loadCSS] <link> tag appended to document.head`);
  });
}

frappe.pages["itsupport"].on_page_load = async function (wrapper) {
  console.log("🚀 [itsupport] Starting page load sequence...");

  $(wrapper).html(`
    <div id="loading-ui" style="padding: 2rem; font-size: 1.2rem;">
      🚀 Building React app... please wait.
    </div>
  `);

  // Trigger backend build (optional if you want hot rebuild)
  const res = await frappe.call(
    "tsx_frappe.tsx_frappe.api.devserver.build_static_ui",
  );
  const result = res.message;

  if (result.status !== "success") {
    frappe.msgprint(__("❌ Failed to build React app: " + result.message));
    console.error("Build failed:", result.message);
    return;
  }

  console.log("✅ [itsupport] React build complete:", result.output);

  // Create Frappe app page shell
  const page = frappe.ui.make_app_page({
    parent: wrapper,
    title: "React + Vite Page",
    single_column: true,
  });

  const version = Date.now(); // cache busting

  $(wrapper).html(`
    <div id="react-app-wrapper">
      <div id="root"></div>
    </div>
  `);

  try {
    // Load both CSS files (main.css and main2.css) with cache busting
    await loadCSS(`/assets/tsx_frappe/static_ui/main.css?v=${version}`);
    await loadCSS(`/assets/tsx_frappe/static_ui/main2.css?v=${version}`);
  } catch (err) {
    console.error("🚫 [itsupport] One or more CSS files failed to load:", err);
  }

  console.log("📜 [itsupport] Attempting to load main.js...");
  import(`/assets/tsx_frappe/static_ui/main.js?v=${version}`)
    .then((mod) => {
      console.log("📦 [itsupport] main.js loaded successfully");

      const el = document.getElementById("root");
      if (el && mod.mountReact) {
        console.log("🖼 [itsupport] Mounting React app...");
        mod.mountReact(el);
        console.log("✅ [itsupport] React app mounted!");
      } else {
        console.error(
          "❌ [itsupport] mountReact not found or #root element missing",
        );
      }
    })
    .catch((err) => {
      console.error("🚫 [itsupport] Failed to load main.js:", err);
    });
};
