import React, { useState } from 'react';
import { ShoppingBag, Bell, MessageSquare, Menu, X, Clock, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/martData';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenNotifications: () => void;
  onOpenFlyer: () => void;
  unreadNotifications: number;
  isOpenNow: boolean;
  language: 'en' | 'hi';
  onToggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenNotifications,
  onOpenFlyer,
  unreadNotifications,
  isOpenNow,
  language,
  onToggleLanguage
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Slim Top Live Utility Bar (Operational Status & Quick Contact) */}
      <div className="bg-[#091A33] text-slate-300 text-xs py-1.5 px-4 md:px-8 border-b border-[#0F284E]/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400' : 'bg-rose-400'} animate-pulse`} />
              <span className="font-medium text-white">
                {isOpenNow ? (language === 'hi' ? 'दुकान खुली है (रात 10:00 तक)' : 'Open Now (until 10:00 PM)') : (language === 'hi' ? 'दुकान बंद है (सुबह 8:30 खुलेगी)' : 'Closed · Opens 8:30 AM')}
              </span>
            </span>
            <span className="hidden sm:inline text-slate-500">·</span>
            <span className="hidden sm:inline text-slate-400">
              {language === 'hi' ? 'मेन मार्केट रोड, आगर मालवा' : 'Main Market Road, Agar Malwa'}
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={onOpenFlyer}
              className="hover:text-[#E5A93C] transition-colors text-slate-300 font-medium hidden md:inline-flex items-center gap-1"
            >
              <span>📄</span>
              <span>{language === 'hi' ? 'साप्ताहिक बचत पर्चा' : 'Weekly Offers Flyer'}</span>
            </button>
            <span className="hidden md:inline text-slate-600">·</span>
            <button
              onClick={onToggleLanguage}
              className="text-amber-300 hover:text-white font-medium transition-colors cursor-pointer"
              title="Toggle English / Hindi"
            >
              {language === 'en' ? 'हिन्दी में देखें' : 'View in English'}
            </button>
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="hover:text-[#E5A93C] transition-colors text-white font-semibold flex items-center gap-1"
            >
              <span>📞</span>
              <span className="tabular-nums">{STORE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header adhering to Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#0F284E] text-white border-b border-[#E5A93C]/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-18 flex items-center justify-between gap-6">
          {/* Zone 1: Single Brand Wordmark & AV Circular Monogram */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E5A93C] to-[#C98B26] text-[#0F284E] flex items-center justify-center font-black text-base shadow-md group-hover:scale-105 transition-transform">
              AV
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white leading-none">
                Ajay Vijay Mart
              </span>
              <span className="text-[10px] tracking-wider text-amber-300/90 font-hindi uppercase font-semibold mt-0.5">
                {language === 'hi' ? 'आगर मालवा का आधुनिक सुपरमार्केट' : 'Agar Malwa · Estd. 1995'}
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 Nav Links, 1-2 word labels, single-line text with subtle hover underlines */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-200">
            <a href="#categories" className="hover:text-[#E5A93C] transition-colors whitespace-nowrap">
              {language === 'hi' ? 'कैटेगरी व सामान' : 'Aisles'}
            </a>
            <a href="#legacy" className="hover:text-[#E5A93C] transition-colors whitespace-nowrap">
              {language === 'hi' ? 'हमारा इतिहास' : 'Heritage'}
            </a>
            <a href="#deals" className="hover:text-[#E5A93C] transition-colors whitespace-nowrap">
              {language === 'hi' ? 'लाइव ऑफर्स' : 'Offers'}
            </a>
            <a href="#amenities" className="hover:text-[#E5A93C] transition-colors whitespace-nowrap">
              {language === 'hi' ? 'सुविधाएं' : 'Amenities'}
            </a>
            <a href="#reviews" className="hover:text-[#E5A93C] transition-colors whitespace-nowrap">
              {language === 'hi' ? 'समीक्षाएं' : 'Reviews'}
            </a>
            <a href="#location" className="hover:text-[#E5A93C] transition-colors whitespace-nowrap">
              {language === 'hi' ? 'पता व नक़्शा' : 'Location'}
            </a>
          </nav>

          {/* Zone 3: 1-2 Primary Actions (Push Notification Bell & WhatsApp Order / Cart list) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Push Notification Bell */}
            <button
              onClick={onOpenNotifications}
              className="relative p-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A93C]"
              aria-label="View Daily Discount Push Notifications"
            >
              <Bell className="w-5 h-5 text-amber-300" />
              {unreadNotifications > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center tabular-nums animate-bounce">
                  {unreadNotifications}
                </span>
              )}
            </button>

            {/* Shopping List / WhatsApp Cart Action Button */}
            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#E5A93C] text-[#0F284E] font-bold text-xs hover:bg-[#d6982f] transition-all shadow-sm active:scale-95 whitespace-nowrap"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">
                {language === 'hi' ? 'व्हाट्सएप सूची' : 'WhatsApp List'}
              </span>
              <span className="w-5 h-5 rounded-full bg-[#0F284E] text-[#E5A93C] text-[11px] font-black flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-200 hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a1b35] border-t border-[#E5A93C]/20 px-4 py-4 space-y-3">
            <nav className="flex flex-col space-y-2 text-sm font-medium">
              <a
                href="#categories"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/10 text-slate-200"
              >
                {language === 'hi' ? 'कैटेगरी व सामान (Aisles)' : 'Browse Aisles & Products'}
              </a>
              <a
                href="#legacy"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/10 text-slate-200"
              >
                {language === 'hi' ? 'विजय किराना से अजय विजय मार्ट' : 'Heritage: Vijay Kirana to Ajay Vijay Mart'}
              </a>
              <a
                href="#deals"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/10 text-slate-200"
              >
                {language === 'hi' ? 'लाइव ऑफर्स व बचत' : 'Live Deals & Combos'}
              </a>
              <a
                href="#amenities"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/10 text-slate-200"
              >
                {language === 'hi' ? 'मार्ट सुविधाएं (एसी, पार्किंग, लिफ्ट)' : 'Store Amenities & Parking'}
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/10 text-slate-200"
              >
                {language === 'hi' ? 'ग्राहक समीक्षाएं (Google Reviews)' : 'Customer Reviews'}
              </a>
              <a
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-white/10 text-slate-200"
              >
                {language === 'hi' ? 'लोकेशन व संपर्क' : 'Location & Store Hours'}
              </a>
            </nav>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  onToggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="text-xs text-amber-300 font-semibold"
              >
                {language === 'en' ? '🇮🇳 हिन्दी में बदलें' : 'Switch to English'}
              </button>
              <button
                onClick={() => {
                  onOpenFlyer();
                  setMobileMenuOpen(false);
                }}
                className="text-xs text-white bg-slate-800 px-3 py-1.5 rounded border border-white/20"
              >
                {language === 'hi' ? 'पर्चा डाउनलोड करें' : 'Download Flyer'}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
