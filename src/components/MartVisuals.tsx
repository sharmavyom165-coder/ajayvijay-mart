import React from 'react';

// Architectural rendering of the modern 3-floor Ajay Vijay Mart building exterior
export const BuildingExteriorGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[380px] bg-gradient-to-b from-[#091A33] via-[#0F284E] to-[#081528] rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-end p-6 border border-[#E5A93C]/20 ${className}`}>
      {/* Twilight sky background with subtle stars and ambient glow */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_20%,#3B82F6_0%,transparent_60%)]" />
      <div className="absolute top-4 left-6 flex items-center gap-2 text-xs text-[#E5A93C] font-mono tracking-widest uppercase">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        Agar Malwa Central · Main Market Road
      </div>

      {/* Building Structure */}
      <div className="relative z-10 w-full max-w-xl bg-gradient-to-b from-[#1E3A67] to-[#122544] rounded-t-xl border-t-2 border-x-2 border-[#E5A93C]/40 shadow-2xl overflow-hidden">
        {/* Roof Parapet with Grand Signage */}
        <div className="bg-[#091A33] px-6 py-4 border-b border-[#E5A93C]/30 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-[#E5A93C] text-xs font-semibold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
            ESTD. 1995 · VIJAY KIRANA LEGACY
            <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
          </div>
          <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex items-center gap-2 mt-0.5">
            <span className="w-8 h-8 rounded-full bg-[#E5A93C] text-[#0F284E] inline-flex items-center justify-center font-black text-sm shadow">AV</span>
            <span>AJAY VIJAY MART</span>
          </div>
          <div className="text-xs text-amber-200/80 font-hindi font-medium">
            अजय विजय मार्ट · आगर मालवा
          </div>
        </div>

        {/* 2nd Floor: Household, Utensils, Luggage */}
        <div className="grid grid-cols-4 gap-2 p-3 bg-[#112443]/80 border-b border-[#E5A93C]/20">
          <div className="bg-gradient-to-b from-[#38bdf8]/20 to-[#fbbf24]/10 rounded border border-[#E5A93C]/30 h-16 flex flex-col items-center justify-center p-1 text-[11px] text-white">
            <span className="text-[10px] text-amber-300 font-semibold">2nd FLOOR</span>
            <span className="text-slate-300 text-[10px]">Home & Kitchen</span>
          </div>
          <div className="bg-gradient-to-b from-[#38bdf8]/20 to-[#fbbf24]/10 rounded border border-[#E5A93C]/30 h-16 flex flex-col items-center justify-center p-1 text-[11px] text-white">
            <span className="text-[10px] text-amber-300 font-semibold">GLASS AISLE</span>
            <span className="text-slate-300 text-[10px]">Crockery</span>
          </div>
          <div className="bg-gradient-to-b from-[#38bdf8]/20 to-[#fbbf24]/10 rounded border border-[#E5A93C]/30 h-16 flex flex-col items-center justify-center p-1 text-[11px] text-white">
            <span className="text-[10px] text-amber-300 font-semibold">LUGGAGE</span>
            <span className="text-slate-300 text-[10px]">Travel & Bags</span>
          </div>
          <div className="bg-gradient-to-b from-[#38bdf8]/20 to-[#fbbf24]/10 rounded border border-[#E5A93C]/30 h-16 flex flex-col items-center justify-center p-1 text-[11px] text-white">
            <span className="text-[10px] text-emerald-400 font-semibold">ELEVATOR</span>
            <span className="text-slate-300 text-[10px]">Multi-Floor</span>
          </div>
        </div>

        {/* 1st Floor: Personal Care, Cosmetics, Festive Hampers */}
        <div className="grid grid-cols-3 gap-2 p-3 bg-[#0d1d36]/90 border-b border-[#E5A93C]/20">
          <div className="bg-gradient-to-b from-amber-400/20 to-amber-600/10 rounded border border-[#E5A93C]/40 h-20 flex flex-col items-center justify-center p-1">
            <span className="text-xs text-amber-300 font-bold">1st FLOOR</span>
            <span className="text-xs text-white font-medium">Beauty & Cosmetics</span>
            <span className="text-[10px] text-amber-200/70">Top Indian & Global Brands</span>
          </div>
          <div className="bg-gradient-to-b from-amber-400/20 to-amber-600/10 rounded border border-[#E5A93C]/40 h-20 flex flex-col items-center justify-center p-1">
            <span className="text-xs text-amber-300 font-bold">GIFTING ZONE</span>
            <span className="text-xs text-white font-medium">Dry Fruits & Hampers</span>
            <span className="text-[10px] text-amber-200/70">Custom Packing</span>
          </div>
          <div className="bg-gradient-to-b from-amber-400/20 to-amber-600/10 rounded border border-[#E5A93C]/40 h-20 flex flex-col items-center justify-center p-1">
            <span className="text-xs text-amber-300 font-bold">CLEANING</span>
            <span className="text-xs text-white font-medium">Detergents & Care</span>
            <span className="text-[10px] text-amber-200/70">Bulk Super Saver</span>
          </div>
        </div>

        {/* Ground Floor: Main Supermarket, Staples, Express Checkouts */}
        <div className="p-4 bg-gradient-to-b from-[#14284b] to-[#0a1526] relative">
          <div className="flex items-center justify-between text-xs text-amber-200/90 pb-2 border-b border-white/10 font-medium">
            <span>GROUND FLOOR: Fresh Staples, Ghee, Sharbati Atta & Beverages</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
              Central AC On
            </span>
          </div>

          <div className="mt-3 grid grid-cols-4 gap-2">
            <div className="col-span-2 bg-[#0d1e38] border border-[#E5A93C]/50 rounded-lg p-2 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-white uppercase tracking-wider">Automated Entry</div>
                <div className="text-[10px] text-slate-300">Wheelchair Friendly Ramp</div>
              </div>
              <span className="text-lg">🛒</span>
            </div>
            <div className="col-span-2 bg-[#0d1e38] border border-[#E5A93C]/50 rounded-lg p-2 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold text-[#E5A93C] uppercase tracking-wider">Fast POS Billing</div>
                <div className="text-[10px] text-slate-300">4 Computerized Counters</div>
              </div>
              <span className="text-lg">⚡</span>
            </div>
          </div>
        </div>
      </div>

      {/* Paved Parking Bay & Driveway */}
      <div className="w-full max-w-xl h-10 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 border-t-2 border-amber-400/40 rounded-b-lg flex items-center justify-around px-4 text-[10px] text-slate-300 font-medium z-10">
        <span className="flex items-center gap-1 text-amber-300">
          <span>🅿️</span> Free Dedicated Parking
        </span>
        <span className="text-slate-400">·</span>
        <span>2-Wheeler & 4-Wheeler Bays</span>
        <span className="text-slate-400">·</span>
        <span className="text-emerald-300">WhatsApp Delivery Dispatch</span>
      </div>
    </div>
  );
};

