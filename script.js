/* ============================================
   SRI KUMARAN XEROX & PRINTERS — Core JavaScript
   Based on Dream Arts Template
   ============================================ */

// ─── Services Data ───────────────────────────
const PRODUCTS = [
/*  {
    id: 1,
    name: "Photo Frames",
    image: "img/pic8.jpeg",
    category: "Frames",
    price: 200,
    originalPrice: 400,
    badge: null,
    description: "Beautiful photo frames in various styles - Modern, Classic, and Wooden. Perfect for home and office. Includes glass, matting, and hanging hooks.",
    sizes: ["4 x 6 inch", "5 x 7 inch", "8 x 10 inch", "12 x 18 inch", "Custom Size"],
    icon: "🖼️",
    tags: ["frames", "photo frames", "custom frames"],
    rating: 4.6,
    reviews: 200,
    featured: true,
    customOptions: { type: "photo", upload: true },
    details: { service: "Photo Frames", styles: "Modern/Classic/Wooden", includes: "Glass, Matting, Hook" }
  },
  */
  {
    id: 11,
    name: "Photo Frame - 6×4 inch",
    image: "https://www.thezappybox.com/cdn/shop/collections/personalised_frames.jpg?v=1740134528",
    images: [
      "https://www.thezappybox.com/cdn/shop/collections/personalised_frames.jpg?v=1740134528",
      "https://5.imimg.com/data5/SELLER/Default/2023/6/321364866/KI/NS/YO/181670876/img20230630143449-1-.jpg",
      "https://sellerbazaar.in/wp-content/uploads/2025/01/FRAME-4X6-WHITE-new-1.jpg"

    ],
    category: "Frames",
    price: 100,
    originalPrice: 200,
    badge: null,
    description: "Premium quality photo frame with glitter lamination finishing. Features 1 inch frame with elegant design. Perfect for your favorite photos.",
    sizes: ["Standard"],
    icon: "🖼️",
    tags: ["photo frame", "6x4 frame", "glitter frame"],
    rating: 4.8,
    reviews: 50,
    featured: false,
    customOptions: { type: "photo", upload: true },
    details: { size: "6×4 inch", weight: "200 gm", finishing: "Glitter Lamination", frame: "1 Inch Frame" }
  },
  {
    id: 16,
    name: "God's Photo Frame - All Custom Sizes",
    image: "img/n2.png",
    images: [
      
      "img/n2.png",
      "img/n3.png",
      "img/n4.png"
    ],
    category: "Frames",
    price: "",
    originalPrice: "",
    badge: null,
    description: "Premium quality photo frame with glitter lamination finishing. Features 1 inch frame with elegant design. Perfect for your favorite photos.",
    sizes: ["6×4", "12×8", "18×12", "20×24"],
    sizePrices: {
      "6×4": 100,
      "12×8": 250,
      "18×12": 500,
      "20×24": 1600
    },
    icon: "🖼️",
    tags: ["photo frame", "god frame", "custom sizes", "glitter frame"],
    rating: 4.8,
    reviews: 50,
    featured: false,
    customOptions: { type: "photo", upload: true },
    details: { finishing: "Glitter Lamination", frame: "1 Inch Frame" }
  },
  {
    id: 12,
    name: "Photo Frame - 12×8 inch",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/9/452422222/YR/OA/YE/143711820/painting-photo-frames-500x500.jpg",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2024/9/452422222/YR/OA/YE/143711820/painting-photo-frames-500x500.jpg",
      "https://m.media-amazon.com/images/I/71E674BYOCL._AC_UF894,1000_QL80_.jpg",
      "https://prints.gkvale.com/wp-content/uploads/2020/04/1GKV-8x12-531-9-BK-P1-1200Px.jpg"
      
    ],
    category: "Frames",
    price: 300,
    originalPrice: 600,
    badge: null,
    description: "Premium quality photo frame with glitter lamination finishing. Features 1 inch frame with elegant design. Perfect for your favorite photos.",
    sizes: ["Standard"],
    icon: "🖼️",
    tags: ["photo frame", "12x8 frame", "glitter frame"],
    rating: 4.8,
    reviews: 45,
    featured: true,
    customOptions: { type: "photo", upload: true },
    details: { size: "12×8 inch", weight: "400 gm", finishing: "Glitter Lamination", frame: "1 Inch Frame" }
  },
  {
    id: 13,
    name: "Photo Frame - 18×12 inch",
    image: "https://m.media-amazon.com/images/I/71S0HjA3cVL.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71S0HjA3cVL.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2023/2/BK/PL/BK/27594260/synthetic-photo-frame-molding-500x500.jpg",
      "https://images.jdmagicbox.com/quickquotes/images_main/customised-photo-frame-12x18-inch-2223611113-ki0pht7w.jpg"
  
    ],
    category: "Frames",
    price: 500,
    originalPrice: 1000,
    badge: null,
    description: "Premium quality photo frame with glitter lamination finishing. Features 1 inch frame with elegant design. Perfect for your favorite photos.",
    sizes: ["Standard"],
    icon: "🖼️",
    tags: ["photo frame", "18x12 frame", "glitter frame"],
    rating: 4.9,
    reviews: 30,
    featured: false,
    customOptions: { type: "photo", upload: true },
    details: { size: "18×12 inch", weight: "750 gm", finishing: "Glitter Lamination", frame: "1 Inch Frame" }
  },
  {
    id: 14,
    name: "Photo Frame - 20×24 inch",
    image: "https://m.media-amazon.com/images/I/71mGJm1yd0L.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71mGJm1yd0L.jpg",
      "https://m.media-amazon.com/images/I/71cR+VbeeGL._AC_SX679_.jpg",
      "https://www.modernmemorydesign.com/cdn/shop/files/ef75196092cb41c905087b9d34f9be079d2ee272_33c58bb8-21b5-4950-b9a4-13e72635497f_512x512.jpg?v=1759254949"
     
    ],
    category: "Frames",
    price: 1600,
    originalPrice: 2000,
    badge: "Premium",
    description: "Premium quality photo frame with glitter lamination finishing. Features 1 inch frame with elegant design. Perfect for your favorite photos.",
    sizes: ["Standard"],
    icon: "🖼️",
    tags: ["photo frame", "20x24 frame", "large frame", "glitter frame"],
    rating: 5.0,
    reviews: 20,
    featured: true,
    customOptions: { type: "photo", upload: true },
    details: { size: "20×24 inch", weight: "1.250 kg", finishing: "Glitter Lamination", frame: "1 Inch Frame" }
  },
  {
    id: 2,
    name: "Backlight Frames - 8x12 inch",
    image: "https://printposters.in/public/uploads/canvas-prints/1751194793.webp",
    images: [
      "https://printposters.in/public/uploads/canvas-prints/1751194793.webp"
    ],
    category: "Frames",
    price: 800,
    originalPrice: 1200,
    badge: null,
    description: "Professional backlight frames with LED lighting for displays, menu boards, and signage. Enhances colors and creates stunning visual impact.",
    sizes: ["A4 (210 x 297 mm)", "A3 (297 x 420 mm)", "Custom Size"],
    icon: "💡",
    tags: ["backlight", "light box", "display"],
    rating: 4.5,
    reviews: 80,
    featured: false,
    customOptions: { type: "design", upload: true },
    details: { service: "Backlight Frames", lighting: "LED Backlight", usage: "Display/Signage" }
  },
