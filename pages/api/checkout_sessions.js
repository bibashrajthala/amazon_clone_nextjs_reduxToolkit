const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { items, email } = req.body;
  // console.log(items);
  console.log(email);

  const transformedItems = items.map((item) => ({
    quantity: 1,
    price_data: {
      currency: "gbp",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "GB"],
    },
    shipping_options: [{ shipping_rate: "shr_1MI32DFfBssmaNm0X61PNFfo" }],
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({
    id: session.id,
  });

  //   if (req.method === "POST") {
  //     try {
  //       // Create Checkout Sessions from body params.
  //       const session = await stripe.checkout.sessions.create({
  //         customer_email: "customer@example.com",
  //         submit_type: "donate",
  //         billing_address_collection: "auto",
  //         shipping_address_collection: {
  //           allowed_countries: ["US", "CA"],
  //         },
  //         line_items: [
  //           {
  //             // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
  //             price: "{{PRICE_ID}}",
  //             quantity: 1,
  //           },
  //         ],
  //         mode: "payment",
  //         success_url: `${req.headers.origin}/?success=true`,
  //         cancel_url: `${req.headers.origin}/?canceled=true`,
  //       });
  //       res.redirect(303, session.url);
  //     } catch (err) {
  //       res.status(err.statusCode || 500).json(err.message);
  //     }
  //   } else {
  //     res.setHeader("Allow", "POST");
  //     res.status(405).end("Method Not Allowed");
  //   }
}
