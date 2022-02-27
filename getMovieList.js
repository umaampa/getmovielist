import { LightningElement } from 'lwc';

import fetchDataHelper from './fetchDataHelper';

const columns = [
    { label: 'Id', fieldName: 'id' },
    { label: 'Title', fieldName: 'title', type: 'text' },
    { label: 'Release Date', fieldName: 'release_date', type: 'date' },
    { label: 'Opening Revenue', fieldName: 'opening_revenue', type: 'currency' },    
];

export default class GetMovieList extends LightningElement {
    data = [];
    columns = columns;

    // eslint-disable-next-line @lwc/lwc/no-async-await
    async connectedCallback() {
        const data = await fetchDataHelper({ amountOfRecords: 100 });
        this.data = data;
    }
}
