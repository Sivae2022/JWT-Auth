import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
				<div className="col-md-6 bg-dark text-white d-flex flex-column justify-content-center align-items-center p-4">
					<h1 className="mb-4">Welcome Back</h1>
					<Link to="/login">
						<button type="button" className="btn btn-outline-light px-4">
							Sign In
						</button>
					</Link>
				</div>
				<div className="col-md-6 bg-white p-5">
					<form onSubmit={handleSubmit}>
						<h2 className="mb-4 text-center text-dark">Create Account</h2>

						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className="form-control mb-3"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className="form-control mb-3"
						/>
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
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
