import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { getWhatsAppLink } from "@/lib/contact";
import { companyInfo } from "@/data/products";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lush green farmland with rich fertile soil"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center pt-32">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary-foreground text-sm font-medium mb-6">
            🌱 100% Organic & Sustainable
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Premium Soil Solutions for{" "}
            <span className="text-secondary">Better Farming</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Nurture your crops with our scientifically formulated, organic soil products. 
            From backyard gardens to commercial farms, we provide the foundation for exceptional growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-8 py-4"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
            
            <a
              href="#products"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              Explore Products
            </a>
          </div>

          {/* Trust Indicators */}
          {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-primary-foreground/80">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">500+</div>
              <div className="text-sm">Happy Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">100%</div>
              <div className="text-sm">Organic Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">6+</div>
              <div className="text-sm">Product Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground">5★</div>
              <div className="text-sm">Customer Rating</div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
