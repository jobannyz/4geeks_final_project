const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			services: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction

			signup_user: (email, username, password, address) => {
				fetch("https://3001-amethyst-crawdad-ou8lzqtn.ws-us03.gitpod.io/api/signup", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						email: `${email}`,
						username: `${username}`,
						password: `${password}`,
						address: `${address}`
					})
				})
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},

			login_user: (username, password) => {
				fetch("https://3001-amethyst-crawdad-ou8lzqtn.ws-us03.gitpod.io/api/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: `${username}`,
						password: `${password}`
					})
				})
					.then(response => response.json())
					.then(result => {
						//setStore({ favlist: result.favorites });
						setStore({ token: result.token });
					})
					.catch(error => console.log("error", error));
			},

			get_services: async () => {
				let result = await fetch("https://3001-amethyst-crawdad-ou8lzqtn.ws-us03.gitpod.io/api")
					.then(res => res.json())
					.then(data => {
						setStore({ services: data });
						console.log(data);
					})
					.catch(error => console.log(error));
			},
			addFavorite: (event, name, precio, id) => {
				fetch("https://3001-amethyst-crawdad-ou8lzqtn.ws-us03.gitpod.io/api/shopCart", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${getStore().token}`
					},
					body: JSON.stringify({
						service_id: `${id}`,
						precio: `${precio}`,
						cantidad: 1
					})
				})
					.then(response => response.json())
					.then(result => console.log(getStore().favorites, { id }))
					.catch(error => console.log("error", error));
				setStore({ ...getStore(), favorites: [...getStore().favorites, { name }] });
			}
			// getMessage: () => {
			// 	// fetching data from the backend
			// 	fetch(process.env.BACKEND_URL + "/api/hello")
			// 		.then(resp => resp.json())
			// 		.then(data => setStore({ message: data.message }))
			// 		.catch(error => console.log("Error loading message from backend", error));
			// },
		}
	};
};

export default getState;
