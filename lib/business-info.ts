export const business = {
  name: "Your Business Name",
  phone: "YOUR_PHONE_NUMBER",
  phoneHref: "tel:+1YOURPHONENUMBER",
  email: "YOUR_EMAIL",
  emailHref: "mailto:YOUR_EMAIL",
  address: {
    street: "YOUR_STREET",
    city: "YOUR_CITY",
    state: "IL",
    zip: "YOUR_ZIP",
  },
  hours: {
    weekdays: "8am – 6pm",
    saturday: "9am – 4pm",
    sunday: "Closed",
  },
  serviceAreas: ["City One", "City Two", "City Three", "City Four", "City Five"],
} as const;
