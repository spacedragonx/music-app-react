import React from "react";

import { Link } from "react-router-dom";

const Navbar = ({ keyword, handleKeyPress, setKeyword, fetchMusicData }) => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/v-music">
          <i className="bi bi-music-note-list mx-3"></i> Beat-Blend
        </a>
        <div className="dropdown">
          <button
            className="btn btn-sm btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Liked Music
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item text-secondary" href="/">
                All Playlist
              </a>
            </li>
            <li>
              <Link className=" likeplay dropdown-item" to="/likedMusic">
                Liked Music
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="btn text-secondary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Create new
              </button>
            </li>
          </ul>
        </div>

        <div
          className=" srchbar collapse navbar-collapse d-flex justify-content-center"
          id="navbarSupportedContent"
        >
          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onKeyDown={handleKeyPress}
            className="form-control me-3 w-50"
            type="search"
            placeholder="Search for Music"
            aria-label="Search"
          />
          <button onClick={fetchMusicData} className="btn btn-outline-success ">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
