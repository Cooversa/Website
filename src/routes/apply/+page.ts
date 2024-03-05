import type { PageLoad } from './$types';

function getCountriesList(
	fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>
): Promise<string[]> {
	return fetch('https://restcountries.com/v3.1/all?fields=name') // Replace with a preferred reliable source
		.then((response) => response.json()) // Parse the JSON response
		.then((data) => {
			// Extract the list of countries from the data (adjust based on the data structure of the chosen source)
			const countries = data.map((country: { name: { common: string } }) => country.name.common); // Example assuming "name" property holds country names
			return countries;
		})
		.catch((error) => {
			console.error('Error fetching countries:', error);
			return []; // Return an empty array in case of errors
		});
}

export const load: PageLoad = async ({ fetch }) => {
	const countries: string[] = (await getCountriesList(fetch)).sort();
	const nigeria = countries.indexOf('Nigeria');
	countries.splice(nigeria, 1);
	countries.unshift('Nigeria');

	// Remove Iraq, Iran, Syria, Yemen, and Libya from the list
	const countriesToRemove = ['Iraq', 'Iran', 'Syria', 'Yemen', 'Libya'];
	countriesToRemove.forEach((country) => {
		const index = countries.indexOf(country);
		if (index > -1) {
			countries.splice(index, 1);
		}
	});

	return {
		countryList: countries
	};
};
