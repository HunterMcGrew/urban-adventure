import React from "react";

const Job = () => {
	const styles = {
		feedContainer: {
			width: "90%",
		},
		primaryBtn: {
			width: 150,
		},
		favoriteBtn: {
			width: 150,
		},
	};

	return (
		<div
			style={styles.feedContainer}
			className="feedContainer container-fluid bg-grey mt-2 rounded-4 py-2 shadow mb-4"
		>
			<div className="feedTitleContainer">
				<p className="p-0 m-0 text-start fs-4 fw-bold">
					Tattoo Apprenticeship
				</p>
				<p className="p-0 m-0 text-start ">Chicago, IL</p>
				<p className="p-0 m-0 text-start">Part-Time/Full-Time</p>
			</div>

			<div className="feedInfo mt-2">
				<p className="p-0 m-0 text-start">
					Requirements: CPR Certification, Art Portfolio, a good
					attitude.
				</p>
			</div>

			{/* Need to make 2 buttons for hereeee */}
			<div className="buttonContainer mt-3 mb-2 d-flex justify-content-evenly">
				<div className="">
					<button
						type="button"
						class="btn btn-primary shadow-sm"
						style={styles.primaryBtn}
					>
						Apply
					</button>
				</div>
				<div className="">
					<button
						type="button"
						class="btn btn-primary shadow-sm"
						style={styles.favoriteBtn}
					>
						Favorite
					</button>
				</div>
			</div>
		</div>
	);
};

export default Job;
