export const business = {
  name: "Midway Chimney & Masonry",
  phone: "(312) 241-5115",
  phoneHref: "tel:+13122415115",
  email: "YOUR_EMAIL",
  emailHref: "mailto:YOUR_EMAIL",
  address: {
    street: "YOUR_STREET",
    city: "Chicago",
    state: "IL",
    zip: "YOUR_ZIP",
    neighborhood: "Near Midway Airport, South Side",
  },
  hours: {
    weekdays: "YOUR_WEEKDAY_HOURS",
    saturday: "YOUR_SATURDAY_HOURS",
    sunday: "YOUR_SUNDAY_HOURS",
  },
  serviceAreas: ["Cook County", "DuPage County", "Lake County"],
  offer: {
    label: "Chimney Cleaning + 14-Point Inspection",
    price: "$189",
    description:
      "Two services. One honest price. Know exactly what you're paying before we show up — no surprises, no add-ons you didn't ask for.",
  },
} as const;
