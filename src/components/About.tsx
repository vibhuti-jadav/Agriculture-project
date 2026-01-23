import { Sprout, Users, Target } from "lucide-react";
import { companyInfo } from "@/data/products";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Nurturing Growth, <br />
              <span className="text-primary">Naturally</span>
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {companyInfo.name} was founded with a simple mission: to provide farmers and gardeners
              with the highest quality mineral products that promote sustainable agriculture. We believe
              that healthy minerals are the foundation of a healthy planet.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our team of mineral scientists and agricultural experts work tirelessly to develop products
              that not only enhance plant growth but also improve mineral quality for generations to come.
              Every product we create is tested rigorously to ensure it meets our exacting standards.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 bg-secondary/50 rounded-xl">
                <Target className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To empower every farmer with premium, organic mineral solutions that maximize yield
                  while preserving the environment.
                </p>
              </div>
              <div className="p-5 bg-accent/50 rounded-xl">
                <Sprout className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-display font-semibold text-foreground mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  A world where sustainable farming practices are the norm, and quality minerals nurture
                  thriving communities.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold mb-2">1+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div> */}
            <div className="bg-secondary text-secondary-foreground p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-secondary-foreground/80">Happy Customers</div>
            </div>
            <div className="bg-accent text-accent-foreground p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
              <div className="text-accent-foreground/80">Organic Products</div>
            </div>
            <div className="bg-muted p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">3+</div>
              <div className="text-muted-foreground">Product Lines</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
