import Page from "../components/layout/Page";
import Item from "../components/pages/services/Item";

const SERVICES = [
  {
    key: 1,
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
    key: 2,
    title: "internet marketing",
    services: ["Facebook advertising", "SEO and SEM", "Facebook apps"],
  },
  {
    key: 3,
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
    key: 4,
    title: "application development",
    services: ["web applications", "c# applications", "vb.Net applications"],
  },
];

export default function Services() {
  return (
    <Page heading="Services">
      <div uk-grid="true">
        {SERVICES.map(({ key, ...props }) => (
          <Item key={key} {...props} />
        ))}
      </div>
    </Page>
  );
}