/*
  {
    id: 3,
    name: "Stickers (Any Shape with Digital Scoring)",
    image: "https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_2.0,f_auto,q_auto:good,w_700/India%20LOB/Stickers/Custom%20Stickers/IN-Custom-Stickers-overview",
    category: "Stickers",
    price: 5,
    originalPrice: 8,
    badge: null,
    description: "Custom stickers printed in any shape with digital scoring. Perfect for branding, product labels, event badges, and promotional items.",
    sizes: ["Small (50 pcs)", "Medium (25 pcs)", "Large (10 pcs)", "Custom"],
    icon: "🏷️",
    tags: ["stickers", "labels", "custom stickers"],
    rating: 4.7,
    reviews: 250,
    featured: true,
    customOptions: { type: "design", upload: true },
    details: { service: "Custom Stickers", shapes: "Any shape with digital scoring", material: "Vinyl/Paper/Clear", minOrder: "10 pcs" }
  },
  
  {
    id: 4,
    name: "Lamination (Matt, Glossy, Glitter, 3D)",
    image: "img/pic6.jpeg",
    category: "Lamination",
    price: 25,
    originalPrice: 35,
    badge: null,
    description: "Professional lamination services in various finishes - Matt, Glossy, Glitter, and 3D. Protects documents and enhances appearance.",
    sizes: ["A4", "A3", "Legal", "Custom Size"],
    icon: "✨",
    tags: ["lamination", "matt", "glossy", "glitter"],
    rating: 4.8,
    reviews: 350,
    featured: false,
    customOptions: null,
    details: { service: "Lamination", finishes: "Matt/Glossy/Glitter/3D", sizes: "A4, A3, Legal" }
  },
  {
    id: 5,
    name: "T-shirt Printing",
    image: "https://static.yourprint.in/new-admin-ajax.php?action=resize_outer_image&cfcache=all&url=https%3A%2F%2Fwww.yourprint.in%2Fwp-content%2Fuploads%2F2022%2F03%2FGrey_Black-2.jpg&resizeTo=450&format=webp",
    category: "Custom Gifts",
    price: 300,
    originalPrice: 400,
    badge: "Popular",
    description: "Custom t-shirt printing with your design. Perfect for events, corporate teams, school uniforms, and promotional giveaways. Available in multiple colors and sizes.",
    sizes: ["Small (S)", "Medium (M)", "Large (L)", "XL", "XXL"],
    icon: "👕",
    tags: ["t-shirt", "custom printing", "apparel"],
    rating: 4.6,
    reviews: 120,
    featured: true,
    customOptions: { type: "tshirt", upload: true, options: ["Single Color Print", "Multi Color Print", "Full Print"] },
    details: { service: "T-shirt Printing", types: "Cotton/Polyester", print: "Screen/Digital", minOrder: "10 pieces" }
  },*/
  {
    id: 6,
    name: "White Mug Printing",
    image: "https://www.giftopai.in/wp-content/uploads/2017/12/personalised-white-mug-for-couples_1.webp",
    images: [
      "https://www.giftopai.in/wp-content/uploads/2017/12/personalised-white-mug-for-couples_1.webp",
      "https://www.photoland.in/wp-content/uploads/2025/04/white-photo-mug_1_b-768x768.jpg",
      "https://cdn.canvaschamp.in/static/images/landingpage/thumbslider/hearthandlewhitemugs/heart-handle-white-mugs-slider2.jpg"
    ],
    category: "Custom Gifts",
    price: 200,
    originalPrice: 300,
    badge: null,
    description: "Personalized white mug printing with your photo or design. Perfect for gifts, corporate giveaways, and events.",
    sizes: ["Standard (11 oz)"],
    icon: "☕",
    tags: ["mug", "white mug", "custom mug", "gift"],
    rating: 4.7,
    reviews: 150,
    featured: false,
    customOptions: { type: "mug", upload: true, options: ["Single Side", "Both Sides"] },
    details: { service: "White Mug Printing", material: "Ceramic", print: "Single/Both Sides", minOrder: "1 piece" }
  },
  {
    id: 15,
    name: "Magic Mug Printing",
    image: "img/pic15.avif",
    images: [
      "img/pic15.avif",
      "https://m.media-amazon.com/images/I/61BsH0DdarL._AC_UF1000,1000_QL80_.jpg",
      "https://www.apnagift.in/wp-content/uploads/2024/08/Getexciting-Black-CustomizedPersonalized-Magic-Mug-with-Photo-Logo-Text-Quotes-Gifts-for-Birthday-Anniversary-Valentines-Day-Sis-Bro-Colour-Changing-1.jpg"
    ],
    category: "Custom Gifts",
    price: 300,
    originalPrice: 400,
    badge: "Popular",
    description: "Magic mug - your photo appears when hot liquid is poured! Perfect for unique and surprising gifts.",
    sizes: ["Standard (11 oz)"],
    icon: "✨",
    tags: ["mug", "magic mug", "heat changing", "gift"],
    rating: 4.9,
    reviews: 200,
    featured: true,
    customOptions: { type: "mug", upload: true },
    details: { service: "Magic Mug Printing", type: "Heat Changing Coating", print: "Single Side", minOrder: "1 piece" }
  },
  {
    id: 7,
    name: "Keychain - Single Side",
    image: "img/pic11.jpeg",
    images: [
      "img/pic11.jpeg",
      "img/pic9.jpeg",
      "img/pic10.jpeg"
    ],
    category: "Custom Gifts",
    price: 100,
    originalPrice: 200,
    badge: null,
    description: "Custom keychain printing with your photo or design on single side. Perfect for promotions, events, and personalized gifts.",
    sizes: ["Round (38mm)", "Square (40mm)", "Rectangle"],
    icon: "🔑",
    tags: ["keychain", "custom keychain", "single side", "promo"],
    rating: 4.5,
    reviews: 80,
    featured: false,
    customOptions: { type: "keychain", upload: true },
    details: { service: "Keychain Printing", side: "Single Side", material: "Plastic/Acrylic", minOrder: "1 piece" }
  },
  {
    id: 17,
    name: "Keychain - Double Side",
    image: "https://themttags.com/wp-content/uploads/2024/02/Metal-Keychain-DS-001-e1708435237701.jpg",
    images: [
      "https://themttags.com/wp-content/uploads/2024/02/Metal-Keychain-DS-001-e1708435237701.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2024/7/433228020/XX/HU/LD/143316515/double-side-wooden-sublimation-keychain.jpg",
      "https://m.media-amazon.com/images/I/717ijzh3nOL._AC_UY1100_.jpg"
    ],
    category: "Custom Gifts",
    price: 125,
    originalPrice: 250,
    badge: "Popular",
    description: "Custom keychain printing with your photo or design on both sides. Perfect for promotions, events, and personalized gifts.",
    sizes: ["Round (38mm)", "Square (40mm)", "Rectangle"],
    icon: "🔑",
    tags: ["keychain", "custom keychain", "double side", "both sides", "promo"],
    rating: 4.7,
    reviews: 100,
    featured: true,
    customOptions: { type: "keychain", upload: true },
    details: { service: "Keychain Printing", side: "Double Side", material: "Plastic/Acrylic", minOrder: "1 piece" }
  },
  {
    id: 8,
    name: "Rubber Stamp Making",
    image: "https://printo-s3.dietpixels.net/Soldout/Stamps/Custom-Rubber-Stamps_1775473396.jpg?quality=70&format=webp&w=640",
    images: [
      "https://printo-s3.dietpixels.net/Soldout/Stamps/Custom-Rubber-Stamps_1775473396.jpg?quality=70&format=webp&w=640"
    ],
    category: "Custom Gifts",
    price: 100,
    originalPrice: 150,
    badge: null,
    description: "Professional rubber stamps for office, business, and personal use. Available in Self-ink, Regular, and Dater types.",
    sizes: ["Small (2.5 cm)", "Medium (3.5 cm)", "Large (5 cm)", "Custom Size"],
    icon: "🔴",
    tags: ["rubber stamp", "stamp", "office"],
    rating: 4.8,
    reviews: 220,
    featured: false,
    customOptions: { type: "text", upload: false, placeholder: "Enter company name / text for stamp" },
    details: { service: "Rubber Stamp Making", types: "Self-ink/Regular/Dater", turnaround: "Same day" }
  }
];

