import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';

const placeholders = [
  "Search alice.qf",
  "Search 15893042", 
  "Search 0x7a2b...9f1e"
];

export function SearchBar({ className = '' }: { className?: string }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const placeholderText = useTypewriter(placeholders);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Check if it's a .qf name
    if (query.endsWith('.qf')) {
      navigate(`/explorer/${query}`);
    } 
    // Check if it looks like an address (starts with 5 and is reasonably long)
    else if (query.startsWith('5') && query.length > 10) {
      navigate(`/explorer/${query}`);
    }
    // Check if it's a block number
    else if (/^\d+$/.test(query)) {
      // For now, navigate to explorer with block search
      navigate(`/explorer?block=${query}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="relative bg-[#111111] border border-white/10 rounded-xl h-14 focus-within:border-white/20 transition-colors duration-200">
        {/* Magnifying glass on the left */}
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="w-5 h-5 text-white/30">
            <path
              d="M7.333 12.667A5.333 5.333 0 107.333 2a5.333 5.333 0 000 10.667zM14 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.33"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder=""
          className="w-full h-full bg-transparent text-white placeholder:text-transparent font-body focus:outline-none pl-12 pr-16"
        />

        {/* Typewriter placeholder overlay */}
        {!query && (
          <div className="absolute inset-y-0 left-12 right-16 flex items-center pointer-events-none overflow-hidden">
            <span className="font-body text-white/30 whitespace-nowrap">
              {placeholderText}
              <span className="animate-pulse border-r-2 border-white/30 ml-[1px] h-4 inline-block align-middle" />
            </span>
          </div>
        )}

        {/* ⌘K badge on the right */}
        <button
          type="button"
          onClick={() => document.dispatchEvent(new CustomEvent('open-spotlight'))}
          className="absolute inset-y-0 right-0 pr-5 flex items-center"
        >
          <div className="text-[10px] font-mono text-white/30 border border-white/10 rounded px-1.5 py-0.5 hover:text-white/50 hover:border-white/20 transition-colors">⌘K</div>
        </button>
      </div>
    </form>
  );
}
