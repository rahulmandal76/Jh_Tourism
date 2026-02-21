import { useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export default function SearchBar({ 
  placeholder = "Search destinations, events, experiences...", 
  onSearch,
  className = ""
}: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Use useCallback to prevent unnecessary re-renders
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    onSearch?.(searchQuery);
    console.log('Search triggered:', searchQuery);
  }, [searchQuery, onSearch]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }, [handleSearch]);

  return (
    <div className={`flex max-w-md mx-auto ${className}`}>
      <Input
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className="rounded-r-none bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70"
        data-testid="input-search"
      />
      <Button 
        onClick={handleSearch}
        className="rounded-l-none bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700"
        data-testid="button-search"
      >
        <Search className="w-4 h-4" />
      </Button>
    </div>
  );
}