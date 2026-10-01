import React, { useState } from 'react';
import { Tag, FileDown, ChevronLeft, ChevronRight, Sparkles, Clock, Check, Share2, Copy } from 'lucide-react';
import { DEALS, Deal } from '../data/martData';

interface DealsCarouselProps {
  onOpenFlyer: () => void;
  onApplyPromoToCart: (code: string) => void;
  language: 'en' | 'hi';
}

export const DealsCarousel: React.FC<DealsCarouselProps> = ({
  onOpenFlyer,
  onApplyPromoToCart,
  language
}) => {
  const [activeDealIndex, setActiveDealIndex] = useState(0);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const currentDeal = DEALS[activeDealIndex];

  const handleNext = () => {
    setActiveDealIndex((prev) => (prev + 1) % DEALS.length);
  };

  const handlePrev = () => {
    setActiveDealIndex((prev) => (prev - 1 + DEALS.length) % DEALS.length);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    onApplyPromoToCart(code);
    setTimeout(() => setCopiedCode(null), 3000);
  };

  return (
    <section id="deals" className="py-14 bg-gradient-to-b from-[#FAF9F6] to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header with Download Flyer CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0F284E]/70 mb-1">
              <Tag className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>{language === 'hi' ? 'विशेष बचत व सीमित ऑफर्स' : 'Limited-Time Super Savers'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F284E] tracking-tight">
              {language === 'hi' ? 'लाइव डील्स व साप्ताहिक महा-बचत' : 'Live Deals & Weekly Bachat'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenFlyer}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F284E] hover:bg-[#1a3866] text-white text-xs font-bold transition-all shadow cursor-pointer whitespace-nowrap"
            >
              <FileDown className="w-4 h-4 text-[#E5A93C]" />
              <span>{language === 'hi' ? 'साप्ताहिक पर्चा (Flyer) देखें' : 'Download Weekly Offers Flyer'}</span>
            </button>
          </div>
        </div>

        {/* Featured Deal Banner Card */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F284E] via-[#14325e] to-[#0a1a33] text-white shadow-xl p-6 md:p-10 border border-[#E5A93C]/30 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="bg-[#E5A93C] text-[#0F284E] font-black px-2.5 py-1 rounded text-xs uppercase tracking-wider">
                  {currentDeal.discountText}
                </span>
                <span className="text-amber-200/90 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentDeal.validUntil}</span>
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  {language === 'hi' ? currentDeal.hindiTitle : currentDeal.title}
                </h3>
                <p className="text-slate-200 text-sm mt-1 leading-relaxed">
                  {currentDeal.subtitle}
                </p>
              </div>

              {/* Promo Code & Action */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center bg-black/40 border border-white/20 rounded-xl px-3 py-2 text-xs">
                  <span className="text-slate-400 mr-2 uppercase text-[10px] tracking-wider">Promo Code:</span>
                  <span className="font-mono font-bold text-amber-300 tracking-wider text-sm">{currentDeal.code}</span>
                  <button
                    onClick={() => copyCode(currentDeal.code)}
                    className="ml-3 p-1 rounded hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Copy promo code"
                  >
                    {copiedCode === currentDeal.code ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <button
                  onClick={() => copyCode(currentDeal.code)}
                  className="px-4 py-2 rounded-xl bg-[#E5A93C] hover:bg-[#d6982f] text-[#0F284E] font-bold text-xs shadow transition-all cursor-pointer"
                >
                  {copiedCode === currentDeal.code
                    ? (language === 'hi' ? 'कोड कॉपी हो गया!' : 'Offer Applied to WhatsApp!')
                    : (language === 'hi' ? 'आर्डर पर छूट लागू करें' : 'Apply Discount to Order')}
                </button>
              </div>
            </div>

            {/* Right Deal Badge Illustration */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-white/10 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#E5A93C] to-amber-200 text-[#0F284E] flex flex-col items-center justify-center font-black shadow-lg mb-3">
                <span className="text-xs uppercase">SAVE</span>
                <span className="text-xl leading-none">35%</span>
              </div>
              <div className="text-xs text-amber-200 font-semibold">
                {language === 'hi' ? 'आगर मालवा स्टोर एक्सक्लूसिव' : 'Agar Malwa In-Store & WhatsApp'}
              </div>
              <div className="text-[11px] text-slate-300 mt-1">
                {language === 'hi' ? 'ग्राउंड व 1st फ्लोर दोनों पर मान्य' : 'Applicable on All 3 Shopping Floors'}
              </div>
            </div>
          </div>

          {/* Carousel Navigation Buttons */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              {DEALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDealIndex(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeDealIndex === i ? 'w-8 bg-[#E5A93C]' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Previous deal"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Next deal"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
