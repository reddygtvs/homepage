import React, { useState, useRef, useEffect } from "react";

interface AutocompleteProps {
  items: string[];
}

const Autocomplete: React.FC<AutocompleteProps> = ({ items }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  // Filter items based on input
  useEffect(() => {
    if (inputValue.trim() === "") {
      setFilteredItems([]);
      return;
    }

    const filtered = items.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase()),
    );
    setFilteredItems(filtered);
    setIsOpen(filtered.length > 0);
    setSelectedIndex(-1);
  }, [inputValue, items]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : prev,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
      case "Enter":
        e.preventDefault();
        if (selectedIndex >= 0) {
          setInputValue(filteredItems[selectedIndex]);
          setIsOpen(false);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && listboxRef.current) {
      const selectedElement = listboxRef.current.children[
        selectedIndex
      ] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  return (
    <div className="mx-auto w-full max-w-md rounded-lg bg-white p-4 shadow-md">
      <label
        htmlFor="autocomplete-input"
        className="mb-1 block text-sm font-medium text-gray-700"
      >
        Search Programming Languages:
      </label>
      <div className="relative">
        <input
          id="autocomplete-input"
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => inputValue.trim() !== "" && setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Type to search..."
          role="combobox"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-controls="autocomplete-listbox"
        />
        {isOpen && filteredItems.length > 0 && (
          <ul
            id="autocomplete-listbox"
            ref={listboxRef}
            role="listbox"
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white shadow-lg"
          >
            {filteredItems.map((item, index) => (
              <li
                key={item}
                role="option"
                aria-selected={index === selectedIndex}
                className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                  index === selectedIndex ? "bg-indigo-100" : ""
                }`}
                onClick={() => {
                  setInputValue(item);
                  setIsOpen(false);
                  inputRef.current?.focus();
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      {inputValue && (
        <div className="mt-4 rounded-md bg-gray-50 p-3">
          <p className="text-sm text-gray-700">
            You selected: <span className="font-medium">{inputValue}</span>
          </p>
        </div>
      )}
    </div>
  );
};

// Default props with programming languages
Autocomplete.defaultProps = {
  items: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "C#",
    "C++",
    "PHP",
    "Swift",
    "Kotlin",
    "Go",
    "Rust",
    "Ruby",
    "Scala",
    "Perl",
    "Haskell",
    "Clojure",
    "Elixir",
    "Dart",
    "F#",
    "COBOL",
    "Fortran",
    "Lisp",
    "Lua",
    "R",
    "Objective-C",
    "Assembly",
    "MATLAB",
    "Groovy",
    "Bash",
    "PowerShell",
  ],
};

export default Autocomplete;
