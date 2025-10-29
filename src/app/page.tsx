"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Star, Sparkles, Bed, MessageCircle, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Reviews", id: "testimonials" }
          ]}
          brandName="Grand Vista Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury at Grand Vista Hotel"
          description="Indulge in world-class hospitality with stunning city views, premium amenities, and exceptional service in the heart of downtown"
          tag="5-Star Luxury"
          tagIcon={Star}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant hotel lobby with marble floors and crystal chandelier"
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardThree
          title="World-Class Amenities"
          description="Discover the exceptional facilities and services that make your stay unforgettable"
          tag="Luxury Features"
          tagIcon={Sparkles}
          features={[
            {
              id: "01",
              title: "Serenity Spa & Wellness",
              description: "Rejuvenate your mind and body with our full-service spa featuring therapeutic massages, facial treatments, and wellness programs",
              imageSrc: "https://images.pexels.com/photos/3757640/pexels-photo-3757640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Tranquil spa treatment room"
            },
            {
              id: "02",
              title: "Azure Restaurant & Bar",
              description: "Savor exquisite cuisine crafted by renowned chefs using locally sourced ingredients in our award-winning fine dining establishment",
              imageSrc: "https://images.pexels.com/photos/2566037/pexels-photo-2566037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant restaurant dining room"
            },
            {
              id: "03",
              title: "Rooftop Pool & Terrace",
              description: "Unwind in our infinity pool with panoramic city views, complete with poolside service and private cabanas",
              imageSrc: "https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rooftop infinity pool with city skyline"
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxurious Accommodations"
          description="Choose from our carefully designed rooms and suites, each offering comfort and elegance"
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "1",
              brand: "Grand Vista",
              name: "Deluxe City View Room",
              price: "$299/night",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/6466285/pexels-photo-6466285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spacious deluxe room with city view"
            },
            {
              id: "2",
              brand: "Grand Vista",
              name: "Executive Suite",
              price: "$499/night",
              rating: 5,
              reviewCount: "890",
              imageSrc: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant executive suite with living area"
            },
            {
              id: "3",
              brand: "Grand Vista",
              name: "Standard Comfort Room",
              price: "$199/night",
              rating: 4,
              reviewCount: "2.1k",
              imageSrc: "https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Comfortable standard room"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Read authentic reviews from travelers who experienced our exceptional hospitality"
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Business Executive",
              testimonial: "The attention to detail and exceptional service exceeded all expectations. The spa treatment was absolutely divine and the rooftop pool offered breathtaking views of the city.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Travel Enthusiast",
              testimonial: "Grand Vista Hotel perfectly combines luxury with comfort. The staff went above and beyond to make our anniversary celebration truly memorable. Highly recommended!",
              imageSrc: "https://images.pexels.com/photos/3778610/pexels-photo-3778610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Marketing Director",
              testimonial: "The executive suite was impeccably designed and the Azure restaurant served the most delicious meals. This hotel sets the gold standard for luxury hospitality.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Investment Banker",
              testimonial: "From the moment we arrived, every detail was perfect. The concierge service was outstanding and helped us discover the best local attractions. Will definitely return!",
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Thompson"
            },
            {
              id: "5",
              name: "Lisa Park",
              role: "Entrepreneur",
              testimonial: "The wellness center and spa treatments were exactly what I needed after a busy work week. The serene atmosphere and professional staff made it a truly rejuvenating experience.",
              imageSrc: "https://images.pexels.com/photos/8546799/pexels-photo-8546799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Lisa Park"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Book Your Luxury Stay Today"
          description="Experience unparalleled hospitality and create unforgettable memories at Grand Vista Hotel. Our concierge team is ready to assist with your reservation."
          tagIcon={Calendar}
          imageSrc="https://images.pexels.com/photos/7820689/pexels-photo-7820689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel concierge desk with professional staff"
          inputPlaceholder="Enter your email"
          buttonText="Book Now"
          termsText="By booking with us, you agree to our reservation terms and privacy policy. We respect your privacy and will never share your information."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Vista Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "amenities" },
                { label: "Spa & Wellness", href: "amenities" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Guest Reviews", href: "testimonials" },
                { label: "Contact", href: "contact" },
                { label: "Location", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Special Offers", href: "rooms" },
                { label: "Events", href: "contact" },
                { label: "Corporate", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}