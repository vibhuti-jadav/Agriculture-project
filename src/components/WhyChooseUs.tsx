import { Leaf, Award, Truck, ShieldCheck, Recycle, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "All our products are made from natural, organic materials with no harmful chemicals.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Rigorously tested and certified to meet the highest agricultural standards.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable delivery to your doorstep, no matter the order size.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Farmers",
    description: "Hundreds of farmers rely on our products for consistent, superior results.",
  },
  {
    icon: Recycle,
    title: "Sustainable",
    description: "Environmentally responsible production methods that protect our planet.",
  },
  {
    icon: HeartHandshake,
    title: "Expert Support",
    description: "Our agricultural experts are always ready to help with advice and guidance.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Sitaram Minerals Difference
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            We're committed to providing the best soil products and customer experience
            in the industry.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-colors duration-300"
            >
              <feature.icon className="w-10 h-10 text-secondary mb-4" />
              <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
