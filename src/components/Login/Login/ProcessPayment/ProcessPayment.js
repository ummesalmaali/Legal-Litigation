import React from "react";
import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimpleCardForm";

const stripePromise = loadStripe(
  "pk_test_51Ie2FoKkVKIrazWHReZRwFfcnMuqv7wjbD1U4zeeF4suCQ02mVvD7MSAK1zy7j12yftHhEMKWYHbIyWGl6IoxZbp00gGLX9XGq"
);
const ProcessPayment = () => {
  return (
    <div className='w-50 p-5 align-items-center ml-5'>
        <Elements stripe={stripePromise}>
        <h2 className='mb-5'>Make Your Transaction Here</h2>
           <SimpleCardForm></SimpleCardForm>
    </Elements>
    </div>
  );
};

export default ProcessPayment;
