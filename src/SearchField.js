import React from 'react';

export default function SearchField(props) {
	
  const handleChange = (event) => {
    props.handleSearch(event.target.value);
  }
	
  return (
	<div className="search ui small icon input ">
		<input type="text" placeholder="Search Game" onChange={handleChange}/>
		<i className="search icon"></i>
	</div>
  )
}