// Heritage visual of Vijay Kirana Store (Est. 1988)
export const VijayKiranaHeritageGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[320px] bg-gradient-to-b from-[#2B1B12] via-[#3E2718] to-[#1F130B] rounded-2xl overflow-hidden p-6 border border-amber-900/40 flex flex-col justify-between ${className}`}>
      {/* Sepia vintage atmospheric texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#d97706_0%,transparent_70%)] opacity-20 pointer-events-none" />

      {/* Vintage Wooden Signboard */}
      <div className="relative z-10 bg-[#422212] border-2 border-[#b45309] rounded-lg p-3 shadow-lg text-center">
        <div className="text-[10px] text-amber-400 font-mono tracking-widest uppercase">
          ESTABLISHED 1995 · AGAR MALWA (M.P.)
        </div>
        <div className="text-xl md:text-2xl font-black text-amber-100 font-hindi tracking-wide mt-1">
          विजय किराना स्टोर
        </div>
        <div className="text-xs text-amber-300/90 font-medium">
          Vijay Kirana Store — Pure Spices, Ghee & Sharbati Gehu
        </div>
      </div>

      {/* Traditional Kirana Counter Scene */}
      <div className="relative z-10 my-4 space-y-3">
        <div className="bg-[#2A160C]/90 border border-amber-800/40 rounded-lg p-3 text-xs text-amber-200">
          <div className="flex items-center gap-2 font-bold text-amber-400 mb-1">
            <span>⚖️</span>
            <span>The Honest Brass Scale & Personal Warmth</span>
          </div>
          <p className="text-[11px] text-amber-100/80 leading-relaxed">
            For over 31 years, every grain was weighed with honesty. Vijay Ji knew every family in Agar by name, their festive needs, and guaranteed 100% adulteration-free staples.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-[#381E10] border border-amber-700/40 rounded p-2">
            <span className="block text-base">🌾</span>
            <span className="text-[10px] font-semibold text-amber-300 block">Jute Sacks</span>
            <span className="text-[9px] text-amber-200/70">Direct from farmers</span>
          </div>
          <div className="bg-[#381E10] border border-amber-700/40 rounded p-2">
            <span className="block text-base">🫙</span>
            <span className="text-[10px] font-semibold text-amber-300 block">Pure Spices</span>
            <span className="text-[9px] text-amber-200/70">Stone ground masala</span>
          </div>
          <div className="bg-[#381E10] border border-amber-700/40 rounded p-2">
            <span className="block text-base">🤝</span>
            <span className="text-[10px] font-semibold text-amber-300 block">Unshakable Trust</span>
            <span className="text-[9px] text-amber-200/70">3 Generations loyal</span>
          </div>
        </div>
      </div>

      {/* Quote Banner */}
      <div className="relative z-10 text-center text-xs text-amber-300 italic border-t border-amber-800/60 pt-3">
        "वही पुराना विश्वास, अब नए आधुनिक स्वरूप में!"
      </div>
    </div>
  );
};

