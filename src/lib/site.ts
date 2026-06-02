export const SITE = {
  name: "Rathod & Co.",
  owner: "Akshay Rathod",
  title: "Tax Consultant",
  phone: "+91 9408352976",
  phoneRaw: "919408352976",
  phone2: "+91 94268 24673",
  phone2Raw: "919426824673",
  email: "caakshay001@gmail.com",
  address:
    "FF-10, Shree Shiddheshwar Plaza, Near Khodiar Nagar Cross Road, Behind Sakar Complex, Ajwa Road, Vadodara – 390019",
  city: "Vadodara",
  whatsapp: (msg = "Hi Akshay, I'd like to know more about your services.") =>
    `https://wa.me/919408352976?text=${encodeURIComponent(msg)}`,
  tel: "tel:+919408352976",
  tel2: "tel:+919426824673",
  mailto: "mailto:caakshay001@gmail.com",
  mapsEmbed:
    "https://www.google.com/maps?q=Ajwa+Road+Vadodara+390019&output=embed",
  yearsExperience: 15,
  clientsServed: 1200,
  servicesCount: 20,
};
