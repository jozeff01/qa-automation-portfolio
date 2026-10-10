import { test, expect } from '@playwright/test';

test.describe('API Tests for Restful-booker', () => {
  
  test('Creating a new booking via the API', async ({ request }) => {

    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
      data: {
        firstname: "John",
        lastname: "Doe",
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: "2026-06-01",
          checkout: "2026-06-10"
        },
        additionalneeds: "Breakfast"
      }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
     

    expect(responseBody).toHaveProperty('bookingid');
    expect(responseBody.booking.firstname).toBe('John');
    expect(responseBody.booking.lastname).toBe('Doe');
    expect(responseBody.booking.totalprice).toBe(150);

    console.log('Booking created with ID:', responseBody.bookingid);
  });
})



  test('Retrieve booking by ID', async ({ request }) => {

    const createResponse = await request.post('https://restful-booker.herokuapp.com/booking', {
      data: {
        firstname: "Jane",
        lastname: "Smith",
        totalprice: 200,
        depositpaid: false,
        bookingdates: {
          checkin: "2026-07-01",
          checkout: "2026-07-05"
        },
        additionalneeds: "Dinner"
      }
    });
    
    const createBody = await createResponse.json();
    const bookingId = createBody.bookingid;


    const getResponse = await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`);
    
    expect(getResponse.status()).toBe(200);
    const getBody = await getResponse.json();
    
    expect(getBody.firstname).toBe('Jane');
    expect(getBody.totalprice).toBe(200);
    
    console.log('Successfully verified the reservation with ID:', bookingId);
});   