const WHATSAPP_NUMBER = "916385938660";
const BUSINESS_NAME = "Sri Kumaran Xerox & Printers";
const BUSINESS_EMAIL = "srikumaranprinters2012@gmail.com";
const BUSINESS_ADDRESS = "Doctor Ponnusamy Complex, Puthu Dharapuram Road, Palani - 624 601, Tamil Nadu";

// ─── Cart Utilities ───────────────────────────
const Cart = {
  get() {
    return JSON.parse(localStorage.getItem('sk_cart') || '[]');
  },
  save(items) {
    localStorage.setItem('sk_cart', JSON.stringify(items));
    Cart.updateBadge();
    window.dispatchEvent(new Event('cartUpdated'));
  },
  add(productId, qty = 1, size = null, customData = null, priceOverride = null) {
    const cart = Cart.get();
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const itemPrice = priceOverride || product.price;
    const key = size ? `${productId}_${size}` : `${productId}`;
    const existing = cart.find(i => i.key === key);

    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({
        key,
        productId,
        name: product.name,
        category: product.category,
        price: itemPrice,
        icon: product.icon,
        image: product.image,
        size: size || (product.sizes ? product.sizes[0] : null),
        qty,
        customData: customData
      });
    }
    Cart.save(cart);
    showToast(`${product.name} added to cart!`, '🛒');
  },
  remove(key) {
    const cart = Cart.get().filter(i => i.key !== key);
    Cart.save(cart);
  },
  updateQty(key, qty) {
    const cart = Cart.get();
    const item = cart.find(i => i.key === key);
    if (item) {
      if (qty <= 0) { Cart.remove(key); return; }
      item.qty = qty;
      Cart.save(cart);
    }
  },
  total() {
    return Cart.get().reduce((sum, i) => sum + i.price * i.qty, 0);
  },
  count() {
    return Cart.get().reduce((sum, i) => sum + i.qty, 0);
  },
  clear() {
    Cart.save([]);
  },
  updateBadge() {
    const count = Cart.count();
    document.querySelectorAll('.cart-count').forEach(el => {
      el.textContent = count;
      el.classList.toggle('hidden', count === 0);
    });
  }
};

