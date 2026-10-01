import React, { useState, useEffect } from 'react';
import { Bell, BellRing, Sparkles, Check, X, Shield, Clock, Tag } from 'lucide-react';

export interface PushDealNotification {
  id: string;
  title: string;
  hindiTitle: string;
  body: string;
  hindiBody: string;
  time: string;
  discount: string;
  category: string;
  read: boolean;
}

const DEFAULT_NOTIFICATIONS: PushDealNotification[] = [
  {
    id: 'n1',
    title: 'Today’s Morning Bachat Deal: Sharbati Atta 10kg at ₹435!',
    hindiTitle: 'आज का सुबह का बचत ऑफर: शरबती आटा 10kg मात्र ₹435!',
    body: 'Fresh stone-ground wheat flour stock arrived. Save ₹55 today only at Ajay Vijay Mart Agar Malwa.',
    hindiBody: 'ताज़ा पिसा हुआ शरबती गेहूं आटा। केवल आज ही आगर मालवा स्टोर में ₹55 की विशेष बचत।',
    time: '2 hours ago',
    discount: '11% OFF',
    category: 'Staples',
    read: false
  },
  {
    id: 'n2',
    title: 'Flash Offer: Pure Cow Ghee Extra 10% Off with code FESTIVEAGAR',
    hindiTitle: 'फ्लैश ऑफर: शुद्ध गाय का घी अतिरिक्त 10% छूट कूपन FESTIVEAGAR के साथ',
    body: 'Danedar golden bilona cow ghee in 1L tins. WhatsApp order delivery available in Agar town.',
    hindiBody: 'दानेदार देशी गाय का घी। आगर मालवा शहर में 2 घंटे में होम डिलीवरी उपलब्ध।',
    time: 'Yesterday',
    discount: 'EXTRA 10%',
    category: 'Ghee & Dairy',
    read: false
  },
  {
    id: 'n3',
    title: 'Weekend Personal Care Bonanza: Buy 2 Get 1 Free',
    hindiTitle: 'वीकेंड पर्सनल केयर बोनान्ज़ा: 2 खरीदें 1 मुफ़्त पाएं',
    body: 'Available on all Ayurvedic soaps, shampoos, and facial care on 1st Floor Ajay Vijay Mart.',
    hindiBody: 'फर्स्ट फ्लोर पर्सनल केयर सेक्शन में सभी हर्बल प्रोडक्ट्स पर लागू।',
    time: '3 days ago',
    discount: 'BUY 2 GET 1',
    category: 'Cosmetics',
    read: true
  }
];

interface PushNotificationManagerProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'hi';
  onNotificationCountChange?: (count: number) => void;
}

