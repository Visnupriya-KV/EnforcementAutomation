const { test, expect, request } = require('@playwright/test');
const headers = require('../API_JSON/headers.json');
const loginInfo = require('../API_JSON/loginInfo.json'); // Optional, unused
const apiEndpoint = require('../API_JSON/apiEndpoint.json');
const requestBody = require('../API_JSON/requestBody.json');

test('PUT_SaveViolationData_API - verbose log', async () => {
  const apiContext = await request.newContext({
    extraHTTPHeaders: headers
  });

  const url = apiEndpoint.saveViolationData;

  console.log('\n--- REQUEST INFO ---');
  console.log('URL:', url);
  console.log('Method: PUT');
  console.log('Request Headers:', headers);
  console.log('Request Body:', JSON.stringify(requestBody, null, 2));

  const response = await apiContext.put(url, {
    data: requestBody
  });

  const responseBody = await response.json();
  const responseHeaders = response.headers();

  console.log('\n--- RESPONSE INFO ---');
  console.log('Status:', response.status());
  console.log('Response Headers:', responseHeaders);
  console.log('Response Body:', JSON.stringify(responseBody, null, 2));

  expect(response.status()).toBeLessThan(300);
});


