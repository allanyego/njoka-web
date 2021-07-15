import Page from "../components/layout/Page";
import ContactDetails from "../components/pages/contact/Contact";
import ContactForm from "../components/pages/contact/Form";
import sendEmail from "../services/http/contact";

const CONTACT_DETAILS = {
  mobile: ["+(254) 719-578752", "+(254) 735-723680"],
  email: ["info@njoka.net"],
  location: "WESTLANDS, NAIROBI",
};

export default function Contact() {
  const handleSubmit = async (values, { setSubmitting, resetValues }) => {
    try {
      await sendEmail(values);
      console.log("Sent mail");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Page heading="Contact">
      <p className="uk-text-center">Get in touch.</p>
      <div uk-grid="true">
        <div className="uk-width-1-2">
          <ContactForm handleSubmit={handleSubmit} />
        </div>
        <div className="uk-width-1-2">
          <ContactDetails {...CONTACT_DETAILS} />
        </div>
      </div>
    </Page>
  );
}
