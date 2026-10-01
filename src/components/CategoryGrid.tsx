import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Plus, Minus, Check, Star, Info, Sparkles, Filter } from 'lucide-react';
import { CATEGORIES, PRODUCTS, Product } from '../data/martData';
import { ProductIconGraphic } from './MartVisuals';

interface CategoryGridProps {
  cart: { [productId: string]: number };
  onUpdateCart: (productId: string, quantity: number) => void;
  onOpenProductModal: (product: Product) => void;
  language: 'en' | 'hi';
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  cart,
  onUpdateCart,
  onOpenProductModal,
  language
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        product.name.toLowerCase().includes(q) ||
        product.hindiName.includes(q) ||
        product.brand.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="categories" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0F284E]/70 mb-1">
            {language === 'hi' ? '3 मंजिलों में 10,000+ उत्पाद' : 'Over 10,000+ Items Across 3 Floors'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F284E] tracking-tight">
            {language === 'hi' ? 'किराना व घरेलू सामान की श्रेणियां' : 'Shop by Department & Aisles'}
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            {language === 'hi'
              ? 'शुद्ध सामग्री, विश्वसनीय ब्रांड्स और थोक भाव पर आकर्षक छूट। अपनी पसंद की वस्तुएं सूची में जोड़ें।'
              : 'Directly sourced from trusted mills & certified brands. Tap items to build your WhatsApp shopping list.'}
          </p>
        </div>

        {/* Search Bar & Category Filter Segmented Controls */}
        <div className="space-y-4 mb-8">
          {/* Search Box */}
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={language === 'hi' ? 'गेहूं, घी, मसाले, चाय या सर्फ खोजें...' : 'Search atta, cow ghee, spices, tea, cosmetics...'}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs md:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F284E] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Interactive Category Tabs (Buttons following skill guidelines for interactive controls) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#0F284E] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <span>{language === 'hi' ? cat.hindi : cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid: 4 cols on desktop, 2 on mobile */}
        {filteredProducts.length === 0 ? (
          <div className="py-16 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-8">
            <span className="text-3xl">🔍</span>
            <h3 className="text-base font-bold text-slate-800 mt-2">
              {language === 'hi' ? 'कोई उत्पाद नहीं मिला' : 'No items match your search'}
            </h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              {language === 'hi'
                ? 'कृपया दूसरा नाम डालकर देखें या सीधे व्हाट्सएप पर अपनी सूची लिखकर भेज दें।'
                : 'Try searching with another keyword or simply send your handwritten grocery list on WhatsApp.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold text-[#0F284E] bg-amber-100 hover:bg-amber-200 rounded-lg transition-colors cursor-pointer"
            >
              {language === 'hi' ? 'सभी सामान देखें' : 'View All Products'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => {
              const qty = cart[product.id] || 0;

              return (
                <div
                  key={product.id}
                  className="group bg-[#FAF9F6] rounded-2xl border border-slate-200/80 overflow-hidden flex flex-col justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 relative"
                >
                  {/* Lead Graphic Container (65-75% visual weight) */}
                  <div
                    onClick={() => onOpenProductModal(product)}
                    className="h-44 w-full cursor-pointer overflow-hidden relative bg-slate-100"
                  >
                    <ProductIconGraphic
                      type={product.imagePlaceholder}
                      category={product.category}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Unboxed subtle text discount badge (Zero-Pill discipline) */}
                    <div className="absolute top-2 left-2 text-[11px] font-black text-white bg-[#0F284E] px-2 py-0.5 rounded shadow-sm">
                      {product.discount}% OFF
                    </div>

                    {product.badge && (
                      <div className="absolute top-2 right-2 text-[10px] font-bold text-amber-900 bg-amber-200/90 px-1.5 py-0.5 rounded shadow-sm">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Product Details Section */}
                  <div className="p-4 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Quiet Unboxed Metadata */}
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium mb-1">
                        <span className="uppercase tracking-wider">{product.brand}</span>
                        <span aria-hidden="true">·</span>
                        <span>{product.weight}</span>
                      </div>

                      {/* Title */}
                      <h3
                        onClick={() => onOpenProductModal(product)}
                        className="text-xs md:text-sm font-bold text-[#0F284E] line-clamp-1 hover:text-[#E5A93C] cursor-pointer transition-colors"
                        title={product.name}
                      >
                        {language === 'hi' ? product.hindiName : product.name}
                      </h3>

                      <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {product.description}
                      </p>
                    </div>

                    {/* Pricing & Add to Cart Controls */}
                    <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between gap-2">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-base font-extrabold text-[#0F284E] tabular-nums">
                            ₹{product.price}
                          </span>
                          <span className="text-[11px] text-slate-400 line-through tabular-nums">
                            ₹{product.mrp}
                          </span>
                        </div>
                        <span className="text-[10px] font-semibold text-emerald-700">
                          {language === 'hi' ? `बचत ₹${product.mrp - product.price}` : `Save ₹${product.mrp - product.price}`}
                        </span>
                      </div>

                      {/* Interactive Qty Stepper / Add button */}
                      {qty === 0 ? (
                        <button
                          onClick={() => onUpdateCart(product.id, 1)}
                          className="px-3 py-1.5 rounded-lg bg-[#0F284E] hover:bg-[#1a3866] text-white text-xs font-bold transition-all shadow-sm active:scale-95 flex items-center gap-1 cursor-pointer whitespace-nowrap"
                        >
                          <Plus className="w-3.5 h-3.5 text-[#E5A93C]" />
                          <span>{language === 'hi' ? 'जोड़ें' : 'Add'}</span>
                        </button>
                      ) : (
                        <div className="flex items-center gap-1.5 bg-[#0F284E] text-white rounded-lg p-0.5 shadow-sm">
                          <button
                            onClick={() => onUpdateCart(product.id, qty - 1)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded cursor-pointer transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-bold px-1 tabular-nums min-w-[16px] text-center text-[#E5A93C]">
                            {qty}
                          </span>
                          <button
                            onClick={() => onUpdateCart(product.id, qty + 1)}
                            className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded cursor-pointer transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
