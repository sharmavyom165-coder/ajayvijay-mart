import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LegacyStory } from './components/LegacyStory';
import { DealsCarousel } from './components/DealsCarousel';
import { CategoryGrid } from './components/CategoryGrid';
import { AmenitiesSection } from './components/AmenitiesSection';
import { SocialProof } from './components/SocialProof';
import { LocationFooter } from './components/LocationFooter';
import { WhatsAppOrderWidget } from './components/WhatsAppOrderWidget';
import { PushNotificationManager } from './components/PushNotificationManager';
import { WeeklyFlyerModal } from './components/WeeklyFlyerModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { Product, STORE_INFO } from './data/martData';

export default function App() {
  const [cart, setCart] = useState<{ [productId: string]: number }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isFlyerOpen, setIsFlyerOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [unreadNotifications, setUnreadNotifications] = useState(2);
  const [appliedPromo, setAppliedPromo] = useState<string>('');
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [isOpenNow, setIsOpenNow] = useState(true);

  // Compute total items count in cart
  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  // Calculate live store operational status (8:30 AM to 10:00 PM IST)
  useEffect(() => {
    const checkStoreStatus = () => {
      const now = new Date();
      // UTC to IST (+5:30)
      const istTime = new Date(now.getTime() + (330 + now.getTimezoneOffset()) * 60000);
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const currentMinutes = hours * 60 + minutes;

      const openMinutes = 8 * 60 + 30; // 08:30 AM
      const closeMinutes = 22 * 60;    // 10:00 PM

      setIsOpenNow(currentMinutes >= openMinutes && currentMinutes <= closeMinutes);
    };

    checkStoreStatus();
    const interval = setInterval(checkStoreStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleUpdateCart = (productId: string, quantity: number) => {
    setCart((prev) => {
      const next = { ...prev };
      if (quantity <= 0) {
        delete next[productId];
      } else {
        next[productId] = quantity;
      }
      return next;
    });
  };

  const handleClearCart = () => {
    setCart({});
  };

  const handleApplyPromo = (code: string) => {
    setAppliedPromo(code);
    setIsCartOpen(true);
  };

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#0F284E] selection:bg-[#E5A93C]/20 selection:text-[#0F284E]">
      {/* Top Header */}
      <Header
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenFlyer={() => setIsFlyerOpen(true)}
        unreadNotifications={unreadNotifications}
        isOpenNow={isOpenNow}
        language={language}
        onToggleLanguage={handleToggleLanguage}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenWhatsApp={() => setIsCartOpen(true)}
          onOpenFlyer={() => setIsFlyerOpen(true)}
          isOpenNow={isOpenNow}
          language={language}
        />

        {/* Live Deals & Weekly Bachat Carousel */}
        <DealsCarousel
          onOpenFlyer={() => setIsFlyerOpen(true)}
          onApplyPromoToCart={handleApplyPromo}
          language={language}
        />

        {/* Categories & Product Aisles */}
        <CategoryGrid
          cart={cart}
          onUpdateCart={handleUpdateCart}
          onOpenProductModal={(product) => setSelectedProduct(product)}
          language={language}
        />

        {/* Legacy to Modernity Story Section (Vijay Kirana Store 1995 to Ajay Vijay Mart) */}
        <LegacyStory language={language} />

        {/* Store Amenities, Air Conditioning & Parking Section */}
        <AmenitiesSection language={language} />

        {/* Social Proof: Google Maps Reviews & Instagram Feed @ajayvijaymart */}
        <SocialProof language={language} />
      </main>

      {/* Location Map & Contact Footer */}
      <LocationFooter
        onOpenWhatsApp={() => setIsCartOpen(true)}
        isOpenNow={isOpenNow}
        language={language}
      />

      {/* Floating & Slide-out WhatsApp Order Widget */}
      <WhatsAppOrderWidget
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateCart={handleUpdateCart}
        onClearCart={handleClearCart}
        appliedPromo={appliedPromo}
        language={language}
      />

      {/* Push Notification Manager & Center for Daily Discounts */}
      <PushNotificationManager
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        language={language}
        onNotificationCountChange={setUnreadNotifications}
      />

      {/* Weekly Offers Flyer Modal with Download */}
      <WeeklyFlyerModal
        isOpen={isFlyerOpen}
        onClose={() => setIsFlyerOpen(false)}
        language={language}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        cartQty={selectedProduct ? cart[selectedProduct.id] || 0 : 0}
        onUpdateCart={handleUpdateCart}
        language={language}
      />
    </div>
  );
}
