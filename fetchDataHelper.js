const recordMetadata = {
    id: 'id',
    title: 'title',
    release_date: 'release_date',
    opening_revenue: 'opening_revenue',    
};

export default function fetchDataHelper({ amountOfRecords }) {
    return fetch('https://api.gradientworks.dev/ff/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            amountOfRecords,
            recordMetadata,
        }),
    }).then((response) => response.json());
}