// Item graphic icons based on category
export const ProductIconGraphic: React.FC<{ type: string; category: string; className?: string }> = ({
  type,
  category,
  className = ''
}) => {
  switch (type) {
    case 'staples':
      return (
        <div className={`w-full h-full bg-gradient-to-br from-amber-100 to-amber-200/70 flex flex-col items-center justify-center p-4 relative ${className}`}>
          <div className="w-16 h-20 bg-amber-50 border-2 border-amber-600/30 rounded-lg shadow-sm flex flex-col items-center justify-between p-2">
            <div className="text-[9px] font-bold text-amber-900 uppercase tracking-tighter">MALWA WHEAT</div>
            <span className="text-2xl">🌾</span>
            <div className="text-[8px] font-bold text-emerald-800 bg-emerald-100 px-1 rounded">100% PURE</div>
          </div>
        </div>
      );
    case 'dairy':
      return (
        <div className={`w-full h-full bg-gradient-to-br from-amber-50 to-yellow-100 flex flex-col items-center justify-center p-4 relative ${className}`}>
          <div className="w-16 h-20 bg-gradient-to-b from-yellow-300 to-amber-400 border-2 border-amber-500 rounded-xl shadow-md flex flex-col items-center justify-between p-2">
            <span className="text-[9px] font-black text-amber-950 uppercase">DESI GHEE</span>
            <span className="text-2xl">🧈</span>
            <span className="text-[8px] font-bold text-amber-950 bg-yellow-200 px-1 rounded">BILONA</span>
          </div>
        </div>
      );
    case 'spices':
      return (
        <div className={`w-full h-full bg-gradient-to-br from-red-50 to-orange-100 flex flex-col items-center justify-center p-4 relative ${className}`}>
          <div className="w-16 h-20 bg-amber-900 border-2 border-orange-500/50 rounded-xl shadow-md flex flex-col items-center justify-between p-2 text-white">
            <span className="text-[8px] font-bold text-amber-200 uppercase tracking-tighter">VIJAY MASALA</span>
            <span className="text-2xl">🌶️</span>
            <span className="text-[8px] font-bold bg-amber-800 px-1 rounded text-amber-200">AROMATIC</span>
          </div>
        </div>
      );
    case 'namkeen':
      return (
        <div className={`w-full h-full bg-gradient-to-br from-yellow-50 to-orange-100 flex flex-col items-center justify-center p-4 relative ${className}`}>
          <div className="w-16 h-20 bg-amber-500 border-2 border-yellow-600 rounded-xl shadow-md flex flex-col items-center justify-between p-2 text-white">
            <span className="text-[8px] font-bold text-amber-950 uppercase">RATLAM SEV</span>
            <span className="text-2xl">🥨</span>
            <span className="text-[8px] font-bold bg-yellow-400 text-yellow-950 px-1 rounded">CRISPY</span>
          </div>
        </div>
      );
    case 'dryfruits':
    case 'festive_box':
      return (
        <div className={`w-full h-full bg-gradient-to-br from-amber-900/10 to-[#0F284E]/10 flex flex-col items-center justify-center p-4 relative ${className}`}>
          <div className="w-18 h-20 bg-gradient-to-b from-[#0F284E] to-[#1E3A67] border-2 border-[#E5A93C] rounded-xl shadow-md flex flex-col items-center justify-between p-2 text-white">
            <span className="text-[8px] font-bold text-[#E5A93C] uppercase tracking-wider">ROYAL HAMPER</span>
            <span className="text-2xl">🎁</span>
            <span className="text-[8px] font-bold bg-[#E5A93C] text-[#0F284E] px-1 rounded">SHAHI PACK</span>
          </div>
        </div>
      );
    case 'cosmetics':
    case 'soap':
      return (
        <div className={`w-full h-full bg-gradient-to-br from-rose-50 to-pink-100 flex flex-col items-center justify-center p-4 relative ${className}`}>
          <div className="w-16 h-20 bg-white border-2 border-rose-300 rounded-xl shadow-md flex flex-col items-center justify-between p-2">
            <span className="text-[8px] font-bold text-rose-800 uppercase">HERBAL GLOW</span>
            <span className="text-2xl">✨</span>
            <span className="text-[8px] font-bold bg-rose-100 text-rose-700 px-1 rounded">AYURVEDA</span>
          </div>
        </div>
      );
    case 'detergent':
    case 'cleaner':
      return (
        <div className={`w-full h-full bg-gradient-to-br from-sky-50 to-blue-100 flex flex-col items-center justify-center p-4 relative ${className}`}>
          <div className="w-16 h-20 bg-gradient-to-b from-blue-600 to-blue-700 border-2 border-sky-400 rounded-xl shadow-md flex flex-col items-center justify-between p-2 text-white">
            <span className="text-[8px] font-bold text-sky-200 uppercase">POWER CLEAN</span>
            <span className="text-2xl">🧼</span>
            <span className="text-[8px] font-bold bg-white text-blue-800 px-1 rounded">99.9% GERM</span>
          </div>
        </div>
      );
    default:
      return (
        <div className={`w-full h-full bg-slate-100 flex flex-col items-center justify-center p-4 ${className}`}>
          <span className="text-3xl">🛍️</span>
          <span className="text-[10px] text-slate-500 font-medium mt-1">AJAY VIJAY MART</span>
        </div>
      );
  }
};
