/* Sakariyau Jamiu & Co. - Luxury Site Logic & 3D Interactive Engine */

// Supabase Configuration Settings
// REPLACE THESE with your actual Supabase URL and Anon Key once you create your project
const SUPABASE_CONFIG = {
  url: "https://wuwregcurcgjjhgnuvbp.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1d3JlZ2N1cmNnampoZ251dmJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNzY0NTMsImV4cCI6MjA5NTY1MjQ1M30.IXJXgIin-CNDZlLgKjXoYo8B8HSEucucXbol4_u58P0"
};

// Initialize Supabase Client
let supabaseClient = null;
if (SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey) {
  try {
    supabaseClient = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
    console.log("Supabase Client initialized successfully.");
  } catch (err) {
    console.error("Failed to initialize Supabase Client:", err);
  }
}

// Default Property Listings Database (Seed Data)
const DEFAULT_LISTINGS = [
  {
    id: "l-seed-1",
    title: "ORRIXE Gold Luxury Serviced Apartment",
    price: "₦12,000,000 / year",
    location: "Abuja",
    address: "Oladunmi Ayandipo Street, Guzape, Abuja",
    status: "Rent",
    type: "Residential",
    beds: 3,
    baths: 4,
    whatsapp: "2347038620904",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600",
    description: "High-end residential serviced apartment managed by Sakariyau Jamiu & Co. Backed by central cooling, 24/7 solar hybrid backup power, gym, concierge service, and premium security."
  },
  {
    id: "l-seed-2",
    title: "Beijing Serviced Apartment Complex",
    price: "₦15,000,000 / year",
    location: "Abuja",
    address: "NNPC Estate, Idogwari District, Life Camp, Abuja",
    status: "Rent",
    type: "Commercial",
    beds: 4,
    baths: 5,
    whatsapp: "2347038620904",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600",
    description: "Exclusive luxury serviced apartments managed by our team. Features secure access controls, central clean water grid, landscaped gardens, and smart facility support."
  },
  {
    id: "l-seed-3",
    title: "Executive 3-Bedroom Apartments",
    price: "₦75,000,000",
    location: "Abuja",
    address: "Mpape (Maitama 2), Abuja",
    status: "Sale",
    type: "Residential",
    beds: 3,
    baths: 3,
    whatsapp: "2347038620904",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
    description: "Units of modern executive flats built to premium construction specs. Large bedrooms, fully fitted kitchens, and private balconies overlooking Maitama Extension hills."
  },
  {
    id: "l-seed-4",
    title: "Alagbado Residential Enclave",
    price: "₦2,000,000 / year",
    location: "Kwara",
    address: "Alagbado Area, Ilorin, Kwara State",
    status: "Rent",
    type: "Residential",
    beds: 2,
    baths: 2,
    whatsapp: "2347038620904",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600",
    description: "Elegant 2-bedroom flats in a gated enclave, fully managed by Sakariyau Jamiu & Co. Dedicated utility meters, boreholes, security gates, and paved parking lots."
  }
];

