import React, { useState } from 'react';
import { Sparkles, History, ShoppingBag, ArrowRight, Check, Award, HeartHandshake } from 'lucide-react';
import { VijayKiranaHeritageGraphic } from './MartVisuals';

interface LegacyStoryProps {
  language: 'en' | 'hi';
}

export const LegacyStory: React.FC<LegacyStoryProps> = ({ language }) => {
  const [activeEra, setActiveEra] = useState<'both' | '1988' | '2026'>('both');

  const comparisons = [
    {
      feature: language === 'hi' ? 'खरीदारी का अनुभव' : 'Shopping Experience',
      era1988: language === 'hi' ? 'पारंपरिक काउंटर के सामने खड़े होकर पर्ची देना' : 'Standing across the wooden counter with a paper chit',
      era2026: language === 'hi' ? '3 मंजिला विशाल एयर-कंडीशंड खुली अलमारियां, अपनी पसंद से छूकर चुनें' : '3-floor fully air-conditioned aisles, touch-and-feel modern shopping'
    },
    {
      feature: language === 'hi' ? 'सामान का चयन' : 'Variety & Assortment',
      era1988: language === 'hi' ? 'सीमित दैनिक अनाज व बुनियादी मसाले' : 'Essential loose grains, pulses, and basic daily staples',
      era2026: language === 'hi' ? '10,000+ उत्पाद: ग्रॉसरी, कॉस्मेटिक्स, क्रॉकरी, लगेज व ड्राय फ्रूट्स' : '10,000+ products: Gourmet foods, personal care, glassware & festive packs'
    },
    {
      feature: language === 'hi' ? 'बिलिंग व भुगतान' : 'Billing & Payment',
      era1988: language === 'hi' ? 'हाथ से लिखी लाल बही-खाता रसीद, केवल नक़द' : 'Handwritten ledger slip and cash-only transactions',
      era2026: language === 'hi' ? '4 सुपरफास्ट कंप्यूटर बिलिंग काउंटर, UPI, कार्ड्स व डिजिटल व्हाट्सएप बिल' : '4 Computerized high-speed POS scanners, UPI, Cards & instant e-bill'
    },
    {
      feature: language === 'hi' ? 'पहुंच व सुविधाएं' : 'Accessibility & Comfort',
      era1988: language === 'hi' ? 'भीड़भाड़ वाला छोटा बाज़ार परिसर' : 'Crowded narrow bazaar lane without parking',
      era2026: language === 'hi' ? 'सेंट्रल एसी, वरिष्ठ नागरिकों हेतु लिफ्ट, व्हीलचेयर रैंप व फ्री पार्किंग' : 'Central AC, passenger elevator for seniors, wheelchair ramp & free parking'
    },
    {
      feature: language === 'hi' ? 'घर बैठे आर्डर' : 'Home Delivery',
      era1988: language === 'hi' ? 'दुकान आकर सामान थैले में ले जाना' : 'Manual carry bags on bicycle or scooter',
      era2026: language === 'hi' ? 'व्हाट्सएप पर फोटो या लिस्ट भेजें, आगर शहर में 2 घंटे में होम डिलीवरी' : 'Send grocery list on WhatsApp, doorstep delivery across Agar town'
    },
    {
      feature: language === 'hi' ? 'मूल सिद्धांत व विश्वास' : 'Core Promise of Trust',
      era1988: language === 'hi' ? '100% शुद्धता, सही तौल और आगर मालवा परिवारों का प्यार' : '100% honesty, pure quality, and family relations',
      era2026: language === 'hi' ? 'वही 31 साल पुराना भरोसा और प्रामाणिकता — अब नए रूप में' : 'The exact same 31-year integrity & purity — only elevated'
    }
  ];

  return (
    <section id="legacy" className="py-16 md:py-24 bg-[#FAF9F6] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#0F284E]/70">
            <History className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span>{language === 'hi' ? '31+ वर्षों की गौरवशाली यात्रा' : 'Our 31+ Year Journey'}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F284E] tracking-tight">
            {language === 'hi'
              ? 'विजय किराना स्टोर से अजय विजय मार्ट तक'
              : 'From Vijay Kirana Store to Ajay Vijay Mart'}
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            {language === 'hi'
              ? '1995 में आगर मालवा के बाज़ार में एक छोटे से भरोसेमंद काउंटर से शुरू हुआ सफर। आज उसी विश्वास, निष्ठा और शुद्धता के साथ हम आपके लिए लाए हैं आधुनिक शॉपिंग का भविष्य।'
              : 'What began in 1995 as a humble grocery counter known for unadulterated spices has evolved into Agar Malwa’s premier shopping landmark — retaining the same honest soul.'}
          </p>

          {/* Interactive Era Segmented Switcher */}
          <div className="inline-flex items-center p-1 bg-slate-200/80 rounded-xl mt-4">
            <button
              onClick={() => setActiveEra('both')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeEra === 'both' ? 'bg-[#0F284E] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {language === 'hi' ? 'दोनों युगों की तुलना' : 'Side-by-Side Transition'}
            </button>
            <button
              onClick={() => setActiveEra('1988')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeEra === '1988' ? 'bg-amber-800 text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {language === 'hi' ? '1995: विजय किराना' : '1995: Vijay Kirana Store'}
            </button>
            <button
              onClick={() => setActiveEra('2026')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                activeEra === '2026' ? 'bg-[#0F284E] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {language === 'hi' ? 'आज: अजय विजय मार्ट' : 'Today: Ajay Vijay Mart'}
            </button>
          </div>
        </div>

        {/* Visual Split-Screen / Story Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Era 1995: Vijay Kirana */}
          {(activeEra === 'both' || activeEra === '1988') && (
            <div className={`${activeEra === 'both' ? 'lg:col-span-6' : 'lg:col-span-12'} flex flex-col justify-between`}>
              <div className="bg-white rounded-2xl p-6 border border-amber-900/20 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                      Phase I · 1995
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      The Trusted Foundation
                    </span>
                  </div>
                  <VijayKiranaHeritageGraphic className="mb-4" />
                  <h3 className="text-lg font-bold text-[#2A160C] mb-2">
                    {language === 'hi' ? 'विजय किराना स्टोर — विश्वास का पहला बीज' : 'Vijay Kirana Store — The Foundation of Pure Trust'}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {language === 'hi'
                      ? 'आगर मालवा के हर घर की रसोई में विजय किराना के खड़े मसाले और गेहूं की महक थी। यहाँ ग्राहक केवल ग्राहक नहीं, परिवार के सदस्य हुआ करते थे।'
                      : 'Built on the principle that food is sacred. For three decades, families across Agar trusted Vijay Ji’s personal word on grain purity and hand-selected spices.'}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-amber-900 font-semibold">
                  <Award className="w-4 h-4 text-amber-700" />
                  <span>3 Decades of Unbroken Goodwill in Agar Malwa</span>
                </div>
              </div>
            </div>
          )}

          {/* Era 2026: Ajay Vijay Mart */}
          {(activeEra === 'both' || activeEra === '2026') && (
            <div className={`${activeEra === 'both' ? 'lg:col-span-6' : 'lg:col-span-12'} flex flex-col justify-between`}>
              <div className="bg-[#0F284E] text-white rounded-2xl p-6 border border-[#E5A93C]/30 shadow-md h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E5A93C]">
                      Phase II · Present Day
                    </span>
                    <span className="text-xs text-slate-300 font-medium">
                      The Future of Shopping
                    </span>
                  </div>

                  {/* Highlights Grid */}
                  <div className="space-y-3 mb-6">
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-1">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#E5A93C]">
                        <Sparkles className="w-4 h-4" />
                        <span>{language === 'hi' ? '3 मंज़िला आधुनिक शॉपिंग कॉम्पलेक्स' : '3 Floors of Curated Shopping'}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {language === 'hi'
                          ? 'ग्राउंड फ्लोर पर शुद्ध किराना व अनाज, फर्स्ट फ्लोर पर पर्सनल केयर व उपहार, सेकंड फ्लोर पर बर्तन व घरेलू सामान।'
                          : 'Ground floor for daily groceries & fresh staples; 1st floor for beauty & festive gifting; 2nd floor for kitchenware & home essentials.'}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
                        <span className="text-[#E5A93C] font-bold block mb-1">
                          {language === 'hi' ? '❄️ 100% सेंट्रल एसी' : '❄️ 100% Central AC'}
                        </span>
                        <span className="text-slate-300 text-[11px]">
                          {language === 'hi' ? 'आगर की गर्मी में आरामदायक खरीदारी' : 'Comfortable weather-proof shopping'}
                        </span>
                      </div>
                      <div className="bg-white/5 border border-white/10 p-3 rounded-lg">
                        <span className="text-[#E5A93C] font-bold block mb-1">
                          {language === 'hi' ? '🛗 लिफ्ट व रैंप सुविधा' : '🛗 Elevator & Ramp'}
                        </span>
                        <span className="text-slate-300 text-[11px]">
                          {language === 'hi' ? 'बुजुर्गों व व्हीलचेयर हेतु सुगम' : 'Elderly and wheelchair accessible'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {language === 'hi' ? 'अजय विजय मार्ट — आधुनिकता संग अटूट विश्वास' : 'Ajay Vijay Mart — World-Class Comfort, Same Warm Heart'}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {language === 'hi'
                      ? 'नई पीढ़ी की ज़रूरतों के मुताबिक अब आपको इंदौर या उज्जैन जाने की आवश्यकता नहीं। उत्तम गुणवत्ता और वाजिब दाम अब आपके अपने आगर मालवा में।'
                      : 'No longer do residents need to travel to Indore or Ujjain for modern shopping conveniences or luxury grocery brands. It is all right here.'}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-[#E5A93C] font-semibold">
                  <HeartHandshake className="w-4 h-4" />
                  <span>The Legacy Lives On in Every Corner</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Detailed Feature Matrix Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F284E]">
              {language === 'hi' ? 'परिवर्तन तालिका: कैसे बदला आपका खरीदारी अनुभव' : 'Evolution Matrix: The Transformation'}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              1995 ➔ 2026
            </span>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisons.map((item, idx) => (
              <div key={idx} className="p-4 md:px-6 md:py-3.5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center hover:bg-slate-50/60 transition-colors">
                <div className="md:col-span-3 text-xs font-bold text-slate-900">
                  {item.feature}
                </div>
                <div className="md:col-span-4 text-xs text-slate-500 flex items-start gap-1.5">
                  <span className="text-amber-700 font-semibold shrink-0">1995:</span>
                  <span>{item.era1988}</span>
                </div>
                <div className="md:col-span-5 text-xs text-[#0F284E] font-medium flex items-start gap-1.5">
                  <span className="text-[#E5A93C] font-bold shrink-0">Now:</span>
                  <span className="font-semibold text-slate-900">{item.era2026}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
