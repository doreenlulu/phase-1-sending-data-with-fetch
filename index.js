// Add your code here
function submitData(name, email) {
	let users = {
		name: name,
		email: email,
	};
	return fetch("http://localhost:3000/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(users),
	})
        // Response and fetching

		.then((response) => response.json())
		.then((fetchedobject) => {
			document.body.innerHTML = fetchedobject["id"];
		})

        // Error
		.catch((error) => {
			document.body.innerHTML = error.message;
		});
}