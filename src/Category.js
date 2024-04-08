import React from 'react';

export default function Category(props) {
	
  function handleOnClick() {
	  props.handleCategoryChange(props.id)
  }
	
  return (
	<div className="category item" onClick={handleOnClick}>
		<div className="content">
			<div className="header">{props.name}</div>
		</div>
	</div>
  )
}