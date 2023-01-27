import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import Currency from "react-currency-formatter";

import { selectItems, selectTotal } from "../slices/basketSlice";

import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";

import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Checkout = () => {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // call the backend to create a checkout session
    const checkoutSession = await axios.post("api/checkout_sessions", {
      items,
      email: session.user.email,
    });

    // redirect customer to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* lefthandsection */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            priority
            alt="banner checkout"
            width={1020}
            height={250}
            className="object-contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your amazon basket is empty"
                : "Your shopping basket"}
            </h1>

            {items.map((item, index) => (
              <CheckoutProduct key={index} item={item} />
            ))}
          </div>
        </div>

        {/* righthandsection in lg / bottom in md and sm */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap text-md font-medium">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  <Currency quantity={total} currency="GBP" />
                </span>
              </h2>

              <button
                onClick={createCheckoutSession}
                role="link"
                disabled={!session}
                className={`button mt-2 min-w-max ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed "
                }`}
              >
                {!session ? "Sign In to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
