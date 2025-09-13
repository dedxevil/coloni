
import React from 'react';
import Button from './Button';

interface BuyCreditsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchase: () => void;
}

const BuyCreditsModal: React.FC<BuyCreditsModalProps> = ({ isOpen, onClose, onPurchase }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-sm w-full text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold mb-4">Out of Credits?</h2>
        <p className="text-gray-400 mb-8">
          You need more credits to generate this theme pack. Purchase a credit pack to continue creating!
        </p>
        <div className='space-y-4'>
            <Button onClick={onPurchase} className="w-full">
                Purchase 100 Credits
            </Button>
            <Button onClick={onClose} variant="secondary" className="w-full">
                Maybe Later
            </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyCreditsModal;
