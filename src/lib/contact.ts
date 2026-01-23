import { companyInfo } from "@/data/products";

export const getWhatsAppLink = (productName?: string): string => {
  const baseUrl = "https://wa.me/";
  const phone = companyInfo.whatsapp.replace(/\D/g, "");
  
  const message = productName
    ? `Hello, I want to buy ${productName}. Please provide more details.`
    : "Hello, I'm interested in your mineral products. Please provide more information.";
  
  return `${baseUrl}${phone}?text=${encodeURIComponent(message)}`;
};

export const getEmailLink = (productName?: string): string => {
  const subject = productName
    ? `Enquiry about ${productName}`
    : "Product Enquiry";
  
  const body = productName
    ? `Hello,\n\nI am interested in purchasing ${productName}. Please provide more details about pricing and availability.\n\nThank you.`
    : "Hello,\n\nI am interested in your mineral products. Please send me more information.\n\nThank you.";
  
  return `mailto:${companyInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};
