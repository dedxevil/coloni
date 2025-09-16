import React from 'react';
import Button from './Button';

interface ConfirmCreditSpendModalProps {
  isOpen: boolean;
  cost: number;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmCreditSpendModal: React.FC<ConfirmCreditSpendModalProps> = ({ isOpen, cost, onClose, onConfirm }) => {
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
        <h2 className="text-3xl mb-4">Confirm Generation</h2>
        <p className="text-gray-400 mb-8">
          This will use <span className="text-white">{cost} credits</span> to generate this theme pack. Are you sure you want to continue?
        </p>
        
        <div className='space-y-4'>
            <Button onClick={onConfirm} className="w-full">
                Yes, spend {cost} credits
            </Button>
            <Button onClick={onClose} variant="secondary" className="w-full">
                Cancel
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCreditSpendModal;