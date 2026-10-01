import React, { useRef } from 'react';
import { X, Download, Printer, Share2, Sparkles, CheckCircle, Tag } from 'lucide-react';
import { STORE_INFO } from '../data/martData';

interface WeeklyFlyerModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'hi';
}

export const WeeklyFlyerModal: React.FC<WeeklyFlyerModalProps> = ({
  isOpen,
  onClose,
  language
}) => {
  const flyerRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Generate text/html printable flyer download
    const flyerContent = flyerRef.current?.innerText || 'Ajay Vijay Mart Weekly Bachat Flyer';
    const blob = new Blob([flyerContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Ajay-Vijay-Mart-Weekly-Offers-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden my-6 border border-slate-200 flex flex-col">
        {/* Flyer Action Bar */}
        <div className="bg-[#0F284E] text-white p-4 flex items-center justify-between border-b border-[#E5A93C]/30">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#E5A93C] text-[#0F284E] font-black text-xs flex items-center justify-center">
              AV
            </span>
            <div>
              <h3 className="text-sm font-bold">
                {language === 'hi' ? 'साप्ताहिक महा-बचत पर्चा (Weekly Flyer)' : 'Ajay Vijay Mart · Weekly Offers Flyer'}
              </h3>
              <p className="text-[10px] text-amber-200">
                {language === 'hi' ? 'आगर मालवा स्टोर में वैध' : 'Valid across all departments in Agar Malwa'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1 transition-colors cursor-pointer"
              title="Print flyer"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-[#E5A93C] hover:bg-[#d6982f] text-[#0F284E] font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Flyer Sheet */}
        <div ref={flyerRef} className="p-6 md:p-8 bg-[#FAF9F6] text-[#0F284E] space-y-6 overflow-y-auto max-h-[75vh]">
          {/* Masthead */}
          <div className="border-4 border-[#0F284E] p-4 text-center rounded-xl bg-white shadow-sm relative">
            <div className="text-[11px] font-bold tracking-widest text-[#E5A93C] uppercase bg-[#0F284E] inline-block px-3 py-0.5 rounded text-white mb-2">
              WEEKLY SPECIAL DEALS · आगर मालवा
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-[#0F284E] tracking-tight">
              AJAY VIJAY MART
            </h1>
            <div className="text-xs text-slate-600 font-hindi font-semibold">
              पूर्व नाम: विजय किराना स्टोर (स्थापना 1995) · मेन मार्केट रोड, आगर मालवा
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              📞 +91 98260 54321 · WhatsApp Orders & Fast Doorstep Delivery
            </div>
          </div>

          {/* Flash Deals Grid in Flyer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-amber-50/80 border-2 border-dashed border-[#E5A93C] rounded-xl p-4 space-y-2">
              <span className="text-[10px] font-bold bg-[#E5A93C] text-[#0F284E] px-2 py-0.5 rounded uppercase">
                GRAIN & FLOUR DEALS
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                MP Sharbati Gold Atta 10kg
              </h4>
              <p className="text-xs text-slate-600">
                Stone-ground from premium Malwa wheat.
              </p>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-lg font-black text-[#0F284E]">₹435</span>
                <span className="text-xs text-slate-400 line-through">₹490</span>
                <span className="text-xs font-bold text-emerald-700">Save ₹55</span>
              </div>
            </div>

            <div className="bg-amber-50/80 border-2 border-dashed border-[#E5A93C] rounded-xl p-4 space-y-2">
              <span className="text-[10px] font-bold bg-[#0F284E] text-white px-2 py-0.5 rounded uppercase">
                DESI GHEE SPECIAL
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Amrit Sagar Cow Ghee 1 Litre
              </h4>
              <p className="text-xs text-slate-600">
                Granular aromatic golden cow ghee with lab purity.
              </p>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-lg font-black text-[#0F284E]">₹649</span>
                <span className="text-xs text-slate-400 line-through">₹750</span>
                <span className="text-xs font-bold text-emerald-700">Save ₹101</span>
              </div>
            </div>

            <div className="bg-blue-50/80 border-2 border-dashed border-blue-300 rounded-xl p-4 space-y-2">
              <span className="text-[10px] font-bold bg-blue-700 text-white px-2 py-0.5 rounded uppercase">
                HOUSEHOLD EXTRA SAVER
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Surf Excel Matic 4kg + 1kg Extra Free
              </h4>
              <p className="text-xs text-slate-600">
                Machine & bucket wash with pleasant lingering scent.
              </p>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-lg font-black text-[#0F284E]">₹680</span>
                <span className="text-xs text-slate-400 line-through">₹850</span>
                <span className="text-xs font-bold text-emerald-700">Save ₹170</span>
              </div>
            </div>

            <div className="bg-amber-50/80 border-2 border-dashed border-amber-400 rounded-xl p-4 space-y-2">
              <span className="text-[10px] font-bold bg-amber-800 text-white px-2 py-0.5 rounded uppercase">
                MALWA FESTIVE HAMPER
              </span>
              <h4 className="text-sm font-bold text-slate-900">
                Shahi 4-in-1 Dry Fruit Gift Box (800g)
              </h4>
              <p className="text-xs text-slate-600">
                Cashews, California Almonds, Pistachios & Kishmish.
              </p>
              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-lg font-black text-[#0F284E]">₹999</span>
                <span className="text-xs text-slate-400 line-through">₹1399</span>
                <span className="text-xs font-bold text-emerald-700">Save ₹400</span>
              </div>
            </div>
          </div>

          {/* Terms & WhatsApp Delivery Note */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 text-xs text-slate-600">
            <div className="flex items-center gap-2 font-bold text-[#0F284E]">
              <Sparkles className="w-4 h-4 text-[#E5A93C]" />
              <span>How to claim these offers in Agar Malwa:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-[11px]">
              <li>Visit Ajay Vijay Mart on Main Market Road, Near Old Bus Stand.</li>
              <li>Or simply screenshot this flyer and WhatsApp it to <span className="font-bold text-[#0F284E]">+91 98260 54321</span>.</li>
              <li>Free delivery on orders above ₹500 within Agar town municipality.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 p-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Offers subject to stock availability · Est. 1988</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 cursor-pointer"
          >
            Close Flyer
          </button>
        </div>
      </div>
    </div>
  );
};
