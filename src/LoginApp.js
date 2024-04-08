import React, { useState } from 'react';

export default function LoginApp(props) {
  const [formData, setFormData] = useState ({
	username: "",
	password: ""
  })
  
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  
  const handleClick = () => {
	  setShowError(false);
  };
  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
	fetch('http://localhost:3001/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
		.then((response) => {
		  if (response.status !== 200) {
			throw new Error(response.statusText);
		  }
		  return response.json();
		})
		.then((e) => {
			props.onLogIn(formData.username)
			props.sendUser(e.player)
		})
		.catch((err) => {
		  setErrorMessage("Wrong username or password")
		  setShowError(true)
		});

    event.preventDefault();
  }
	
  return (
    <div className="ui grid centered">
		<form onSubmit={handleSubmit}>
			<div className="ui input errormessage" style={{ display: showError ? "" : "none" }} onClick={handleClick}>
				<div>{errorMessage}</div>
			</div>
			<div className="fields">
				<div className="required field">
					<div className="ui icon input">
						<input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange}/>
						<i className="user icon"></i>
					</div>
				</div>
				<div className="required field">
					<div className="ui icon input">
						<input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
						<i className="lock icon"></i>
					</div>
				</div>
				<div className="field">
					<div className="ui icon input">
						<input type="submit" value="Login"/>
						<i className="right chevron icon"></i>
					</div>
				</div>
			</div>
		</form>
	</div>
  )
}
