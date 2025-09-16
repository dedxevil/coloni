import React from 'react';
import Button from './Button';

interface BuyCreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchase: (credits: number) => void;
}

interface PlanProps {
    credits: number;
    price: number;
    name: string;
    description: string;
    isPopular?: boolean;
    onSelect: () => void;
}

const Plan: React.FC<PlanProps> = ({ credits, price, name, description, isPopular, onSelect }) => {
    return (
        <div className={`
            border-2 rounded-2xl p-6 text-center flex flex-col transition-all duration-300
            ${isPopular ? 'border-purple-500 bg-gray-800/50 transform md:scale-105 shadow-2xl shadow-purple-900/50' : 'border-gray-700 bg-gray-900 hover:scale-105'}
            relative
        `}>
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Popular
                </div>
            )}
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-gray-400 mt-2 h-10">{description}</p>
            <div className="my-8">
                <span className="text-5xl font-extrabold text-white">{credits}</span>
                <span className="text-xl text-gray-400"> credits</span>
            </div>
            <p className="text-2xl font-bold text-white mb-6">${price}</p>
            <div className="mt-auto">
                <Button onClick={onSelect} className={`w-full ${isPopular ? 'bg-purple-600 hover:bg-purple-700 text-white' : ''}`}>
                    Buy {name}
                </Button>
            </div>
        </div>
    );
};


const BuyCreditsModal: React.FC<BuyCreditsModalProps> = ({ isOpen, onClose, onPurchase }) => {
  if (!isOpen) {
    return null;
  }

  const plans = [
    { name: 'Starter', credits: 200, price: 5, description: 'Perfect for trying out a few themes.' },
    { name: 'Creator', credits: 1000, price: 20, description: 'Our most popular plan for creative minds.', isPopular: true },
    { name: 'Pro', credits: 3000, price: 50, description: 'The best value for power users.' },
  ];

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-4xl w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl sm:text-4xl mb-4">Top Up Your Credits</h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Choose a plan that's right for you. More credits mean more transformations!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center">
            {plans.map(plan => (
                 <Plan
                    key={plan.name}
                    name={plan.name}
                    credits={plan.credits}
                    price={plan.price}
                    description={plan.description}
                    isPopular={plan.isPopular}
                    onSelect={() => onPurchase(plan.credits)}
                 />
            ))}
        </div>
         <button onClick={onClose} className="mt-8 text-gray-400 hover:text-white transition-colors">
            Maybe Later
        </button>
      </div>
    </div>
  );
};

export default BuyCreditsModal;