import React from 'react';
import { MessageSquare, FileText, Navigation, Clock, ShieldCheck, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/martData';
import { BuildingExteriorGraphic } from './MartVisuals';

interface HeroProps {
  onOpenWhatsApp: () => void;
  onOpenFlyer: () => void;
  isOpenNow: boolean;
  language: 'en' | 'hi';
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWhatsApp,
  onOpenFlyer,
  isOpenNow,
  language
}) => {
  return (
    <section className="relative bg-gradient-to-b from-[#0F284E] via-[#0b203f] to-[#FAF9F6] text-white pt-8 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand Story & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Live Operational Status & Heritage Kicker (Zero-Pill Discipline: unboxed clean text) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-amber-300">
              <span className="flex items-center gap-1.5 bg-[#091A33] border border-[#E5A93C]/40 px-2.5 py-1 rounded text-white font-semibold">
                <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400' : 'bg-rose-400'} animate-ping`} />
                {isOpenNow ? (language === 'hi' ? 'खुला है · 08:30 AM – 10:00 PM' : 'Open Now · 08:30 AM – 10:00 PM IST') : (language === 'hi' ? 'अभी बंद है · सुबह 8:30 खुलेगा' : 'Store Closed · Opens 8:30 AM')}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-slate-300">
                {language === 'hi' ? 'पूर्व नाम: विजय किराना स्टोर (1995)' : 'Formerly Vijay Kirana Store (Est. 1995)'}
              </span>
            </div>

            {/* Main Headline with text-wrap: balance */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight" style={{ textWrap: 'balance' }}>
                {language === 'hi' ? (
                  <>
                    आगर मालवा का सबसे भरोसेमंद <br />
                    <span className="text-[#E5A93C]">आधुनिक 3-मंज़िला सुपरमार्केट</span>
                  </>
                ) : (
                  <>
                    Agar Malwa’s Trusted <br />
                    <span className="text-[#E5A93C]">Modern Multi-Floor Mart</span>
                  </>
                )}
              </h1>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl">
                {language === 'hi'
                  ? '31+ वर्षों की शुद्धता और विश्वास का नया ठिकाना। 10,000+ ब्रांडेड किराना, देशी घी, शरबती आटा, पर्सनल केयर और होम अप्लायंसेज—सेंट्रल एसी और लिफ्ट सुविधा के साथ।'
                  : 'Carrying forward 31+ years of unshakable community trust. Experience 10,000+ fresh staples, pure desi cow ghee, personal care, and homeware across 3 fully air-conditioned floors.'}
              </p>
            </div>

            {/* Primary Action Buttons (Chat on WhatsApp, View Offers, Get Directions) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenWhatsApp}
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg hover:shadow-emerald-600/30 transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>{language === 'hi' ? 'व्हाट्सएप पर आर्डर भेजें' : 'Chat on WhatsApp to Order'}</span>
              </button>

              <button
                onClick={onOpenFlyer}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#E5A93C] hover:bg-[#d6982f] text-[#0F284E] font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-[#0F284E]" />
                <span>{language === 'hi' ? 'साप्ताहिक बचत पर्चा' : 'View Weekly Offers'}</span>
              </button>

              <a
                href="#location"
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-all whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>{language === 'hi' ? 'दुकान का रास्ता' : 'Get Directions'}</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <span>{language === 'hi' ? '100% शुद्धता गारंटी' : '100% Purity & Fair Prices'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <span>{language === 'hi' ? 'फ्री कार व बाइक पार्किंग' : 'Free Customer Parking'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <span>{language === 'hi' ? 'आगर शहर में होम डिलीवरी' : 'Fast Home Delivery'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Exterior Visual of the New Supermarket Building */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Decorative Frame glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E5A93C] to-blue-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
              <BuildingExteriorGraphic />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
