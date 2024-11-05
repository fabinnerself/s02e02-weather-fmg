import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './buscador.css'

function BuscadorClima({formValue , handleKeyDown , handleSearch,  handleChange}) {
  

  return (
     
      <div className="input-wrapper">
      <Search 
            className="search-icon" 
            size={25} 
            onClick={handleSearch}
          />
        <input
          type="search"
          value={formValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown} // Trigger search on Enter key
          placeholder="Enter a city and a Country..."
          className="input"
        />        
      </div>
    
  );
}

export default BuscadorClima;


 