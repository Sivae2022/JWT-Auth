import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className="min-vh-100 bg-dark text-white">
			<nav className="navbar navbar-expand-lg navbar-dark bg-black shadow-sm">
				<div className="container">
					<a className="navbar-brand text-white fw-bold fs-3" href="#">
						Fakebook
					</a>
					<button className="btn btn-outline-light" onClick={handleLogout}>
						Logout
					</button>
				</div>
			</nav>

			<div className="container mt-5">
				<div className="row justify-content-center">
					<div className="col-md-8 text-center">
						<div className="card shadow-lg p-5 bg-gradient text-white">
							<h2 className="fw-bold display-4">Welcome to Fakebook</h2>
							<p className="lead my-4">
								Experience a new social network in style. Connect, share, and engage with your community.
							</p>
							<button className="btn btn-light px-4 py-2 fs-5 fw-semibold">
								Start Exploring
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
