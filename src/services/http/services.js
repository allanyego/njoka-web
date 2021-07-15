const BASE_URL = "/services";

export async function get() {
  return [
    {
      _id: 1,
      title: "web development",
      services: [
        "domain registration",
        "web hosting",
        "responsive design",
        "frontend development",
        "backend development",
      ],
    },
    {
      _id: 2,
      title: "internet marketing",
      services: ["Facebook advertising", "SEO and SEM", "Facebook apps"],
    },
    {
      _id: 3,
      title: "e-commerce integration",
      services: [
        "lipa na M-Pesa",
        "direct bank transfer",
        "paypal integration",
        "card checkout",
        "WooCommerce and Shopify",
      ],
    },
    {
      _id: 4,
      title: "application development",
      services: ["web applications", "c# applications", "vb.Net applications"],
    },
  ];
}

export async function post(data /** , token */) {
  return {
    key: 4,
    title: "application development",
    services: ["web applications", "c# applications", "vb.Net applications"],
  };
}

export async function update(data /** , token */) {
  return {
    key: 4,
    title: "application development",
    services: ["web applications", "c# applications", "vb.Net applications"],
  };
}
