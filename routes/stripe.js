const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
// const KEY = process.env.STRIPE_KEY
const KEY = "sk_test_51L3lBoKviup5I1Akje4HKdGrDXLvxtPGPupEBALqkRvzD50zihlEkq0DNtXyxnpin4AI0Oq5S71ed5xJK0A23h9N00LFYtO3yW"
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;