import React from 'react';
import { CreditCard, Wallet, Check, AlertCircle, ArrowRight, ShieldCheck, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Course } from '../types';
import { formatPrice, cn } from '../lib/utils';

interface CheckoutProps {
  course: Course;
  onSuccess: () => void;
  onCancel: () => void;
}

type PaymentMethod = 'stripe' | 'orange' | 'mtn' | 'wave';

export const Checkout: React.FC<CheckoutProps> = ({ course, onSuccess, onCancel }) => {
  const [method, setMethod] = React.useState<PaymentMethod>('stripe');
  const [step, setStep] = React.useState<'select' | 'processing' | 'done'>('select');

  const methods = [
    { id: 'stripe', name: 'International Cards', icon: CreditCard, subtitle: 'Visa, Mastercard, Amex', category: 'International' },
    { id: 'wave', name: 'Wave', icon: Wallet, subtitle: 'Mali, Senegal, Ivory Coast', category: 'Mobile Money' },
    { id: 'orange', name: 'Orange Money', icon: Wallet, subtitle: 'Instant Activation', category: 'Mobile Money' },
    { id: 'mtn', name: 'MTN MoMo', icon: Wallet, subtitle: 'West & Central Africa', category: 'Mobile Money' },
  ];

  const handlePayment = () => {
    setStep('processing');
    setTimeout(() => {
      setStep('done');
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white w-full max-w-4xl rounded-[40px] overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2"
      >
        {/* Left: Summary */}
        <div className="bg-gray-50/80 p-12 border-right border-gray-100">
          <button 
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 mb-12 flex items-center gap-2 font-bold text-sm"
          >
            Cancel Order
          </button>
          
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
              <img 
                src={course.thumbnail} 
                className="w-full aspect-video object-cover rounded-3xl shadow-lg relative"
                alt="Course Thumbnail"
              />
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">Selected Academy Course</span>
              <h2 className="text-3xl font-black text-gray-900 leading-tight">{course.title}</h2>
              <p className="text-sm text-gray-500 font-medium">Instructor: {course.instructor}</p>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-500 font-bold">Registration Fee</span>
                <span className="text-2xl font-black text-gray-900">{formatPrice(course.price, course.currency)}</span>
              </div>
              <div className="flex items-center gap-2 mt-4 text-green-600 bg-green-50 px-4 py-2 rounded-xl text-xs font-bold w-fit">
                <ShieldCheck className="w-4 h-4" />
                Lifetime Access Included
              </div>
            </div>
          </div>
        </div>

        {/* Right: Payment */}
        <div className="p-12 bg-white flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 'select' && (
              <motion.div 
                key="select"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Secure Checkout</h3>
                  <p className="text-sm text-gray-500 font-medium">Choose your preferred payment method.</p>
                </div>

                <div className="space-y-3">
                  {methods.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setMethod(m.id as PaymentMethod)}
                      className={cn(
                        "w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 group",
                        method === m.id 
                          ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600/10" 
                          : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                          method === m.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"
                        )}>
                          <m.icon className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-gray-900 leading-none mb-1">{m.name}</p>
                          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{m.subtitle}</p>
                        </div>
                      </div>
                      <div className={cn(
                        "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                        method === m.id ? "border-blue-600 bg-blue-600" : "border-gray-200"
                      )}>
                        {method === m.id && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </button>
                  ))}
                </div>

                <button 
                  onClick={handlePayment}
                  className="w-full bg-gray-900 text-white h-16 rounded-2xl font-black text-lg hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 flex items-center justify-center gap-3 active:scale-95"
                >
                  Pay Now
                  <ArrowRight className="w-6 h-6" />
                </button>

                <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Encrypted SSL Secure Payment
                </p>
              </motion.div>
            )}

            {step === 'processing' && (
              <motion.div 
                key="processing"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-20"
              >
                <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-8"></div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Syncing Transaction</h3>
                <p className="text-sm text-gray-500 font-medium text-center max-w-[240px]">
                  Please confirm the payment on your mobile device.
                </p>
              </motion.div>
            )}

            {step === 'done' && (
              <motion.div 
                key="done"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-20 text-center"
              >
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-green-100">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-2">Welcome to the Academy</h3>
                <p className="text-sm text-gray-500 font-medium">Payment confirmed. Redirecting to your classroom...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
