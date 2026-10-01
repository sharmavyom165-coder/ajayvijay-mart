import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Navigation, Mail, ArrowUpRight, Heart, Shield } from 'lucide-react';
import { STORE_INFO } from '../data/martData';
import { BrandLogo } from './BrandLogo';

interface LocationFooterProps {
  onOpenWhatsApp: () => void;
  isOpenNow: boolean;
  language: 'en' | 'hi';
}

export const LocationFooter: React.FC<LocationFooterProps> = ({
  onOpenWhatsApp,
  isOpenNow,
  language
}) => {
  return (
    <footer id="location" className="bg-[#091A33] text-slate-300 pt-16 pb-12 border-t border-[#E5A93C]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        {/* Top Split: Location Map & Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Store Details & Contact Numbers */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white p-1 shadow-md">
                <BrandLogo size={40} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
                  Ajay Vijay Mart
                </h3>
                <p className="text-xs text-amber-300 font-hindi">
                  अजय विजय मार्ट · आगर मालवा (म.प्र.)
                </p>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-md">
              {language === 'hi'
                ? '1995 से आगर मालवा के परिवारों की सेवा में समर्पित। विजय किराना स्टोर की शुद्धता और भरोसे का नया 3-मंजिला आधुनिक सुपरमार्केट।'
                : 'Serving Agar Malwa families with pride since 1995. Formerly Vijay Kirana Store, now elevated into a 3-floor fully air-conditioned retail destination.'}
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                <MapPin className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white mb-0.5">
                    {language === 'hi' ? 'दुकान का पता:' : 'Store Address:'}
                  </div>
                  <div className="text-slate-300 leading-relaxed">
                    {STORE_INFO.address}
                  </div>
                  <div className="text-[11px] text-amber-200/90 font-medium mt-0.5">
                    📍 {STORE_INFO.landmark}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* Phone 1 */}
                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#E5A93C]/50 rounded-xl p-3 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Primary Store Call</span>
                    <span className="font-bold text-white group-hover:text-[#E5A93C] transition-colors tabular-nums">
                      {STORE_INFO.phone}
                    </span>
                  </div>
                </a>

                {/* Phone 2 */}
                <a
                  href={`tel:${STORE_INFO.phoneSecondary}`}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#E5A93C]/50 rounded-xl p-3 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Secondary Contact</span>
                    <span className="font-bold text-white group-hover:text-[#E5A93C] transition-colors tabular-nums">
                      {STORE_INFO.phoneSecondary}
                    </span>
                  </div>
                </a>
              </div>

              {/* Operating Hours */}
              <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#E5A93C]" />
                  <div>
                    <span className="text-white font-semibold block">
                      {STORE_INFO.openingTime} – {STORE_INFO.closingTime}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {STORE_INFO.openDays} (Monday to Sunday)
                    </span>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isOpenNow ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}`}>
                  {isOpenNow ? 'OPEN NOW' : 'CLOSED'}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenWhatsApp}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order: +91 77710 75551</span>
              </button>

              <a
                href="https://maps.google.com/?q=Agar+Malwa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Google Map for Agar Malwa */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-xl flex flex-col flex-1">
              <div className="p-3 bg-slate-800/80 border-b border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>Agar Malwa, Madhya Pradesh (Pin: 465441)</span>
                </span>
                <span className="text-[10px] text-slate-400">Live Map View</span>
              </div>

              {/* Embedded Google Maps iframe */}
              <div className="relative w-full h-[320px] md:h-[380px] bg-slate-950">
                <iframe
                  title="Ajay Vijay Mart Location in Agar Malwa"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14619.68962635957!2d76.0089!3d23.7142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39634e06260ab50f%3A0x6b6fa39f379bb503!2sAgar%2C%20Madhya%20Pradesh%20465441!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter brightness-95 contrast-105"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Overlaid Location Badge */}
                <div className="absolute bottom-3 left-3 bg-[#0F284E]/95 backdrop-blur-xs border border-[#E5A93C]/40 text-white p-2.5 rounded-xl shadow-lg max-w-xs text-xs pointer-events-none">
                  <div className="font-bold text-[#E5A93C] flex items-center gap-1">
                    <span>🏢</span>
                    <span>Ajay Vijay Mart</span>
                  </div>
                  <div className="text-[10px] text-slate-200 mt-0.5">
                    Main Market Rd · Opp Old Bus Stand · Agar Malwa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Heritage note */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 1995 – 2026 Ajay Vijay Mart. All rights reserved.</span>
            <span>·</span>
            <span className="text-amber-300/80 font-hindi">आगर मालवा का गौरव</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span>GST Registered Store</span>
            <span>·</span>
            <span>100% Genuine Brands</span>
            <span>·</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              @ajayvijaymart
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
