import { Product } from "@/data/products";

import dolomiteLumps from "@/assets/product-dolomite-lumps.jpg";
import dolomitePowder from "@/assets/product-dolomite-powder.jpg";
import dolomiteGranules from "@/assets/product-dolomite-granules.jpg";
import compost from "@/assets/product-compost.jpg";
import gardenSoil from "@/assets/product-garden-soil.jpg";
import perlite from "@/assets/product-perlite.jpg";

const imageMap: Record<string, string> = {
  "dolomite-lumps": dolomiteLumps,
  "dolomite-powder": dolomitePowder,
  "dolomite-granules": dolomiteGranules,
  "compost": compost,
  "garden-soil": gardenSoil,
  "perlite": perlite,
};

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card card-hover group">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={imageMap[product.image]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        <button
          onClick={() => onViewDetails(product)}
          className="w-full btn-primary text-center"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
