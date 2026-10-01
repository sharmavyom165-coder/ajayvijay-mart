import React from 'react';
import { X, Plus, Minus, ShieldCheck, Check, ShoppingBag, Sparkles, MessageSquare } from 'lucide-react';
import { Product, STORE_INFO } from '../data/martData';
import { ProductIconGraphic } from './MartVisuals';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  cartQty: number;
  onUpdateCart: (productId: string, qty: number) => void;
  language: 'en' | 'hi';
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  cartQty,
  onUpdateCart,
  language
}) => {
  if (!product) return null;

  const handleDirectWhatsAppOrder = () => {
    const text = `Hello Ajay Vijay Mart, I would like to order:\n*${product.name}* (${product.weight})\nPrice: ₹${product.price} (MRP: ₹${product.mrp})\nQuantity: ${cartQty > 0 ? cartQty : 1}\n\nPlease deliver to my address in Agar Malwa.`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col relative my-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Visual Area */}
        <div className="h-56 bg-slate-100 relative overflow-hidden flex items-center justify-center">
          <ProductIconGraphic
            type={product.imagePlaceholder}
            category={product.category}
            className="w-full h-full"
          />
          <div className="absolute bottom-3 left-3 bg-[#0F284E] text-[#E5A93C] text-xs font-black px-2.5 py-1 rounded shadow">
            {product.discount}% DISCOUNT
          </div>
          {product.badge && (
            <div className="absolute top-3 left-3 bg-amber-200 text-amber-900 text-xs font-bold px-2 py-0.5 rounded shadow">
              {product.badge}
            </div>
          )}
        </div>

        {/* Product Information */}
        <div className="p-6 space-y-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
              <span className="uppercase tracking-wider">{product.brand}</span>
              <span>·</span>
              <span>{product.weight}</span>
              <span>·</span>
              <span className="text-amber-600 font-semibold">★ {product.rating} ({product.ratingCount} reviews)</span>
            </div>

            <h3 className="text-lg md:text-xl font-extrabold text-[#0F284E]">
              {product.name}
            </h3>
            <div className="text-sm font-hindi font-semibold text-slate-700 mt-0.5">
              {product.hindiName}
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            {product.description}
          </p>

          {/* Pricing Box */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Our Special Mart Rate</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-[#0F284E] tabular-nums">
                  ₹{product.price}
                </span>
                <span className="text-xs text-slate-400 line-through tabular-nums">
                  MRP ₹{product.mrp}
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                You Save ₹{product.mrp - product.price}
              </span>
            </div>
          </div>

          {/* Heritage Purity Assurance */}
          <div className="flex items-center gap-2 text-xs text-slate-600 bg-amber-50/80 border border-amber-200 p-2.5 rounded-lg">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Purity Assured:</strong> Direct from certified suppliers. Backed by Vijay Kirana’s 31+ year honesty guarantee.
            </span>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center gap-3">
            {/* Quantity Controls */}
            <div className="flex items-center gap-2 bg-slate-100 rounded-xl p-1">
              <button
                onClick={() => onUpdateCart(product.id, Math.max(0, cartQty - 1))}
                className="w-8 h-8 rounded-lg hover:bg-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-sm font-bold w-6 text-center tabular-nums text-slate-900">
                {cartQty}
              </span>
              <button
                onClick={() => onUpdateCart(product.id, cartQty + 1)}
                className="w-8 h-8 rounded-lg bg-[#0F284E] text-white flex items-center justify-center hover:bg-[#1a3866] cursor-pointer"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Direct WhatsApp Order */}
            <button
              onClick={handleDirectWhatsAppOrder}
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow cursor-pointer transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order this on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