// Credentials Verification Database
const CREDENTIALS_DB = {
  cac: {
    title: "Corporate Affairs Commission Accreditation",
    subtitle: "CERTIFICATE OF REGISTRATION",
    number: "Reg No: BN 7297821",
    authority: "Federal Republic of Nigeria (CAC)",
    scope: "Estate Surveying, Valuation & Real Estate Services",
    location: "Fatima Plaza, Wuye District, Abuja",
    description: "Official certificate confirming the legal registration and business name incorporation of Sakariyau Jamiu & Co. under the Companies and Allied Matters Act 2020. This authorizes operations in legal real estate agency, management, and consultation structures.",
    seal: "CAC SEAL",
    stamp: "NAME REGISTERED ON 21ST AUGUST 2024"
  },
  esvarbon: {
    title: "ESVARBON Licensing Authority",
    subtitle: "CERTIFICATE OF COMPLIANCE & PRACTICE",
    number: "Firm Reg: F00644 | Personal: A.6644",
    authority: "Estate Surveyors and Valuers Registration Board of Nigeria",
    scope: "Authorized Estate Surveying & Valuation Practice",
    location: "All branches nationwide",
    description: "The primary legal license validating that the firm and its Principal Partner, ESV Sakariyau Jamiu Kayode, have satisfied all statutory criteria established under Decree 24 of 1975 to practice estate surveying, plant/machinery valuation, and property management across Nigeria.",
    seal: "BOARD SEAL",
    stamp: "COMPLIANCE CLEARANCE STAMP FOR 2026 PRACTICE"
  },
  niesv: {
    title: "NIESV Associate Election Hub",
    subtitle: "CERTIFICATE OF ASSOCIATE ELECTION",
    number: "Membership No: M06875",
    authority: "Nigerian Institution of Estate Surveyors & Valuers",
    scope: "Associate Member Professional Certification",
    location: "National Secretariat, Abuja",
    description: "Certifies that the Principal Partner, ESV Sakariyau Jamiu Kayode, is elected an Associate Member of NIESV. This represents compliance with rigorous professional codes, ethics, and academic benchmarks in estate management practice.",
    seal: "NIESV SEAL",
    stamp: "ELECTED MEMBER ON 2ND NOVEMBER 2022"
  },
  frcn: {
    title: "Financial Reporting Council Registration",
    subtitle: "PROFESSIONAL REGISTRATION LICENSE",
    number: "Reg No: FRC/2025/PRO/NIESV/024/200296",
    authority: "Financial Reporting Council of Nigeria",
    scope: "Certified Financial Valuation Professional",
    location: "Federal Republic of Nigeria",
    description: "Allows the partners of Sakariyau Jamiu & Co. to prepare and sign off on official asset valuation audits, balance sheet appraisals, and public asset reports compliant with International Financial Reporting Standards (IFRS) and FRC policies.",
    seal: "FRCN SEAL",
    stamp: "VALIDATED UNTIL 31ST DECEMBER 2026"
  },
  scuml: {
    title: "SCUML Anti-Money Laundering compliance",
    subtitle: "CERTIFICATE OF REGISTRATION",
    number: "SCUML Reg: 150902472",
    authority: "Special Control Unit Against Money Laundering (EFCC)",
    scope: "Anti-Money Laundering & Ethical Escrow Controls",
    location: "Financial Safety Audit",
    description: "Official certificate verifying that Sakariyau Jamiu & Co. is registered and compliant under Section 3 of the Money Laundering (Prevention and Prohibition) Act, guaranteeing that escrow transactions, agency deals, and client property payments conform to federal standards.",
    seal: "SCUML SEAL",
    stamp: "REGISTRATION APPROVED 23RD JANUARY 2025"
  },
  jtb: {
    title: "Joint Tax Board Registry",
    subtitle: "TAX IDENTIFICATION CERTIFICATE",
    number: "TIN: 1883330637",
    authority: "FCT Internal Revenue Service / Joint Tax Board",
    scope: "Corporate Fiscal & Tax Identification",
    location: "Fatima Plaza, Suite E3, Wuye District, Abuja",
    description: "Confirms the registered Tax Identification Number (TIN) for Sakariyau Jamiu & Co. issued by the Joint Tax Board and FCT-IRS, demonstrating corporate responsibility, tax compliance, and business integrity in Nigeria.",
    seal: "JTB STAMP",
    stamp: "TAX PAYER CLEARANCE RECORDED 2025"
  },
  emple: {
    title: "emPLE Professional Indemnity Insurance",
    subtitle: "PROFESSIONAL INDEMNITY POLICY",
    number: "Policy No: 617565357",
    authority: "emPLE General Insurance Limited",
    scope: "Professional Liability Protection",
    location: "Registered Offices Nationwide",
    description: "Confirms the active professional indemnity insurance coverage for SAKARIYAU JAMIU & CO. This policy protects clients against any legal liability arising from errors or omissions in professional surveying, property valuations, and agency documentation tasks.",
    seal: "EMPLE SEAL",
    stamp: "EFFECTIVE STARTING 24TH JANUARY 2025"
  },
  royal_exchange: {
    title: "Royal Exchange Group Life Policy",
    subtitle: "CERTIFICATE OF GROUP LIFE POLICY",
    number: "Policy No: 780927",
    authority: "Royal Exchange Prudential Life Plc",
    scope: "Pension Reform Act Section 4(5) Compliance",
    location: "Corporate Operations Headquarters",
    description: "Certifies that Sakariyau Jamiu & Co. maintains statutory compliance with the Pension Reform Act 2014 by securing Group Life Policy coverage for its employees. This guarantees worker protection and organization-level fiscal compliance.",
    seal: "EXCHANGE SEAL",
    stamp: "COVER FROM 9TH JULY 2025 TO 8TH JULY 2026"
  },
  itf: {
    title: "Industrial Training Fund Compliance",
    subtitle: "CERTIFICATE OF COMPLIANCE",
    number: "Reg No: BAU-013-0935",
    authority: "Industrial Training Fund (ITF) Nigeria",
    scope: "Federal Manpower Training Compliance",
    location: "Fatima Plaza, Wuye District, Abuja",
    description: "Federal certificate of compliance confirming that Sakariyau Jamiu & Co. has fulfilled all training contributions in accordance with the Laws of the Federal Republic of Nigeria. This validates our corporate credentials to secure government contracts and institutional partnerships.",
    seal: "ITF SEAL",
    stamp: "ITF VALID COMPLIANCE CLEARANCE YEAR 2025"
  }

};