export const PushNotificationManager: React.FC<PushNotificationManagerProps> = ({
  isOpen,
  onClose,
  language,
  onNotificationCountChange
}) => {
  const [notifications, setNotifications] = useState<PushDealNotification[]>(DEFAULT_NOTIFICATIONS);
  const [permissionState, setPermissionState] = useState<NotificationPermission>('default');
  const [testNotificationSent, setTestNotificationSent] = useState(false);
  const [dailyMorningEnabled, setDailyMorningEnabled] = useState(true);
  const [weekendFlashEnabled, setWeekendFlashEnabled] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setPermissionState(Notification.permission);
    }
  }, []);

  useEffect(() => {
    const unread = notifications.filter((n) => !n.read).length;
    if (onNotificationCountChange) {
      onNotificationCountChange(unread);
    }
  }, [notifications, onNotificationCountChange]);

  const requestBrowserPermission = async () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      try {
        const perm = await Notification.requestPermission();
        setPermissionState(perm);
        if (perm === 'granted') {
          triggerBrowserPush('Daily Discount Updates Activated!', 'You will now receive Agar Malwa daily morning supermarket deals and festive flash discounts.');
        }
      } catch (err) {
        console.error('Error requesting notification permission:', err);
      }
    }
  };

  const triggerBrowserPush = (title: string, body: string) => {
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      try {
        new Notification(title, {
          body,
          icon: '/logo.svg',
          badge: '/logo.svg',
          tag: 'ajay-vijay-deals'
        });
      } catch (e) {
        console.log('Browser notification fallback:', e);
      }
    }
  };

  const handleSimulateDailyPush = () => {
    const newDeal: PushDealNotification = {
      id: `deal-${Date.now()}`,
      title: '🚨 Just In: Ratlam Sev & Hing Mix Fresh Batch at ₹130!',
      hindiTitle: '🚨 ताज़ा अपडेट: रतलामी सेव व हींग मिक्स का नया बैच मात्र ₹130!',
      body: 'Hot, crunchy festive namkeen just stocked at Ajay Vijay Mart. Grab yours or order on WhatsApp.',
      hindiBody: 'ताज़ा रतलामी नमकीन आगर मालवा स्टोर में उपलब्ध। अभी व्हाट्सएप पर आर्डर करें।',
      time: 'Just now',
      discount: '19% OFF',
      category: 'Snacks & Sev',
      read: false
    };

    setNotifications((prev) => [newDeal, ...prev]);
    setTestNotificationSent(true);

    // If permission is granted, fire the real native OS/browser push!
    if (permissionState === 'granted') {
      triggerBrowserPush(
        language === 'hi' ? newDeal.hindiTitle : newDeal.title,
        language === 'hi' ? newDeal.hindiBody : newDeal.body
      );
    }

    setTimeout(() => setTestNotificationSent(false), 3000);
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const clearNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-slate-200 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-[#0F284E] text-white p-4 flex items-center justify-between border-b border-[#E5A93C]/30">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#E5A93C] text-[#0F284E] flex items-center justify-center font-bold">
              <BellRing className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold">
                {language === 'hi' ? 'दैनिक बचत व डिस्काउंट अलर्ट' : 'Daily Discount Push Alerts'}
              </h3>
              <p className="text-[10px] text-amber-200">
                {language === 'hi' ? 'आगर मालवा के ताज़ा किराना ऑफर्स' : 'Instant store notifications for Agar Malwa'}
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

        {/* Browser Permission Banner */}
        <div className="p-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs">
              <Shield className="w-4 h-4 text-[#0F284E]" />
              <span className="font-semibold text-slate-800">
                {permissionState === 'granted'
                  ? (language === 'hi' ? 'ब्राउज़र पुश नोटिफिकेशन सक्रिय है' : 'Web Push: Active & Enabled')
                  : (language === 'hi' ? 'दैनिक छूट पाने हेतु नोटिफिकेशन ऑन करें' : 'Enable Web Push for Daily Discounts')}
              </span>
            </div>

            {permissionState !== 'granted' && (
              <button
                onClick={requestBrowserPermission}
                className="px-3 py-1.5 rounded-lg bg-[#0F284E] hover:bg-[#1a3866] text-white text-xs font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap"
              >
                {language === 'hi' ? 'नोटिफिकेशन ऑन करें' : 'Enable Push'}
              </button>
            )}
          </div>
        </div>

        {/* Preferences Toggle */}
        <div className="p-4 bg-amber-50/50 border-b border-amber-200/60 grid grid-cols-2 gap-3 text-xs">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={dailyMorningEnabled}
              onChange={(e) => setDailyMorningEnabled(e.target.checked)}
              className="accent-[#0F284E] rounded"
            />
            <span className="text-slate-700 font-medium">
              {language === 'hi' ? 'सुबह 8:00 AM बचत अलर्ट' : 'Daily Morning Bachat'}
            </span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={weekendFlashEnabled}
              onChange={(e) => setWeekendFlashEnabled(e.target.checked)}
              className="accent-[#0F284E] rounded"
            />
            <span className="text-slate-700 font-medium">
              {language === 'hi' ? 'वीकेंड व त्योहार महा-छूट' : 'Weekend Flash Deals'}
            </span>
          </label>
        </div>

        {/* Notification Feed List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <div className="flex items-center justify-between text-xs pb-1">
            <span className="font-bold text-slate-700">
              {language === 'hi' ? 'हालिया डिस्काउंट सूचनाएं' : 'Recent Discount Broadcasts'}
            </span>
            <button
              onClick={markAllAsRead}
              className="text-[#0F284E] hover:underline font-semibold text-[11px] cursor-pointer"
            >
              {language === 'hi' ? 'सभी पढ़ा हुआ चिन्हित करें' : 'Mark all read'}
            </button>
          </div>

          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-3 rounded-xl border transition-all relative ${
                n.read ? 'bg-slate-50 border-slate-200' : 'bg-amber-50/70 border-amber-300 shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black bg-[#0F284E] text-[#E5A93C] px-1.5 py-0.5 rounded">
                    {n.discount}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500">
                    {n.category}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-slate-400">{n.time}</span>
                  <button
                    onClick={() => clearNotification(n.id)}
                    className="text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <h4 className="text-xs font-bold text-slate-900 mt-1.5">
                {language === 'hi' ? n.hindiTitle : n.title}
              </h4>
              <p className="text-[11px] text-slate-600 mt-0.5">
                {language === 'hi' ? n.hindiBody : n.body}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Actions: Test Push Simulator */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
          <button
            onClick={handleSimulateDailyPush}
            className="flex-1 py-2 px-3 rounded-xl bg-[#E5A93C] hover:bg-[#d6982f] text-[#0F284E] font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#0F284E]" />
            <span>
              {testNotificationSent
                ? (language === 'hi' ? 'नया ऑफर भेजा गया!' : 'Alert Triggered!')
                : (language === 'hi' ? 'दैनिक बचत अलर्ट टेस्ट करें' : 'Simulate Daily Push Alert')}
            </span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs rounded-xl cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
