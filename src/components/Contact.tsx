import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/products";
import { getWhatsAppLink, getEmailLink } from "@/lib/contact";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contact Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your farming? Contact us today for product inquiries,
            bulk orders, or expert advice.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div>
            <div className="space-y-6">
              {/* WhatsApp - Primary CTA */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 bg-[#25D366]/10 rounded-xl border-2 border-[#25D366]/30 hover:border-[#25D366] transition-colors group"
              >
                <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg">Chat on WhatsApp</div>
                  <div className="text-muted-foreground">{companyInfo.whatsapp}</div>
                  <div className="text-sm text-[#25D366] font-medium mt-1">
                    Quick response guaranteed →
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href={getEmailLink()}
                className="flex items-center gap-4 p-6 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email Us</div>
                  <div className="text-muted-foreground">{companyInfo.email}</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-4 p-6 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Call Us</div>
                  <div className="text-muted-foreground">{companyInfo.phone}</div>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 p-6 bg-muted rounded-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Visit Us</div>
                  <div className="text-muted-foreground">{companyInfo.address}</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 p-6 bg-muted rounded-xl">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Business Hours</div>
                  <div className="text-muted-foreground">Mon - Sat: 24Hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          {/* <div className="rounded-xl overflow-hidden shadow-card h-[400px] lg:h-full min-h-[400px]">
  
            <iframe
              src={companyInfo.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TerraGrow Location"
            />

          </div> */}

<div className="relative rounded-xl overflow-hidden shadow-card h-[400px] lg:h-full min-h-[400px]">
  
  {/* Google Map */}
  <iframe
    src={companyInfo.mapEmbed}
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Location"
  />

  {/* Click Overlay */}
  <a
    href={companyInfo.mapLink}
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 z-10"
    aria-label="Open in Google Maps"
  ></a>

</div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
