import React from 'react';

interface Props {
  onClick: () => void;
  isLoading: boolean;
}

const LoadMoreButton: React.FC<Props> = ({ onClick, isLoading }) => {
    return (
        <div className="flex justify-center mt-8">
          <button
            onClick={onClick}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Cargando...' : 'Ver más'}
          </button>
        </div>
      );
    };

export default LoadMoreButton;