// Global Application State
let appListings = [];
let uploadBase64Image = "";
let uploadFileObject = null; // Store raw file object for Supabase upload

// -------------------------------------------------------------
// SPA ROUTER ENGINE
// -------------------------------------------------------------
function navigate(viewId) {
  // Update browser hash
  window.location.hash = viewId;
  
  // Toggle Active Nav Links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === `#${viewId}`) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Toggle Active Views
  const views = document.querySelectorAll(".page-view");
  views.forEach(view => {
    if (view.id === `view-${viewId}`) {
      view.classList.add("active");
    } else {
      view.classList.remove("active");
    }
  });

  // Scroll to header height offset
  window.scrollTo(0, 0);

  // Close mobile nav menu if open
  const navMenu = document.getElementById("nav-menu");
  if (navMenu.classList.contains("active")) {
    navMenu.classList.remove("active");
  }

  // Trigger 3D renderer resize check if view is home
  if (viewId === "home") {
    onWindowResize();
  }

  // Trigger admin auth check if view is admin
  if (viewId === "admin") {
    checkAdminAuth();
  }
}

// Listen to Hash Changes
window.addEventListener("hashchange", () => {
  const hash = window.location.hash.substring(1) || "home";
  // Validate hash exists in pages
  if (document.getElementById(`view-${hash}`)) {
    navigate(hash);
  }
});

// Scroll Event styling for Header navigation
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Toggle Mobile Nav Menu
function toggleMobileMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
  const toggleBtn = document.getElementById("menu-toggle-btn").querySelector("i");
  if (navMenu.classList.contains("active")) {
    toggleBtn.className = "fa-solid fa-xmark";
  } else {
    toggleBtn.className = "fa-solid fa-bars";
  }
}

// -------------------------------------------------------------
// THREE.JS 3D ARCHITECTURAL VIEWPORT ENGINE
// -------------------------------------------------------------
let scene, camera, renderer, villaGroup, particleSystem;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

