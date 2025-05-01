import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className="container py-5">
			<div className="row shadow rounded-4 overflow-hidden">
				<div className="col-md-6 bg-dark text-white d-flex flex-column justify-content-center align-items-center p-5">
					<form onSubmit={handleSubmit} className="w-75">
						<h2 className="mb-4 text-center">Login to Your Account</h2>

						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="form-control mb-3"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="form-control mb-3"
						/>

						{error && (
							<div className="alert alert-danger py-2 text-center">{error}</div>
						)}

						<button type="submit" className="btn btn-dark w-100 mt-3">
							Sign In
						</button>
					</form>
				</div>
				<div className="col-md-6 bg-light d-flex flex-column justify-content-center align-items-center p-5">
					<h2 className="mb-4">New Here?</h2>
					<Link to="/signup">
						<button type="button" className="btn btn-outline-dark px-4">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
