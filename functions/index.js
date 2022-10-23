require('dotenv').config()
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(`sk_test_51LvX7dAPnnVN55OMkC18CdthFDG6uRgteslKp1fqlMyFJxm0FZMLEokyEyJVRbWhQxj4rLFCd5fQ2cAyathQ2cOF00Gbq2lQni`);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello hu"));

app.options("/payments/create", cors());
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/humazon-9-9-2019/us-central1/api