function init3DVisual() {
  const container = document.querySelector(".hero-canvas-container");
  const canvas = document.getElementById("hero-canvas");
  if (!canvas) return;

  // Scene
  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x040814, 0.015);

  // Camera
  camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 8, 18);
  camera.lookAt(0, 0, 0);

  // Renderer
  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;

  // Ambient Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
  scene.add(ambientLight);

  // Hemisphere light representing skylight
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x101935, 0.6);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);

  // Directed Warm Luxury Lights
  const dirLight = new THREE.DirectionalLight(0xc5a880, 1.8);
  dirLight.position.set(10, 15, 10);
  dirLight.castShadow = true;
  scene.add(dirLight);

  const dirLight2 = new THREE.DirectionalLight(0x101935, 1.2);
  dirLight2.position.set(-10, 5, -10);
  scene.add(dirLight2);

  // Abstract Modernist Villa Structure (stacked rectangles + glass columns)
  villaGroup = new THREE.Group();

  // Premium Gold & Glass Materials
  const goldMaterial = new THREE.MeshStandardMaterial({
    color: 0xc5a880,
    metalness: 0.85,
    roughness: 0.15,
    flatShading: true
  });

  const darkPlinthMaterial = new THREE.MeshStandardMaterial({
    color: 0x101935,
    metalness: 0.6,
    roughness: 0.4
  });

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.4,
    roughness: 0.1,
    transmission: 0.9,
    thickness: 0.5,
    side: THREE.DoubleSide
  });

  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0xc5a880,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });

  // Base Foundation Plinth
  const baseGeo = new THREE.BoxGeometry(10, 0.4, 7);
  const baseMesh = new THREE.Mesh(baseGeo, darkPlinthMaterial);
  baseMesh.position.y = -0.2;
  villaGroup.add(baseMesh);

  // Wireframe structural envelope
  const envelopeGeo = new THREE.BoxGeometry(10.2, 5.2, 7.2);
  const envelopeMesh = new THREE.Mesh(envelopeGeo, wireframeMaterial);
  envelopeMesh.position.y = 2.5;
  villaGroup.add(envelopeMesh);

  // Ground Floor Blocks
  const block1Geo = new THREE.BoxGeometry(5, 2, 4);
  const block1 = new THREE.Mesh(block1Geo, goldMaterial);
  block1.position.set(-2, 1, 0.5);
  villaGroup.add(block1);

  // Glass Front Canopy (Double-height windows)
  const glassFrontGeo = new THREE.BoxGeometry(4.5, 4, 3.5);
  const glassFront = new THREE.Mesh(glassFrontGeo, glassMaterial);
  glassFront.position.set(2, 2, 0.8);
  villaGroup.add(glassFront);

  // Second Floor Cantilever Block (Luxury villa aesthetic)
  const block2Geo = new THREE.BoxGeometry(6, 1.8, 4.5);
  const block2 = new THREE.Mesh(block2Geo, goldMaterial);
  block2.position.set(-1.2, 2.9, -0.5);
  villaGroup.add(block2);

  // Columns / Structural pillars (Surveying concept)
  const pillarGeo = new THREE.CylinderGeometry(0.08, 0.08, 4, 8);
  for (let i = 0; i < 4; i++) {
    const pillar = new THREE.Mesh(pillarGeo, goldMaterial);
    const zOffset = i < 2 ? 2.5 : -2.5;
    const xOffset = i % 2 === 0 ? 4.2 : 2.0;
    pillar.position.set(xOffset, 2, zOffset);
    villaGroup.add(pillar);
  }

  // Floating Structural Planes (Abstract layout sheets)
  const planeGeo = new THREE.PlaneGeometry(12, 9);
  const planeMesh = new THREE.Mesh(planeGeo, wireframeMaterial);
  planeMesh.rotation.x = -Math.PI / 2;
  planeMesh.position.y = -0.05;
  villaGroup.add(planeMesh);

  scene.add(villaGroup);

  // Add a glowing structural coordinate grid beneath the model
  const gridHelper = new THREE.GridHelper(16, 16, 0xc5a880, 0x101935);
  gridHelper.position.y = 0.01;
  scene.add(gridHelper);

  // Dynamic geospatial particle storm (digital coordinate markers)
  const particleCount = 250;
  const particleGeometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 15; // X
    positions[i + 1] = Math.random() * 8;      // Y
    positions[i + 2] = (Math.random() - 0.5) * 15; // Z
  }

  particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const particleMaterial = new THREE.PointsMaterial({
    color: 0xc5a880,
    size: 0.08,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });

  particleSystem = new THREE.Points(particleGeometry, particleMaterial);
  scene.add(particleSystem);

  // Mouse tilt tracking
  container.addEventListener("mousemove", onMouseMove);
  
  // Run Animation Loop
  animate3D();
}

function onMouseMove(event) {
  const container = document.querySelector(".hero-canvas-container");
  const rect = container.getBoundingClientRect();
  // Map mouse coordinate from -1 to 1
  mouseX = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
  mouseY = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;
}

function animate3D() {
  requestAnimationFrame(animate3D);

  // Slow rotation
  if (villaGroup) {
    villaGroup.rotation.y += 0.002;
    
    // Lerp mouse coordinates for smooth lag-tilt effect
    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;
    
    // Tilt group slightly
    villaGroup.rotation.x = targetY * 0.15;
    villaGroup.rotation.z = -targetX * 0.1;
  }

  // Rotate particle system slowly in opposite direction
  if (particleSystem) {
    particleSystem.rotation.y -= 0.0008;
    particleSystem.rotation.x += 0.0003;
  }

  renderer.render(scene, camera);
}

function onWindowResize() {
  const container = document.querySelector(".hero-canvas-container");
  if (!container || !camera || !renderer) return;

  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);

// -------------------------------------------------------------
// CREDENTIALS INSPECTION HUB HANDLER
// -------------------------------------------------------------
function openCredential(credKey) {
  const cred = CREDENTIALS_DB[credKey];
  if (!cred) return;

  // Set Modal Info Panel Text
  document.getElementById("modal-info-title").innerText = cred.title;
  document.getElementById("modal-info-desc").innerText = cred.description;
  document.getElementById("modal-meta-authority").innerText = cred.authority;
  document.getElementById("modal-meta-number").innerText = cred.number;
  document.getElementById("modal-meta-scope").innerText = cred.scope;
  document.getElementById("modal-meta-location").innerText = cred.location;

  // Set simulated document viewer
  document.getElementById("doc-issuer-top").innerText = cred.authority.toUpperCase();
  document.getElementById("doc-subtitle").innerText = cred.subtitle;
  document.getElementById("doc-title").innerText = "SAKARIYAU JAMIU & CO";
  document.getElementById("doc-seal").innerText = cred.seal;
  document.getElementById("doc-number").innerText = cred.number;
  document.getElementById("doc-description").innerText = "This document cleared to certify complete regulatory audit adherence.";
  document.getElementById("doc-stamp").innerText = cred.stamp;

  // Open Modal Overlay
  document.getElementById("credential-modal").classList.add("active");
  document.body.style.overflow = "hidden"; // disable background scrolling
}

