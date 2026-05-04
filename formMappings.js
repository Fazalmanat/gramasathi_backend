// formMappings.js
module.exports = {
  "https://gov-portal.com/schemeX": {
    name: "#fullName",
    email: "#emailField",
    phone: "#phoneInput",
    address: "#addr",
    complaint: "#details",
    submit: "#submitBtn"
  },
  "https://ngo-form.org/report": {
    name: "input[name='user_name']",
    email: "input[name='user_email']",
    complaint: "textarea[name='description']",
    submit: "button[type='submit']"
  },
  "http://127.0.0.1:5500/dummyForm.html": {
    name: "#fullName",
    email: "#emailField",
    phone: "#phoneInput",
    address: "#addr",
    complaint: "#details",
    submit: "#submitBtn"
  },
  "http://127.0.0.1:5500/gramasathi-backend/forms/form.html": {
    name: "#name",
    aadhaar_number: "#aadhaar_number",
    phone: "#phone",
    submit: "button[type='submit']"},


  "http://127.0.0.1:5500/gramasathi-backend/forms/incomeform.html": {
    name: "#name",
    father_name: "#father_name",
    dob: "#dob",
    gender: "#gender",
    aadhaar_number: "#aadhaar_number",
    house_number: "#house_number",
    village: "#village",
    tehsil: "#tehsil",
    district: "#district",
    state: "#state",
    pin_code: "#pin_code",
    phone: "#phone",
    email: "#email",
    purpose: "#purpose",
    reason: "#reason",
    income: "#income",
    financial_year: "#financial_year",
    bank_name: "#bank_name",
    college: "#college",
    course: "#course",
    duration: "#duration",
    session: "#session",
    declaration: "#declaration",
    date: "#date",
    place: "#place",
    signature: "#signature",
    submit: "#submit"}
  };