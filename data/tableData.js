// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var tableArray = [
  {
    customerName: "Will",
    customerEmail: "will@example.com",
    phoneNumber: "555-867-5309",
    customerID: "WILL.I.AM"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
