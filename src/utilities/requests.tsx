import axios from 'axios';

export function makeRequest(url: any, method: any, body: any) {
    axios({
        url: url,
        method: method,
        data: body
    }).then(response => {
        return response.data;
    })
}

