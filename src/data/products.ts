export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  usage: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "dolomite-lumps",
    name: "Dolomite Lumps",
    shortDescription: "High-quality raw dolomite rocks for industrial and agricultural applications.",
    fullDescription: "Our premium Dolomite Lumps are sourced from the finest mineral deposits. These raw dolomite rocks are ideal for various industrial applications including steel manufacturing, glass production, and agricultural soil conditioning. Rich in calcium and magnesium carbonates.",
    benefits: [
      "High purity calcium magnesium carbonate",
      "Excellent for soil pH correction",
      "Industrial grade quality",
      "Consistent mineral composition",
      "Available in bulk quantities"
    ],
    usage: "For agricultural use, crush and spread over acidic soils. For industrial applications, use as raw material in manufacturing processes. Store in dry conditions away from moisture.",
    image: "dolomite-lumps",
    category: "Raw Mineral"
  },
  {
    id: "dolomite-powder",
    name: "Dolomite Powder",
    shortDescription: "Finely ground dolomite for agriculture, paint, and industrial uses.",
    fullDescription: "Our Dolomite Powder is finely milled to precise specifications, making it perfect for agricultural soil amendment, paint manufacturing, ceramics, and various industrial applications. This high-purity powder provides essential calcium and magnesium nutrients.",
    benefits: [
      "Ultra-fine particle size",
      "High calcium and magnesium content",
      "Ideal for soil pH balancing",
      "Perfect for paint and coating industries",
      "Consistent quality and purity"
    ],
    usage: "For agriculture, apply 2-4 kg per 100 sq ft on acidic soils and mix well. For industrial use, incorporate as per formulation requirements. Store in airtight containers.",
    image: "dolomite-powder",
    category: "Powder"
  },
  {
    id: "dolomite-granules",
    name: "Dolomite Granules",
    shortDescription: "Easy-to-apply granulated dolomite for precision agricultural use.",
    fullDescription: "Dolomite Granules are specially processed for easy and uniform application in agricultural fields. These granules dissolve gradually, providing a slow-release source of calcium and magnesium to plants. Perfect for gardens, lawns, and commercial farming.",
    benefits: [
      "Easy and uniform spreading",
      "Slow-release formula",
      "Dust-free application",
      "Long-lasting soil benefits",
      "Suitable for all crop types"
    ],
    usage: "Spread evenly using a spreader at recommended rates based on soil test results. Water after application for faster activation. Apply during planting season for best results.",
    image: "dolomite-granules",
    category: "Granules"
  },
  // {
  //   id: "organic-compost",
  //   name: "Organic Compost",
  //   shortDescription: "Rich, fully decomposed organic matter to enrich your garden soil.",
  //   fullDescription: "Our Organic Compost is made from carefully selected plant materials that have been naturally decomposed to create a dark, crumbly, nutrient-rich soil amendment. This premium compost adds essential organic matter to your soil, improving structure, fertility, and water-holding capacity.",
  //   benefits: [
  //     "Improves soil texture and structure",
  //     "Adds beneficial microorganisms",
  //     "Reduces need for chemical fertilizers",
  //     "Helps suppress plant diseases",
  //     "Environmentally sustainable"
  //   ],
  //   usage: "Spread 2-4 inches of compost over garden beds and work into the top 6-8 inches of soil. For lawns, apply 1/4 inch layer and rake evenly. Use as mulch around trees and shrubs.",
  //   image: "compost",
  //   category: "Soil Amendment"
  // },
  // {
  //   id: "garden-soil-mix",
  //   name: "Garden Soil Mix",
  //   shortDescription: "All-purpose soil blend for flower beds, vegetable gardens, and landscaping.",
  //   fullDescription: "Our Garden Soil Mix is a premium blend of topsoil, compost, and organic matter designed for in-ground planting. This balanced formula provides excellent drainage while retaining essential moisture and nutrients for healthy plant growth in beds, borders, and vegetable gardens.",
  //   benefits: [
  //     "Ready to use out of bag",
  //     "Balanced nutrient content",
  //     "Improves poor native soils",
  //     "Supports healthy root growth",
  //     "Ideal for vegetables and flowers"
  //   ],
  //   usage: "For new beds, apply 4-6 inches of garden soil mix and till into existing soil. For planting holes, mix 50/50 with native soil. Water thoroughly after planting and apply mulch to retain moisture.",
  //   image: "garden-soil",
  //   category: "Garden Soil"
  // },
  // {
  //   id: "perlite",
  //   name: "Horticultural Perlite",
  //   shortDescription: "Lightweight volcanic mineral for improved drainage and aeration.",
  //   fullDescription: "Horticultural Perlite is a natural volcanic glass that has been heated and expanded to create a lightweight, sterile growing medium amendment. These white granules provide excellent drainage and aeration when mixed with soil, preventing compaction and root rot.",
  //   benefits: [
  //     "Improves soil drainage",
  //     "Prevents soil compaction",
  //     "Sterile and pH neutral",
  //     "Lightweight and easy to handle",
  //     "Reusable and long-lasting"
  //   ],
  //   usage: "Mix perlite with potting soil at 10-30% ratio depending on drainage needs. For seed starting, mix 50/50 with peat or coco peat. Can be used as a standalone medium for hydroponic systems.",
  //   image: "perlite",
  //   category: "Soil Amendment"
  // }
];

export const companyInfo = {
  name: "Sitaram Minerals",
  tagline: "Premium Soil Solutions for Better Farming",
  phone: "9998175105", // Replace with actual number
  email: "sitraramminerals5105@gmail.com", // Replace with actual email  
  whatsapp: "8200552655", // Replace with actual WhatsApp number
  address: "survey No.153 P1 P1, malpara, ta - vallabhipur,  Dist - bhavnagar.",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5227.927861192907!2d71.93552769035179!3d22.09914740181128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1769163050042!5m2!1sen!2sin",
  mapLink: "https://www.google.com/maps?q=22.09914740181128,71.93552769035179"
};

export const testimonials = [
  {
    id: 1,
    name: "Raj Kumar",
    role: "Organic Farmer",
    content: "Sitaram Minerals vermicompost transformed my farm's yield. The quality is exceptional and my crops have never been healthier!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Home Gardener",
    content: "I've tried many potting mixes, but Sitaram Minerals premium potting soil is by far the best. My indoor plants are thriving!",
    rating: 5
  },
  {
    id: 3,
    name: "Mohammed Ali",
    role: "Nursery Owner",
    content: "Reliable quality and excellent customer service. Sitaram Minerals has been our trusted supplier for over 1 years now.",
    rating: 5
  }
];
