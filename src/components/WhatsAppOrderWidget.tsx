import React, { useState } from 'react';
import { MessageSquare, ShoppingBag, Trash2, Send, Plus, Minus, X, Check, MapPin, Truck, Store } from 'lucide-react';
import { PRODUCTS, STORE_INFO, Product } from '../data/martData';

interface WhatsAppOrderWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { [productId: string]: number };
  onUpdateCart: (productId: string, quantity: number) => void;
  onClearCart: () => void;
  appliedPromo?: string;
  language: 'en' | 'hi';
}

export const WhatsAppOrderWidget: React.FC<WhatsAppOrderWidgetProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateCart,
  onClearCart,
  appliedPromo,
  language
}) => {
  const [customerName, setCustomerName] = useState('');
  const [locality, setLocality] = useState('');
  const [customNotes, setCustomNotes] = useState('');
  const [deliveryType, setDeliveryType] = useState<'delivery' | 'pickup'>('delivery');

  // Compute cart items
  const cartEntries = Object.entries(cart).filter(([_, qty]) => qty > 0);
  const cartProducts = cartEntries.map(([id, qty]) => {
    const prod = PRODUCTS.find((p) => p.id === id);
    return { product: prod, qty };
  }).filter((item): item is { product: Product; qty: number } => item.product !== undefined);

  const subtotal = cartProducts.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const savings = cartProducts.reduce((sum, item) => sum + (item.product.mrp - item.product.price) * item.qty, 0);

  const handleSendToWhatsApp = () => {
    let message = `🛒 *New Order for Ajay Vijay Mart (Agar Malwa)*\n`;
    message += `--------------------------------------\n`;
    if (customerName) message += `👤 *Customer Name:* ${customerName}\n`;
    if (locality) message += `📍 *Agar Locality:* ${locality}\n`;
    message += `🚚 *Order Type:* ${deliveryType === 'delivery' ? 'Home Delivery in Agar Malwa' : 'In-Store Express Pickup'}\n`;
    if (appliedPromo) message += `🏷️ *Applied Promo Code:* ${appliedPromo}\n`;
    message += `--------------------------------------\n`;

    if (cartProducts.length > 0) {
      message += `*Ordered Items:*\n`;
      cartProducts.forEach((item, index) => {
        message += `${index + 1}. ${item.product.name} (${item.product.weight}) - Qty: ${item.qty} = ₹${item.product.price * item.qty}\n`;
      });
      message += `--------------------------------------\n`;
      message += `💰 *Estimated Total:* ₹${subtotal}\n`;
      message += `🎉 *Total Saved:* ₹${savings}\n`;
    }

    if (customNotes.trim()) {
      message += `\n📝 *Additional Custom Items / Notes:*\n${customNotes.trim()}\n`;
    }

    message += `\n_Sent via Ajay Vijay Mart Website_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Quick Action Button on bottom-right (Mobile and Desktop) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          onClick={onClose ? () => onClose() : undefined}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs md:text-sm shadow-2xl hover:shadow-emerald-600/40 transition-all active:scale-95 cursor-pointer border-2 border-white/40"
          aria-label="Order on WhatsApp"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-white" />
            {cartEntries.length > 0 && (
              <span className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 text-[#0F284E] text-[10px] font-black rounded-full flex items-center justify-center">
                {cartEntries.length}
              </span>
            )}
          </div>
          <span className="hidden sm:inline">
            {language === 'hi' ? 'व्हाट्सएप आर्डर' : 'WhatsApp Order'}
          </span>
        </button>
      </div>

      {/* Slide-over Drawer / Modal for WhatsApp Cart */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end animate-fade-in">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-slide-left border-l border-slate-200">
            {/* Drawer Header */}
            <div className="p-4 bg-[#0F284E] text-white flex items-center justify-between border-b border-[#E5A93C]/30">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">
                    {language === 'hi' ? 'व्हाट्सएप किराना आर्डर' : 'WhatsApp Grocery Order'}
                  </h3>
                  <p className="text-[10px] text-amber-200">
                    {language === 'hi' ? 'आगर मालवा में सबसे तेज़ डिलीवरी' : 'Direct to store counter: +91 98260 54321'}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto p-4 space-y-5">
              {/* Order Mode Switcher */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  className={`flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    deliveryType === 'delivery'
                      ? 'bg-white text-[#0F284E] shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'होम डिलीवरी (आगर)' : 'Home Delivery'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setDeliveryType('pickup')}
                  className={`flex items-center justify-center gap-1.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    deliveryType === 'pickup'
                      ? 'bg-white text-[#0F284E] shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'स्टोर से पिकअप' : 'Express Pickup'}</span>
                </button>
              </div>

              {/* Items from Catalog */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>
                    {language === 'hi' ? 'चुने गए सामान' : 'Selected Aisles Items'} ({cartProducts.length})
                  </span>
                  {cartProducts.length > 0 && (
                    <button
                      onClick={onClearCart}
                      className="text-rose-600 hover:text-rose-700 text-[11px] font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear</span>
                    </button>
                  )}
                </div>

                {cartProducts.length === 0 ? (
                  <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl p-4 text-center text-xs text-slate-500">
                    <p>{language === 'hi' ? 'कैटलॉग से कोई सामान नहीं चुना गया।' : 'No catalog items added yet.'}</p>
                    <p className="text-[11px] text-slate-400 mt-1">
                      {language === 'hi' ? 'आप नीचे सीधे अपनी किराना लिस्ट लिख या पेस्ट भी कर सकते हैं!' : 'You can also simply type or paste your grocery list below!'}
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-slate-100 max-h-48 overflow-y-auto pr-1">
                    {cartProducts.map(({ product, qty }) => (
                      <div key={product.id} className="py-2.5 flex items-center justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-slate-800 truncate">
                            {language === 'hi' ? product.hindiName : product.name}
                          </h4>
                          <div className="text-[10px] text-slate-500">
                            ₹{product.price} × {qty} = <span className="font-semibold text-slate-900">₹{product.price * qty}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-0.5">
                          <button
                            onClick={() => onUpdateCart(product.id, qty - 1)}
                            className="w-5 h-5 flex items-center justify-center hover:bg-slate-200 rounded cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold px-1 tabular-nums">{qty}</span>
                          <button
                            onClick={() => onUpdateCart(product.id, qty + 1)}
                            className="w-5 h-5 flex items-center justify-center hover:bg-slate-200 rounded cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Free-text Quick Paste Grocery List */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>{language === 'hi' ? 'अन्य सामान या खुली लिस्ट (वैकल्पिक)' : 'Type / Paste Custom Grocery List'}</span>
                  <span className="text-[10px] font-normal text-slate-400">Handwritten chits welcome</span>
                </label>
                <textarea
                  rows={3}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder={
                    language === 'hi'
                      ? 'उदा. 2 किलो शक्कर, 1 पैकेट चाय पत्ती, 500g पोहा, आशीर्वाद आटा...'
                      : 'e.g., 2kg sugar, 1 pack poha, Dettol handwash, Everest sabji masala...'
                  }
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:ring-2 focus:ring-[#0F284E] focus:outline-none"
                />
              </div>

              {/* Customer Details Form */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      {language === 'hi' ? 'आपका नाम' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Ramesh Patidar"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-1 focus:ring-[#0F284E] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      {language === 'hi' ? 'आगर में मोहल्ला / कॉलोनी' : 'Locality in Agar'}
                    </label>
                    <input
                      type="text"
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      placeholder="e.g. Old Bus Stand / VIP"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs text-slate-800 focus:ring-1 focus:ring-[#0F284E] focus:outline-none"
                    />
                  </div>
                </div>

                {appliedPromo && (
                  <div className="p-2 bg-amber-50 border border-[#E5A93C] rounded-lg text-[11px] text-amber-900 flex items-center justify-between">
                    <span>Applied Coupon: <strong className="font-mono">{appliedPromo}</strong></span>
                    <span className="text-emerald-700 font-bold">Offer Attached</span>
                  </div>
                )}
              </div>
            </div>

            {/* Drawer Footer with Final Total & Action */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
              {cartProducts.length > 0 && (
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-500">Cart Estimate:</span>
                    <span className="text-sm font-bold text-slate-900 ml-1.5 tabular-nums">₹{subtotal}</span>
                  </div>
                  {savings > 0 && (
                    <span className="text-[11px] text-emerald-700 font-bold">
                      You save ₹{savings}
                    </span>
                  )}
                </div>
              )}

              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs md:text-sm shadow-md hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>
                  {language === 'hi' ? 'व्हाट्सएप पर आर्डर भेजें (+91 98260 54321)' : 'Send Order to WhatsApp (+91 98260 54321)'}
                </span>
              </button>

              <div className="text-center text-[10px] text-slate-400">
                Payment on Delivery (Cash / UPI / QR) · Prompt dispatch from Agar Mart
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