function closeCredentialModal(event, forceClose = false) {
  const modal = document.getElementById("credential-modal");
  // Close if clicked overlay backdrop or close button
  if (forceClose || event.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // enable scrolling
  }
}

// -------------------------------------------------------------
// PROPERTIES & LISTINGS CONTROLLER
// -------------------------------------------------------------

// Populate database from LocalStorage + Seeds
// Contentful Configuration Settings
// Fill these with your space's credentials once you create them
const CONTENTFUL_CONFIG = {
  spaceId: "", // e.g. "x1y2z3..."
  accessToken: "", // e.g. "aBcDeFg123..."
  environment: "master",
  contentTypeId: "property"
};

// Initialize Client (will be set if config is valid)
let contentfulClient = null;

// Populate database from Supabase, Contentful, or fallback to LocalStorage + Seeds
function initListingsEngine() {
  if (supabaseClient) {
    fetchListingsFromSupabase();
    return;
  }

  if (CONTENTFUL_CONFIG.spaceId && CONTENTFUL_CONFIG.accessToken) {
    try {
      contentfulClient = contentful.createClient({
        space: CONTENTFUL_CONFIG.spaceId,
        accessToken: CONTENTFUL_CONFIG.accessToken,
        environment: CONTENTFUL_CONFIG.environment || "master"
      });
      fetchListingsFromContentful();
      return;
    } catch (err) {
      console.error("Failed to initialize Contentful Client:", err);
    }
  }

  // Fallback if Contentful keys are not set
  initLocalStorageListings();
}

async function fetchListingsFromSupabase() {
  if (!supabaseClient) return;

  try {
    const { data, error } = await supabaseClient
      .from("properties")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    if (data && data.length > 0) {
      appListings = data.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        location: item.location,
        address: item.address,
        status: item.status,
        type: item.type,
        beds: item.beds,
        baths: item.baths,
        whatsapp: item.whatsapp,
        image: item.image_url,
        description: item.description
      }));
    } else {
      // If table is active but empty, we can show default properties
      appListings = [...DEFAULT_LISTINGS];
    }
    renderListings(appListings);
  } catch (err) {
    console.error("Error loading properties from Supabase:", err);
    showToast("Using offline properties (database error).");
    initLocalStorageListings();
  }
}

function initLocalStorageListings() {
  const storedListings = localStorage.getItem("sjc_listings");
  if (storedListings) {
    appListings = JSON.parse(storedListings);
  } else {
    appListings = [...DEFAULT_LISTINGS];
    localStorage.setItem("sjc_listings", JSON.stringify(appListings));
  }
  renderListings(appListings);
}

async function fetchListingsFromContentful() {
  if (!contentfulClient) return;

  try {
    const response = await contentfulClient.getEntries({
      content_type: CONTENTFUL_CONFIG.contentTypeId,
      order: "-sys.createdAt" // order by newest first
    });

    appListings = response.items.map(item => {
      const fields = item.fields;
      let imageUrl = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600";
      
      // Safe extraction of the media URL
      if (fields.image && fields.image.fields && fields.image.fields.file) {
        imageUrl = fields.image.fields.file.url;
        if (imageUrl.startsWith("//")) {
          imageUrl = "https:" + imageUrl;
        }
      }

      return {
        id: item.sys.id,
        title: fields.title || "Untitled Property",
        price: fields.price || "Contact for Price",
        location: fields.location || "Abuja",
        address: fields.address || "",
        status: fields.status || "Sale",
        type: fields.type || "Residential",
        beds: fields.beds ? parseInt(fields.beds) : null,
        baths: fields.baths ? parseInt(fields.baths) : null,
        whatsapp: fields.whatsapp || "2347038620904",
        image: imageUrl,
        description: fields.description || ""
      };
    });

    renderListings(appListings);
  } catch (error) {
    console.error("Error loading properties from Contentful API:", error);
    showToast("Using offline property listings.");
    initLocalStorageListings();
  }
}

