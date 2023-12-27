import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    widthClass?: string;
    heightClass?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, widthClass = '', heightClass = '' }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center
         overflow-x-hidden overflow-y-auto outline-none focus:outline-none max-h-[600px] top-[10%]">
            <div className={`modal-overlay fixed inset-0 bg-black opacity-50 transition-opacity ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}></div>
            <div className={`modal-container ${widthClass} ${heightClass}`}>
                <div className="modal relative w-full max-w-lg mx-auto my-6">
                    <div className="modal-content bg-white shadow-md rounded-md p-6">
                        <button className="modal-close absolute top-2 right-2 text-gray-500
                         px-3 py-1 border border-gray-400 rounded-full hover:text-gray-700" onClick={onClose}>
                            X
                        </button>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;