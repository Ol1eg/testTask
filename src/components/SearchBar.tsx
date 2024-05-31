import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { Post } from '../utils/posts';
import SuggestionCard from '../Cards/SuggestionCard';

interface SearchBarProps {
  onSearch: (query: string) => void;
  posts: Post[];
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, posts }) => {
  const [input, setInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Post[]>([]);

  useEffect(() => {
    if (input) {
      const matchSuggestion = posts.filter((post) => post.title.includes(input))
      setSuggestions(matchSuggestion)
    } else{
      setSuggestions([])
    }
  }, [input])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSuggestionClick = (suggestion: Post) => {
    setInput(suggestion.title);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(input);
    setInput('');
    setSuggestions([]);
  };

  return (
    <div className='my-[30px]'>
      <form onSubmit={handleSubmit}>
        <input
          className='w-[400px] h-[30px] border border-slate-400 px-[10px] py-[20px]'
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Search ..."
        />
        <button className='mx-[20px] px-[20px] py-[10px] bg-blue-500' type="submit">Submit</button>
      </form>
      {suggestions.length > 0 ? (
          <div >
            <p className='flex justify-center my-[15px]'>Suggestions</p>
            {suggestions.map(suggestion => (
              <SuggestionCard postTitle={suggestion.title} key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}/>
          ))}
          </div>
      ) : null}
    </div>
  );
};

export default SearchBar;