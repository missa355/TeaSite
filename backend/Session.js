// // Set your secret key. Remember to switch to your live secret key in production!
// // See your keys here: https://dashboard.stripe.com/account/apikeys
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

// const session = await stripe.checkout.sessions.create({
//   payment_method_types: ['card'],
//   line_items: [{
//     price_data: {
//       currency: 'usd',
//       product_data: {
//         name: 'T-shirt',
//       },
//       unit_amount: 2000,
//     },
//     quantity: 1,
//   }],
//   mode: 'payment',
//   success_url: 'https://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
//   cancel_url: 'https://example.com/cancel',
// });

// export default session;
