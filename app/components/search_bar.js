import React, { Component } from 'react';

const SearchBar = (props) => {

		return (
			<div className="search-bar">
				<input
					value={props.term}
					onChange={props.onSearchInputChange} />
			</div>
		);
}

export default SearchBar;
