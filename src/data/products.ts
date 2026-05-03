export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    sizes: string[];
    category: "kurta-pajama" | "turban" | "ladies-suits" | "pant-shirts" | "new-arrivals" | "sale";
    image: string;
    secondImage?: string;
    tags?: string[];
    fabric?: string;
    color?: string;
}

export const WHATSAPP_NUMBER = "918307473499";

export const getWhatsAppLink = (product: Product) => {
    const message = encodeURIComponent(
        `Hi! I'm interested in "${product.name}" (₹${product.price.toLocaleString("en-IN")}).\nSize: \nCould you share more details?`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};

export const products: Product[] = [
    // ─── Kurta Pajama ───
    {
        id: "kp1",
        name: "Classic Black Kurta Pajama",
        description: "A minimal, premium cotton blend kurta pajama in deep black. Modern cut for a sleek silhouette.",
        price: 4999,
        sizes: ["S", "M", "L", "XL", "XXL"],
        category: "kurta-pajama",
        image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1000&auto=format&fit=crop",
        secondImage: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=1000&auto=format&fit=crop",
        tags: ["Bestseller", "Trending"],
        fabric: "Premium Cotton Blend",
        color: "Black",
    },
    {
        id: "kp2",
        name: "Ivory Silk Kurta",
        description: "Elegant ivory silk kurta perfect for daytime events and festive gatherings.",
        price: 6999,
        originalPrice: 8999,
        sizes: ["M", "L", "XL"],
        category: "kurta-pajama",
        image: "https://images.unsplash.com/photo-1582565431698-35684d0b13bf?q=80&w=1000&auto=format&fit=crop",
        secondImage: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1000&auto=format&fit=crop",
        tags: ["Festive"],
        fabric: "Raw Silk",
        color: "Ivory",
    },
    {
        id: "kp3",
        name: "Charcoal Grey Embroidered Kurta",
        description: "Subtle tone-on-tone embroidery on a sharp charcoal grey kurta pajama set.",
        price: 8599,
        sizes: ["S", "M", "L", "XL"],
        category: "kurta-pajama",
        image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=1000&auto=format&fit=crop",
        tags: ["New Arrival"],
        fabric: "Linen Blend",
        color: "Charcoal",
    },

    // ─── Turban ───
    {
        id: "t1",
        name: "Royal Black Turban",
        description: "Premium cotton turban cloth in deep black for a powerful, traditional look.",
        price: 1499,
        sizes: ["Standard", "Large"],
        category: "turban",
        image: "https://images.unsplash.com/photo-1613038634127-d4a9ec0ed154?q=80&w=1000&auto=format&fit=crop",
        secondImage: "https://images.unsplash.com/photo-1582565431698-35684d0b13bf?q=80&w=1000&auto=format&fit=crop",
        tags: ["Essential"],
        fabric: "Pure Voile Cotton",
        color: "Black",
    },
    {
        id: "t2",
        name: "Crimson Red Turban",
        description: "Vibrant crimson red turban cloth perfect for weddings and festive occasions.",
        price: 1699,
        sizes: ["Standard", "Large"],
        category: "turban",
        image: "https://images.unsplash.com/photo-1582565431698-35684d0b13bf?q=80&w=1000&auto=format&fit=crop",
        tags: ["Wedding"],
        fabric: "Rubia Cotton",
        color: "Red",
    },

    // ─── Ladies Suits ───
    {
        id: "ls1",
        name: "Midnight Black Salwar Kameez",
        description: "Sleek and modern black salwar kameez with minimal embroidery.",
        price: 7999,
        sizes: ["S", "M", "L", "XL"],
        category: "ladies-suits",
        image: "https://images.unsplash.com/photo-1610118331165-373307b227eb?q=80&w=1000&auto=format&fit=crop",
        secondImage: "https://images.unsplash.com/photo-1583391733959-f199b19e27c1?q=80&w=1000&auto=format&fit=crop",
        tags: ["Bestseller", "New Arrival"],
        fabric: "Georgette",
        color: "Black",
    },
    {
        id: "ls2",
        name: "Pastel Elegance Suit",
        description: "A soft pastel tone suit with delicate threadwork, ideal for daytime events.",
        price: 9599,
        originalPrice: 12999,
        sizes: ["M", "L", "XL", "XXL"],
        category: "ladies-suits",
        image: "https://images.unsplash.com/photo-1583391733959-f199b19e27c1?q=80&w=1000&auto=format&fit=crop",
        tags: ["Festive"],
        fabric: "Silk Blend",
        color: "Pastel Pink",
    },
    {
        id: "ls3",
        name: "Monochrome Geometric Anarkali",
        description: "Bold black and white geometric patterns on a flowy anarkali silhouette.",
        price: 11999,
        sizes: ["S", "M", "L"],
        category: "ladies-suits",
        image: "https://images.unsplash.com/photo-1610118331165-373307b227eb?q=80&w=1000&auto=format&fit=crop",
        tags: ["Trending"],
        fabric: "Cotton Silk",
        color: "Monochrome",
    },

    // ─── Pant Shirts ───
    {
        id: "ps1",
        name: "Crisp White Formal Shirt",
        description: "The essential crisp white shirt. Tailored for a sharp, modern fit.",
        price: 2999,
        sizes: ["38", "40", "42", "44"],
        category: "pant-shirts",
        image: "https://images.unsplash.com/photo-1594938298596-39e51dd617be?q=80&w=1000&auto=format&fit=crop",
        secondImage: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1000&auto=format&fit=crop",
        tags: ["Essential"],
        fabric: "100% Egyptian Cotton",
        color: "White",
    },
    {
        id: "ps2",
        name: "Charcoal Tailored Trousers",
        description: "Perfectly tailored charcoal grey trousers. A versatile addition to any wardrobe.",
        price: 3999,
        sizes: ["30", "32", "34", "36"],
        category: "pant-shirts",
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1000&auto=format&fit=crop",
        tags: ["Formal"],
        fabric: "Wool Blend",
        color: "Charcoal Grey",
    },
    {
        id: "ps3",
        name: "Navy Blue Casual Shirt",
        description: "A relaxed navy blue shirt for an effortless, smart-casual look.",
        price: 2499,
        originalPrice: 3499,
        sizes: ["38", "40", "42", "44"],
        category: "pant-shirts",
        image: "https://images.unsplash.com/photo-1594938298596-39e51dd617be?q=80&w=1000&auto=format&fit=crop",
        tags: ["Casual", "Sale"],
        fabric: "Linen",
        color: "Navy Blue",
    }
];

export const getProductsByCategory = (category: string): Product[] => {
    if (category === "new-arrivals") return products.filter(p => p.tags?.includes("New Arrival") || p.tags?.includes("Trending"));
    if (category === "sale") return products.filter(p => p.originalPrice && p.originalPrice > p.price);
    return products.filter((p) => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
    return products.find((p) => p.id === id);
};

export const categories = [
    { slug: "kurta-pajama", name: "Kurta Pajama", description: "Premium, modern men's ethnic wear." },
    { slug: "turban", name: "Turban", description: "High-quality, vibrant turbans for every occasion." },
    { slug: "ladies-suits", name: "Ladies Suits", description: "Elegant salwar kameez with contemporary flair." },
    { slug: "pant-shirts", name: "Pant Shirts", description: "Sharp, tailored formal and casual wear." },
    { slug: "new-arrivals", name: "New Arrivals", description: "The latest drops in modern ethnic fusion." },
    { slug: "sale", name: "Sale", description: "Premium products at reduced prices." },
];
