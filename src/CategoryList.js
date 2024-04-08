import React, {useEffect, useState} from 'react';
import Category from './Category';


 function InitCategoryList(props) {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetch(props.url, { method: 'get' })
	  .then((response) => {
		  if (response.status !== 200) {
			throw new Error(response.statusText);
		  }
		  return response.json();
		}).then(data => setCategories(data));
  },[props.url]);
  
  return (
    <>
	{categories.map((item) => (
		<Category
			key={item.id}
			id={item.id}
			name={item.name}
			handleCategoryChange={props.handleCategoryChange}
		/>
      ))}
    </>
  )
	 
 }

export default function CategoryList(props) {
	
  return (
	<>
		<InitCategoryList url="http://localhost:3001/categories" handleCategoryChange={props.handleCategoryChange}/>
    </>
  )
}