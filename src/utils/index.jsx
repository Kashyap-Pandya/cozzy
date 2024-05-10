import axios from "axios";

const productionUrl = " https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
	baseURL: productionUrl,
});

export const formatCurrency = (price) => {
	const amount = new Intl.NumberFormat("en-In", {
		style: "currency",
		currency: "INR",
		maximumFractionDigits: 3,
	}).format(((price * 2) / 2).toFixed(0));
	return amount;
};

export const generateAmountOptions = (number) => {
	return Array.from({ length: number }, (_, index) => {
		const amount = index + 1;
		return (
			<option key={amount} value={amount}>
				{amount}
			</option>
		);
	});
};
