/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter((trip) => pattern.test(trip.name));
  }

  if (filters.tags.length > 0) {
    const pattern = filters.tags;
    pattern.forEach(
      (tag) => (output = output.filter((trip) => trip.tags.indexOf(tag) >= 0))
    );
  }

  output = output.filter(
    (trip) =>
      trip.days >= filters.duration.from && trip.days <= filters.duration.to
  );

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({ trips }, tripId) => {
  const filtered = trips;
  const [trip] = filtered.filter((country) => {
    if (country.id === tripId) return country;
  });
  return filtered.length ? trip : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  const filtered = trips;
  const trip = filtered.filter((country) => {
    if (country.country.code === countryCode) return country;
  });
  return filtered.length ? trip : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
