import { FormEvent, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";

export function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    navigate(`/search?q=${query}&page=1`);
  };

  return (
    <div className="search">
      <form
        onSubmit={handleSearch}
        style={{ alignItems: "center", display: "flex" }}
      >
        <input
          type="text"
          style={{ width: "560px" }}
          placeholder="O que você procura?"
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </form>
    </div>
  );
}
