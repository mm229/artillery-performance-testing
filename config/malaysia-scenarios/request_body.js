module.exports = {
    setJSONBody: setJSONBody,
    setPurchaseJSONBody:setPurchaseJSONBody,
    getResponse:getResponse
};

// 40 rps = 12 users
//
// for 5 minutes = 300 seconds
//
// total inventories consumed is 12000 for 5 minutes with 40 rps
// divide into 12 users, then each user will only need 1,000 inventories

var customers = [
  "TEST-1",
  "TEST-2",
  "TEST-3",
  "TEST-4",
  "TEST-5",
  "TEST-6",
  "TEST-7",
  "TEST-8",
  "TEST-9",
  "TEST-10",
  "TEST-11",
  "TEST-12"
]

var counter = 0;

function selectCustomer() {
  if (counter < 12) {
    var selected_customer = customers[counter]
    counter += 1
    return selected_customer
  } else {
    counter = 0; // reset counter
    return customers[counter]
  }
}

function setJSONBody(requestParams, context, ee, next) {
  var body = {
  };
  requestParams.json = body;
  return next(); // MUST be called for the scenario to continue
}

function getResponse(requestParams, response, context, ee, next) {
    var quotes =response.body.quotes;
    var standardListingQuotes = filter_by_currency(quotes, 'inventory');
    context.vars['quote_id'] = standardListingQuotes[0].id;

    return next(); // MUST be called for the scenario to continue
}

function filter_by_currency(quotes, currency) {
  return quotes.filter(quote => {
    return quote.offerAttributes.price.currency === currency
  })
}

function setPurchaseJSONBody(requestParams, context, ee, next) {
    var body = {
        purchaseRequests: [
            {
                quoteIds: [context.vars['quote_id']],

                externalAttributes: {
                    someKey: "someValue"
                }
            }
        ]
    }
    requestParams.json = body;
    return next(); // MUST be called for the scenario to continue
}
