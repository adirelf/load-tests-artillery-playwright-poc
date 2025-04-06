const fs = require('fs');
const axios = require('axios');

const results = JSON.parse(fs.readFileSync('results.json'));

let totalRequests = results.aggregate && results.aggregate.requestsCompleted || 0;
let errors = results.aggregate && results.aggregate.codes && results.aggregate.codes['5xx'] || 0;

const data = `
# TYPE artillery_requests_total gauge
artillery_requests_total ${totalRequests}
# TYPE artillery_errors_total gauge
artillery_errors_total ${errors}
`;

axios.post('http://pushgateway:9091/metrics/job/playwright_artillery', data, {
  headers: { 'Content-Type': 'text/plain' }
}).then(() => console.log('Metrics pushed to Prometheus'))
  .catch(err => console.error('Failed to push metrics', err));