// Render property listings in HTML container
function renderListings(listingsToRender) {
  const container = document.getElementById("listings-container");
  if (!container) return;

  container.innerHTML = "";

  if (listingsToRender.length === 0) {
    container.innerHTML = `
      <div class="no-listings">
        <i class="fa-solid fa-hotel"></i>
        <h3>No matching properties found</h3>
        <p>Try resetting filters or checking other locations.</p>
      </div>
    `;
    return;
  }

  listingsToRender.forEach(listing => {
    // Construct pre-filled WhatsApp message
    const msgText = encodeURIComponent(
      `Hello, I am interested in your property listing: "${listing.title}" located at ${listing.address}. Please provide more details.`
    );
    const whatsappLink = `https://wa.me/${listing.whatsapp}?text=${msgText}`;

    // Create listing card
    const card = document.createElement("div");
    card.className = "listing-card";
    
    // Bed / Bath indicators
    const bedsHtml = listing.beds ? `<div class="listing-detail-item"><i class="fa-solid fa-bed"></i> <span>${listing.beds}</span> Beds</div>` : '';
    const bathsHtml = listing.baths ? `<div class="listing-detail-item"><i class="fa-solid fa-shower"></i> <span>${listing.baths}</span> Baths</div>` : '';

    card.innerHTML = `
      <div class="listing-img-wrapper">
        <div class="listing-status-tag">FOR ${listing.status.toUpperCase()}</div>
        <div class="listing-type-tag">${listing.type.toUpperCase()}</div>
        <img src="${listing.image}" class="listing-img" alt="${listing.title}" onerror="this.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600'">
      </div>
      <div class="listing-card-body">
        <div class="listing-price">${listing.price}</div>
        <h3 class="listing-title">${listing.title}</h3>
        <div class="listing-location">
          <i class="fa-solid fa-location-dot"></i>
          <span>${listing.address}</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5; margin-top: 5px;">
          ${listing.description.substring(0, 110)}${listing.description.length > 110 ? '...' : ''}
        </p>
        ${(bedsHtml || bathsHtml) ? `<div class="listing-details">${bedsHtml}${bathsHtml}</div>` : ''}
      </div>
      <div class="listing-card-footer">
        <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
          <i class="fab fa-whatsapp"></i> Contact via WhatsApp
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

// Filter Listings
function applyFilters() {
  const statusVal = document.getElementById("filter-status").value;
  const typeVal = document.getElementById("filter-type").value;
  const locationVal = document.getElementById("filter-location").value;

  const filtered = appListings.filter(listing => {
    const statusMatch = statusVal === "all" || listing.status === statusVal;
    const typeMatch = typeVal === "all" || listing.type === typeVal;
    const locationMatch = locationVal === "all" || listing.location === locationVal;
    return statusMatch && typeMatch && locationMatch;
  });

  renderListings(filtered);
}

function resetFilters() {
  document.getElementById("filter-status").value = "all";
  document.getElementById("filter-type").value = "all";
  document.getElementById("filter-location").value = "all";
  renderListings(appListings);
}

// -------------------------------------------------------------
// ADMIN PROPERTY UPLOADER (FORM LOGIC)
// -------------------------------------------------------------

// Capture file select and load to base64
function previewUploadImage(input) {
  const file = input.files[0];
  if (!file) return;

  uploadFileObject = file; // Store raw file object for Supabase upload

  const reader = new FileReader();
  reader.onload = function(e) {
    uploadBase64Image = e.target.result;
    
    // Update preview container
    const previewImg = document.getElementById("upload-preview-img");
    previewImg.src = uploadBase64Image;
    previewImg.style.display = "block";

    // Sync card preview
    document.getElementById("prev-img").src = uploadBase64Image;
  };
  reader.readAsDataURL(file);
}

// Real-time synchronization of form inputs to Preview card
function setupRealTimePreview() {
  const titleInput = document.getElementById("p-title");
  const priceInput = document.getElementById("p-price");
  const addressInput = document.getElementById("p-address");
  const statusSelect = document.getElementById("p-status");
  const typeSelect = document.getElementById("p-type");
  const bedsInput = document.getElementById("p-beds");
  const bathsInput = document.getElementById("p-baths");

  if (!titleInput) return; // Not on the DOM yet or loaded asynchronously

  titleInput.addEventListener("input", (e) => {
    document.getElementById("prev-title").innerText = e.target.value || "Property Listing Title";
  });
  priceInput.addEventListener("input", (e) => {
    document.getElementById("prev-price").innerText = e.target.value || "₦0.00";
  });
  addressInput.addEventListener("input", (e) => {
    document.getElementById("prev-address").innerText = e.target.value || "Property Location Address";
  });
  statusSelect.addEventListener("change", (e) => {
    document.getElementById("prev-status").innerText = "FOR " + e.target.value.toUpperCase();
  });
  typeSelect.addEventListener("change", (e) => {
    document.getElementById("prev-type").innerText = e.target.value.toUpperCase();
  });
  bedsInput.addEventListener("input", (e) => {
    document.getElementById("prev-beds").innerText = e.target.value || "0";
  });
  bathsInput.addEventListener("input", (e) => {
    document.getElementById("prev-baths").innerText = e.target.value || "0";
  });
}

// Handle Add Property form submission
async function handleFormSubmit(event) {
  event.preventDefault();

  const title = document.getElementById("p-title").value;
  const price = document.getElementById("p-price").value;
  const location = document.getElementById("p-location").value;
  const status = document.getElementById("p-status").value;
  const type = document.getElementById("p-type").value;
  const address = document.getElementById("p-address").value;
  const whatsapp = document.getElementById("p-whatsapp").value || "2347038620904";
  const beds = parseInt(document.getElementById("p-beds").value) || null;
  const baths = parseInt(document.getElementById("p-baths").value) || null;
  const description = document.getElementById("p-desc").value;

  // Validate image uploaded
  if (!uploadBase64Image && !uploadFileObject) {
    showToast("Please upload an image visual before saving.");
    return;
  }

  // Loading state for button
  const submitBtn = event.target.querySelector("button[type='submit']");
  const originalBtnText = submitBtn.innerHTML;
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';

  try {
    let finalImageUrl = uploadBase64Image;

    if (supabaseClient) {
      if (!uploadFileObject) {
        throw new Error("Please select an image file to upload.");
      }

      // Generate a unique safe filename
      const fileExt = uploadFileObject.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;

      // Upload file to bucket
      const { data: uploadData, error: uploadError } = await supabaseClient
        .storage
        .from("property-photos")
        .upload(fileName, uploadFileObject, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabaseClient
        .storage
        .from("property-photos")
        .getPublicUrl(fileName);

      if (!urlData || !urlData.publicUrl) {
        throw new Error("Failed to generate public URL for uploaded photo.");
      }
      finalImageUrl = urlData.publicUrl;

      // Insert listing into properties table
      const { data: insertData, error: insertError } = await supabaseClient
        .from("properties")
        .insert([{
          title: title,
          price: price,
          location: location,
          address: address,
          status: status,
          type: type,
          beds: beds,
          baths: baths,
          whatsapp: whatsapp,
          image_url: finalImageUrl,
          description: description
        }]);

      if (insertError) throw insertError;

      // Re-fetch lists from Supabase so the client immediately sees it
      await fetchListingsFromSupabase();

    } else {
      // LocalStorage Fallback Flow
      const newListing = {
        id: "l-custom-" + Date.now(),
        title: title,
        price: price,
        location: location,
        address: address,
        status: status,
        type: type,
        beds: beds,
        baths: baths,
        whatsapp: whatsapp,
        image: finalImageUrl,
        description: description
      };

      appListings.unshift(newListing); // prepend to top
      localStorage.setItem("sjc_listings", JSON.stringify(appListings));
      renderListings(appListings);
    }

    // Reset Form
    document.getElementById("add-listing-form").reset();
    uploadBase64Image = "";
    uploadFileObject = null;
    document.getElementById("upload-preview-img").style.display = "none";
    document.getElementById("upload-preview-img").src = "";
    
    // Reset Card Preview defaults
    document.getElementById("prev-title").innerText = "Luxury Villa Title";
    document.getElementById("prev-price").innerText = "₦120,000,000";
    document.getElementById("prev-address").innerText = "Guzape District, Abuja";
    document.getElementById("prev-status").innerText = "FOR SALE";
    document.getElementById("prev-type").innerText = "RESIDENTIAL";
    document.getElementById("prev-beds").innerText = "4";
    document.getElementById("prev-baths").innerText = "5";
    document.getElementById("prev-img").src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600";

    // Alert success
    showToast("Listing published successfully!");

    // Redirect to listings view to see the new property
    setTimeout(() => {
      navigate("listings");
    }, 1000);

  } catch (err) {
    console.error("Failed to save property:", err);
    showToast(`Error: ${err.message || "Failed to publish property."}`);
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  }
}

// -------------------------------------------------------------
// CONTACT / ACCORDION MODULE
// -------------------------------------------------------------
function toggleAccordion(header) {
  const item = header.parentElement;
  
  // Close other open accordions
  const activeItems = document.querySelectorAll(".office-accordion-item.active");
  activeItems.forEach(el => {
    if (el !== item) {
      el.classList.remove("active");
    }
  });

  // Toggle clicked accordion
  item.classList.toggle("active");
}

function handleContactSubmit(event) {
  event.preventDefault();
  
  // Capture inputs (mock transmission for frontend validity)
  const name = document.getElementById("c-name").value;
  const subject = document.getElementById("c-subject").value;

  // Reset Form
  event.target.reset();

  showToast(`Thank you ${name}. Your request regarding "${subject}" has been received!`);
}

// Display alert notification toaster
function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const toastMsg = document.getElementById("toast-message");
  
  toastMsg.innerText = message;
  toast.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 3500);
}

// -------------------------------------------------------------
// ADMIN LOGIN & AUTH CONTROLLER
// -------------------------------------------------------------
const ADMIN_PASSWORD_HASH = "jamiu2026"; // Default login password

async function checkAdminAuth() {
  const loginView = document.getElementById("admin-login-view");
  const dashboardView = document.getElementById("admin-dashboard-view");
  
  if (!loginView || !dashboardView) return;

  // Check Supabase session first
  if (supabaseClient) {
    try {
      const { data: { session } } = await supabaseClient.auth.getSession();
      if (session) {
        loginView.style.display = "none";
        dashboardView.style.display = "block";
        return;
      }
    } catch (err) {
      console.error("Failed to get session:", err);
    }
  }

  // Fallback to Local Session Storage
  const isLoggedIn = sessionStorage.getItem("sjc_admin_logged_in") === "true";
  if (isLoggedIn) {
    loginView.style.display = "none";
    dashboardView.style.display = "block";
  } else {
    loginView.style.display = "flex";
    dashboardView.style.display = "none";
  }
}

async function handleAdminLogin(event) {
  event.preventDefault();
  const passwordInput = document.getElementById("admin-password");
  if (!passwordInput) return;

  const submitBtn = event.target.querySelector("button[type='submit']");
  const originalBtnText = submitBtn.innerHTML;

  if (supabaseClient) {
    const emailInput = document.getElementById("admin-email");
    if (!emailInput || !emailInput.value) {
      showToast("Please enter an email address.");
      return;
    }

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Authenticating...';

    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: emailInput.value,
        password: passwordInput.value
      });

      if (error) throw error;

      passwordInput.value = "";
      await checkAdminAuth();
      showToast("Authentication successful!");
    } catch (err) {
      console.error("Authentication failed:", err);
      showToast(`Login failed: ${err.message || "Invalid credentials."}`);
      passwordInput.value = "";
      passwordInput.focus();
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  } else {
    // Local offline password authentication
    if (passwordInput.value === ADMIN_PASSWORD_HASH) {
      sessionStorage.setItem("sjc_admin_logged_in", "true");
      passwordInput.value = "";
      await checkAdminAuth();
      showToast("Authentication successful!");
    } else {
      showToast("Incorrect password. Please try again.");
      passwordInput.value = "";
      passwordInput.focus();
    }
  }
}

async function handleAdminLogout() {
  if (supabaseClient) {
    try {
      await supabaseClient.auth.signOut();
    } catch (err) {
      console.error("Sign out failed:", err);
    }
  }
  sessionStorage.removeItem("sjc_admin_logged_in");
  await checkAdminAuth();
  showToast("Logged out successfully.");
}

// -------------------------------------------------------------
// MAIN INITIALIZATION BINDING
// -------------------------------------------------------------
document.addEventListener("DOMContentLoaded", async () => {
  // Configure Auth UI elements depending on Supabase status
  const emailGroup = document.getElementById("admin-email-group");
  const emailInput = document.getElementById("admin-email");
  if (emailGroup && emailInput) {
    if (supabaseClient) {
      emailGroup.style.display = "block";
      emailInput.required = true;
      
      const loginParagraph = document.querySelector("#admin-login-view .login-header p");
      if (loginParagraph) {
        loginParagraph.innerText = "Enter credentials to manage listings";
      }
    } else {
      emailGroup.style.display = "none";
      emailInput.required = false;
    }
  }

  // 1. Setup default path and navigate to home or current hash
  const currentHash = window.location.hash.substring(1) || "home";
  navigate(currentHash);

  // 2. Setup listings engine
  initListingsEngine();

  // 3. Setup Three.js WebGL canvas visualizer
  init3DVisual();

  // 4. Setup form fields sync to card previews
  setupRealTimePreview();
});
