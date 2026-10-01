import React from 'react';
import { Wind, Car, Accessibility, Layers, CreditCard, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AmenitiesSectionProps {
  language: 'en' | 'hi';
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ language }) => {
  const amenities = [
    {
      icon: <Layers className="w-6 h-6 text-[#E5A93C]" />,
      title: language === 'hi' ? '3 मंजिला आधुनिक परिसर' : '3-Floor Multi-Level Mart',
      badge: language === 'hi' ? 'सुव्यवस्थित विभाग' : 'Departmentalized',
      desc: language === 'hi'
        ? 'ग्राउंड फ्लोर पर दैनिक किराना व अनाज, फर्स्ट फ्लोर पर पर्सनल केयर व कॉस्मेटिक्स, सेकंड फ्लोर पर बर्तन व घरेलू सामान।'
        : 'Ground Floor: Fresh staples & groceries; 1st Floor: Cosmetics & beauty; 2nd Floor: Cookware, storage & appliances.'
    },
    {
      icon: <Wind className="w-6 h-6 text-sky-400" />,
      title: language === 'hi' ? '100% सेंट्रल एयर कंडीशनिंग' : 'Central Air Conditioning',
      badge: language === 'hi' ? 'आरामदायक वातावरण' : 'Climate Controlled',
      desc: language === 'hi'
        ? 'मालवा की चिलचिलाती गर्मी में भी पूरे परिवार के साथ सुकून और ठंडक में आराम से खरीदारी करें।'
        : 'Full building climate control ensures a pleasant, sweat-free shopping experience for families year-round.'
    },
    {
      icon: <Car className="w-6 h-6 text-emerald-400" />,
      title: language === 'hi' ? 'निःशुल्क समर्पित पार्किंग' : 'Free Customer Parking',
      badge: language === 'hi' ? 'कार व बाइक बे' : '2W & 4W Bays',
      desc: language === 'hi'
        ? 'स्टोर के ठीक सामने सुरक्षित दोपहिया और चारपहिया वाहन पार्किंग। कोई नो-पार्किंग या जाम का झंझट नहीं।'
        : 'Dedicated paved parking lot directly in front of the mart entrance for hassle-free car and scooter parking.'
    },
    {
      icon: <Accessibility className="w-6 h-6 text-indigo-400" />,
      title: language === 'hi' ? 'वरिष्ठ नागरिक व व्हीलचेयर रैंप' : 'Wheelchair & Senior Friendly',
      badge: language === 'hi' ? 'लिफ्ट व रैंप' : 'Full Accessibility',
      desc: language === 'hi'
        ? 'प्रवेश द्वार पर सुगम ढलान वाला रैंप तथा सभी मंजिलों तक जाने के लिए आधुनिक पैसेंजर लिफ्ट की सुविधा।'
        : 'Gentle incline entrance ramp and smooth passenger elevator connecting all three shopping floors effortlessly.'
    },
    {
      icon: <CreditCard className="w-6 h-6 text-amber-400" />,
      title: language === 'hi' ? '4 सुपरफास्ट कंप्यूटर बिलिंग' : 'Express Computerized POS',
      badge: language === 'hi' ? 'शून्य प्रतीक्षा' : 'Zero Queue Delay',
      desc: language === 'hi'
        ? 'बारकोड स्कैनिंग से चंद सेकंडों में बिलिंग। नक़द, PhonePe/GooglePay/UPI, क्रेडिट व डेबिट कार्ड्स स्वीकार्य।'
        : 'High-speed barcode checkout counters with printed receipts, paperless WhatsApp e-bills, UPI & card support.'
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-400" />,
      title: language === 'hi' ? 'आगर शहर में होम डिलीवरी' : 'Prompt Doorstep Delivery',
      badge: language === 'hi' ? 'व्हाट्सएप सुविधा' : 'Within 2 Hours',
      desc: language === 'hi'
        ? 'व्हाट्सएप पर अपनी पर्ची भेजें और आगर मालवा नगर सीमा के भीतर 2 घंटे में सामान सुरक्षित घर मंगवाएं।'
        : 'Send a photo or text of your grocery list on WhatsApp for careful packing and speedy doorstep delivery in Agar.'
    }
  ];

  return (
    <section id="amenities" className="py-16 md:py-20 bg-[#0F284E] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#E5A93C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#E5A93C] mb-1">
            {language === 'hi' ? 'विश्वस्तरीय सुविधाएं व सुरक्षा' : 'Modern Shopping Amenities'}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {language === 'hi'
              ? 'आगर मालवा में पहली बार ऐसा अनुभव'
              : 'Designed for Supreme Family Comfort'}
          </h2>
          <p className="text-slate-300 text-sm mt-2 leading-relaxed">
            {language === 'hi'
              ? 'छोटे कस्बों की असुविधाओं को अलविदा कहें। अजय विजय मार्ट में हर छोटी-बड़ी सुविधा आपके आराम को ध्यान में रखकर तैयार की गई है।'
              : 'From wide aisles and smooth elevators to guaranteed parking and computerized bills — retail elevated in Agar Malwa.'}
          </p>
        </div>

        {/* Amenities Cards Grid: 3 cols desktop, 1-2 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] hover:border-[#E5A93C]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    {item.icon}
                  </div>
                  {/* Quiet unboxed text tag */}
                  <span className="text-[11px] font-semibold text-amber-300/90 tracking-wide">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified On-Premises Feature</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
