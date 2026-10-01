import React, { useState } from 'react';
import { Star, Instagram, Heart, MessageCircle, ExternalLink, CheckCircle, Quote, ThumbsUp, UserPlus, PhoneCall, Sparkles } from 'lucide-react';
import { REVIEWS, INSTAGRAM_POSTS, STORE_INFO, InstagramPost } from '../data/martData';
import { BrandLogo } from './BrandLogo';

interface SocialProofProps {
  language: 'en' | 'hi';
}

export const SocialProof: React.FC<SocialProofProps> = ({ language }) => {
  const [posts, setPosts] = useState<InstagramPost[]>(INSTAGRAM_POSTS);
  const [likedPosts, setLikedPosts] = useState<{ [id: string]: boolean }>({});
  const [isFollowing, setIsFollowing] = useState(false);

  const handleToggleLike = (id: string) => {
    setLikedPosts((prev) => {
      const isCurrentlyLiked = !prev[id];
      setPosts((current) =>
        current.map((post) =>
          post.id === id
            ? { ...post, likes: post.likes + (isCurrentlyLiked ? 1 : -1) }
            : post
        )
      );
      return { ...prev, [id]: isCurrentlyLiked };
    });
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-[#FAF9F6] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        {/* Sub-Section 1: Google Maps Reviews & Rating */}
        <div>
          {/* Header with Google Rating Badge */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0F284E]/70 mb-1">
                <span>Google Maps Verified</span>
                <span>·</span>
                <span>Agar Malwa Shoppers</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F284E] tracking-tight">
                {language === 'hi' ? 'आगर मालवा के परिवारों का भरोसा' : 'Trusted by Families Across Agar Malwa'}
              </h2>
            </div>

            {/* Google Rating Block */}
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center font-bold text-blue-600 text-lg">
                G
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-base font-extrabold text-[#0F284E] tabular-nums">4.8</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  480+ Google Reviews · Top Rated Supermarket
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {rev.date}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">
                      {rev.author}
                    </h4>
                    <span className="text-[10px] text-slate-500">
                      {rev.locality}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-Section 2: Dynamic Instagram Community Feed (@ajayvijaymart) */}
        <div className="pt-8 border-t border-slate-200">
          {/* Authentic Instagram Profile Header Bar replicating the user's mobile screen */}
          <div className="bg-[#091A33] text-white rounded-3xl p-6 md:p-8 shadow-xl border border-[#E5A93C]/30 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {/* Profile Avatar & Details */}
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#E5A93C] via-amber-400 to-[#0F284E] shadow-lg">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center p-1 overflow-hidden">
                      <BrandLogo size={80} />
                    </div>
                  </div>
                  <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs border-2 border-[#091A33]">
                    ✓
                  </span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-white">
                      @ajayvijaymart
                    </h3>
                  </div>
                  <div className="text-xs font-bold text-[#E5A93C] tracking-wide">
                    AJAY VIJAY MART | AGAR MALWA
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium">
                    Supermarket · Since 1995
                  </div>
                  <div className="text-xs text-slate-200 space-y-0.5 pt-1">
                    <p className="flex items-center gap-1.5">
                      <span>🛒</span>
                      <span>Your Everyday Shopping Destination</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <span>💯</span>
                      <span className="text-amber-200 font-semibold">Quality | Choice | Value</span>
                    </p>
                    <p className="flex items-center gap-1.5">
                      <span>🎁</span>
                      <span>Offers | New Arrivals | Updates</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats & Actions */}
              <div className="flex flex-col sm:items-end gap-3 w-full md:w-auto">
                <div className="flex items-center gap-6 text-center text-xs">
                  <div>
                    <span className="block font-black text-white text-base tabular-nums">4</span>
                    <span className="text-slate-400 text-[10px] uppercase">posts</span>
                  </div>
                  <div>
                    <span className="block font-black text-white text-base tabular-nums">325</span>
                    <span className="text-slate-400 text-[10px] uppercase">followers</span>
                  </div>
                  <div>
                    <span className="block font-black text-white text-base tabular-nums">443</span>
                    <span className="text-slate-400 text-[10px] uppercase">following</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto pt-2">
                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isFollowing
                        ? 'bg-slate-700 text-white'
                        : 'bg-[#E5A93C] hover:bg-[#d6982f] text-[#0F284E] shadow-sm'
                    }`}
                  >
                    {isFollowing ? 'Following ✓' : 'Follow @ajayvijaymart'}
                  </button>
                  <a
                    href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    Message
                  </a>
                  <a
                    href={`tel:${STORE_INFO.phone}`}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-amber-300 transition-colors"
                    title="Call Store"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Replicated 4 Official Instagram Posts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Post 1: Real Building Exterior & Hiring Post */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group">
              <div className="h-56 bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#1E3A67] relative p-4 flex flex-col justify-between text-white overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-black bg-rose-600 px-2 py-0.5 rounded text-white uppercase tracking-wider">
                    NOW HIRING
                  </span>
                  <span className="text-[10px] text-amber-300 font-mono">Store Front</span>
                </div>

                {/* Building facade representation */}
                <div className="z-10 bg-slate-900/90 border border-amber-400/40 rounded-xl p-3 text-center shadow-lg">
                  <div className="text-[11px] font-black text-amber-400 uppercase tracking-widest">
                    AJAY VIJAY MART AGAR (M.P.)
                  </div>
                  <div className="text-xs text-white font-hindi font-bold mt-1">
                    नौकरी का सुनहरा मौका!
                  </div>
                  <div className="text-[10px] text-slate-300 font-hindi">
                    कई पदों पर भर्ती जारी है
                  </div>
                  <div className="text-[10px] text-emerald-400 font-mono font-bold mt-1">
                    📞 7771075551 / 9981414282
                  </div>
                </div>

                <div className="z-10 text-center text-[10px] text-slate-400">
                  3-Storey Glass Building · Main Market Road
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <p className="text-xs text-slate-700 leading-relaxed font-hindi">
                  🏢 अजय विजय मार्ट आगर (म.प्र.) — नए 3-मंजिला सुपरमार्केट में विभिन्न पदों पर भर्ती जारी है। संपर्क करें: 7771075551 / 9981414282
                </p>
                <div className="pt-2 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <button
                    onClick={() => handleToggleLike('ig-1')}
                    className="flex items-center gap-1 cursor-pointer hover:text-rose-600 transition-colors"
                  >
                    <Heart className={`w-3.5 h-3.5 ${likedPosts['ig-1'] ? 'fill-rose-600 text-rose-600' : ''}`} />
                    <span className="tabular-nums text-[11px]">{posts[0].likes}</span>
                  </button>
                  <span className="text-[10px] text-slate-400">@ajayvijaymart</span>
                </div>
              </div>
            </div>

            {/* Post 2: Janmashtami Festive Greeting */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group">
              <div className="h-56 bg-gradient-to-b from-amber-50 to-amber-100 relative p-4 flex flex-col items-center justify-between text-center overflow-hidden border-b border-amber-200">
                <div className="w-full flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold bg-amber-400 text-amber-950 px-2 py-0.5 rounded uppercase">
                    FESTIVE
                  </span>
                  <span className="text-[10px] text-amber-900 font-medium">जन्माष्टमी</span>
                </div>

                <div className="z-10 my-auto space-y-1">
                  <span className="text-3xl">🪈 🦚</span>
                  <h4 className="text-base font-black text-amber-950 font-hindi">
                    श्री कृष्ण जन्माष्टमी की हार्दिक शुभकामनाएँ
                  </h4>
                  <div className="text-[10px] font-black text-[#0F284E] tracking-widest uppercase">
                    AJAY VIJAY MART
                  </div>
                  <div className="text-[9px] text-amber-800 font-semibold uppercase">
                    AGAR MALWA
                  </div>
                </div>

                <div className="text-[10px] text-amber-800 font-medium z-10">
                  शुद्ध माखन, मिश्री व पूजा सामग्री
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <p className="text-xs text-slate-700 leading-relaxed font-hindi">
                  ✨ कान्हा की कृपा आप सभी पर बनी रहे। अजय विजय मार्ट, आगर मालवा परिवार की ओर से बधाई।
                </p>
                <div className="pt-2 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <button
                    onClick={() => handleToggleLike('ig-2')}
                    className="flex items-center gap-1 cursor-pointer hover:text-rose-600 transition-colors"
                  >
                    <Heart className={`w-3.5 h-3.5 ${likedPosts['ig-2'] ? 'fill-rose-600 text-rose-600' : ''}`} />
                    <span className="tabular-nums text-[11px]">{posts[1].likes}</span>
                  </button>
                  <span className="text-[10px] text-slate-400">@ajayvijaymart</span>
                </div>
              </div>
            </div>

            {/* Post 3: Ganesh Chaturthi Greeting */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group">
              <div className="h-56 bg-gradient-to-b from-orange-50 to-orange-100 relative p-4 flex flex-col items-center justify-between text-center overflow-hidden border-b border-orange-200">
                <div className="w-full flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold bg-orange-500 text-white px-2 py-0.5 rounded uppercase">
                    FESTIVE
                  </span>
                  <span className="text-[10px] text-orange-950 font-medium">गणेशोत्सव</span>
                </div>

                <div className="z-10 my-auto space-y-1">
                  <span className="text-3xl">🌺 🐘 🕉️</span>
                  <h4 className="text-base font-black text-orange-950 font-hindi">
                    श्री गणेश चतुर्थी की हार्दिक शुभकामनाएँ
                  </h4>
                  <div className="text-[10px] font-black text-[#0F284E] tracking-widest uppercase">
                    AJAY VIJAY MART
                  </div>
                  <div className="text-[9px] text-orange-800 font-semibold uppercase">
                    AGAR MALWA
                  </div>
                </div>

                <div className="text-[10px] text-orange-800 font-medium z-10">
                  मोदक, ड्रायफ्रूट्स व पूजन सामग्री
                </div>
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <p className="text-xs text-slate-700 leading-relaxed font-hindi">
                  🌺 विघ्नहर्ता भगवान श्री गणेश आपके जीवन में सुख, समृद्धि और मिठास भरें।
                </p>
                <div className="pt-2 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <button
                    onClick={() => handleToggleLike('ig-3')}
                    className="flex items-center gap-1 cursor-pointer hover:text-rose-600 transition-colors"
                  >
                    <Heart className={`w-3.5 h-3.5 ${likedPosts['ig-3'] ? 'fill-rose-600 text-rose-600' : ''}`} />
                    <span className="tabular-nums text-[11px]">{posts[2].likes}</span>
                  </button>
                  <span className="text-[10px] text-slate-400">@ajayvijaymart</span>
                </div>
              </div>
            </div>

            {/* Post 4: Official Logo Launch (Since 1995) */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group">
              <div className="h-56 bg-white relative p-4 flex flex-col items-center justify-center text-center overflow-hidden border-b border-slate-200">
                <BrandLogo size={130} />
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <p className="text-xs text-slate-700 leading-relaxed">
                  Our Official Identity: SINCE 1995 · AJAY VIJAY MART. Quality | Choice | Value 💯 Agar Malwa.
                </p>
                <div className="pt-2 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <button
                    onClick={() => handleToggleLike('ig-4')}
                    className="flex items-center gap-1 cursor-pointer hover:text-rose-600 transition-colors"
                  >
                    <Heart className={`w-3.5 h-3.5 ${likedPosts['ig-4'] ? 'fill-rose-600 text-rose-600' : ''}`} />
                    <span className="tabular-nums text-[11px]">{posts[3].likes}</span>
                  </button>
                  <span className="text-[10px] text-slate-400">@ajayvijaymart</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
