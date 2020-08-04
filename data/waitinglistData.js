// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var waitingArray = [
  {
    customerName: "Nic",
    customerEmail: "nwc@nicchappell.com",
    phoneNumber: "555-867-5309",
    customerID: "NC_Hammer"
  }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = waitingArray;
