import { X, MessageCircle, Mail, Check } from "lucide-react";
import { Product } from "@/data/products";
import { getWhatsAppLink, getEmailLink } from "@/lib/contact";

import dolomiteLumps from "@/assets/product-dolomite-lumps.jpg";
import dolomitePowder from "@/assets/product-dolomite-powder.jpg";
import dolomiteGranules from "@/assets/product-dolomite-granules.jpg";
import limestonePowder from "@/assets/product-limestone-powder.jpg";
import compost from "@/assets/product-compost.jpg";
import gardenSoil from "@/assets/product-garden-soil.jpg";
import perlite from "@/assets/product-perlite.jpg";

const imageMap: Record<string, string> = {
  "dolomite-lumps": dolomiteLumps,
  "dolomite-powder": dolomitePowder,
  "dolomite-granules": dolomiteGranules,
   "limestone-powder": limestonePowder,
  "compost": compost,
  "garden-soil": gardenSoil,
  "perlite": perlite,
};

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-strong max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:bg-muted transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative aspect-square md:aspect-auto bg-muted">
            <img
              src={imageMap[product.image]}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                {product.category}
              </span>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 md:p-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              {product.name}
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                Benefits
              </h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div className="mb-8">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                How to Use
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.usage}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppLink(product.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center flex-1"
              >
                <MessageCircle className="w-5 h-5" />
                Enquire on WhatsApp
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