// ─── Nav Scroll ───────────────────────────────
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });
  }

  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  Cart.updateBadge();

  // Back to top
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    });
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ─── Toast ────────────────────────────────────
let toastTimer;
function showToast(message, icon = '✓') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span class="toast-icon"></span><span class="toast-msg"></span><span class="toast-close">✕</span>`;
    document.body.appendChild(toast);
    toast.querySelector('.toast-close').addEventListener('click', () => {
      toast.classList.remove('show');
    });
  }
  toast.querySelector('.toast-icon').textContent = icon;
  toast.querySelector('.toast-msg').textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

// ─── Format Price ─────────────────────────────
function formatPrice(p) {
  return '₹' + p.toLocaleString('en-IN');
}

// ─── Product Card HTML ────────────────────────
function productCardHTML(product) {
  const showPrice = product.sizePrices ? '' : `
    <div class="product-card-price">
      ${product.originalPrice ? `<s class="og-price">${formatPrice(product.originalPrice)}</s>` : ''}
      <span class="your-price">${formatPrice(product.price)}</span>
    </div>
  `;
  return `
    <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'" style="cursor:pointer;">
      <div class="product-card-image">
        <div class="product-img-wrap">
          <div class="product-img-emoji">${product.icon}</div>
          <img src="${product.image}" alt="${product.name}" class="product-img" onerror="this.style.display='none';" />
        </div>
        ${product.badge ? `<span class="product-card-badge ${product.badge === 'New' ? 'new' : ''}">${product.badge}</span>` : ''}
        <div class="product-card-actions" onclick="event.stopPropagation();">
          <button class="btn btn-primary btn-sm" onclick="Cart.add(${product.id});">Add to Cart</button>
          <a href="product.html?id=${product.id}" class="btn btn-outline btn-sm">Details</a>
        </div>
      </div>
      <div class="product-card-body">
        <div class="product-card-category">${product.category}</div>
        <div class="product-card-name">${product.name}</div>
        ${showPrice}
      </div>
    </div>
  `;
}

// ─── Quick Buy ────────────────────────────────
function quickBuy(productId, size = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  Cart.clear();
  
  const selectedSize = size || (product.sizes ? product.sizes[0] : 'Standard');
  Cart.add(productId, 1, selectedSize);
  
  window.location.href = 'checkout.html';
}

// ─── WhatsApp Checkout ────────────────────────
function checkoutViaWhatsApp() {
  const cart = Cart.get();
  if (!cart.length) {
    showToast('Your enquiry list is empty!', '⚠️');
    return;
  }

  let msg = `*Hello Sri Kumaran Xerox!* 🖨️\n\nI'd like to enquire about:\n\n`;
  cart.forEach(item => {
    msg += `• *${item.name}*\n  Size: ${item.size || 'Standard'} | Qty: ${item.qty} | ${formatPrice(item.price * item.qty)}\n\n`;
  });
  msg += `*Total: ${formatPrice(Cart.total())}*\n\nPlease provide quote and availability. Thank you!`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ─── Init ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
});