/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GoSearch } from "react-icons/go";
import clsx from "clsx";

import classes from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(classes["search-bar"], {
        [classes["search-bar-scrolled"]]: isScrolled,
      })}
    >
      <form onSubmit={handleSubmit}>
        <div className={classes["search-input-container"]}>
          <input
            type="text"
            name="search-query"
            value={query}
            onChange={handleInputChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={classes.input}
          />
          <button
            type="submit"
            className={classes.button}
            aria-label="Search images"
          >
            <GoSearch />
          </button>
        </div>
      </form>
      <Toaster position="top-center" containerStyle={{ top: 70 }} />
    </header>
  );
};

export default SearchBar;
