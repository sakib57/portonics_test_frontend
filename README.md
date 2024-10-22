
# Portonics Test Frontend

This is the frontend part, developed with react js. This system is only accessible for authenticated user.
After login into the system there is orders button in left sidebar.
To view order list user need to click orders button.
There is a create order button on the top right corner of order list page.
After creating the order system will redirect to Invoice page.
Then, merchant can copy the payment link and send to the customer.
After a successful payment customer can see the Payment Successfull message
Using webhook the system should update the order payment status
But somehow the webhook is not working, maybe the reason is local IPN url
Whatever, payment status update by webhook functionality is done.

## Table of Contents
- [Installation](#installation)
- [Development](#development)


## Installation

Clone the repository and install the required dependencies:

```bash
npm install
```


## Development

Start the development server:

```bash
npm run dev
```

The application will be running on `http://localhost:5173`.
---

