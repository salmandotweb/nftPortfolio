/** @format */
// homepage animations
export const parent = {
	show: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const children = {
	hidden: {
		opacity: 0,
		scale: 0.75,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			type: "spring",
		},
	},
};

export const service = {
	hidden: {
		opacity: 0,
		scale: 0.75,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			type: "spring",
		},
	},
};

export const trial = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
			type: "spring",
		},
	},
};
export const trialPath = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			type: "spring",
		},
	},
};

export const imageContainer = {
	hidden: {
		opacity: 0,
		scale: 0.2,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			type: "spring",
		},
	},
};

export const image = {
	hidden: {
		opacity: 0,
		scale: 0.5,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1,
			type: "spring",
		},
	},
};

export const sectionTitle = {
	hidden: {
		opacity: 0,
		scale: 0.5,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			type: "spring",
		},
	},
};
