export const changeColorByType = (type) => {
	switch (type) {
		case "fire":
			return "fire";

		case "water":
			return "water";

		case "grass":
			return "normal";

		case "bug":
			return "bug";

		default:
			return "normal";
	}
};
