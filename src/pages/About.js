import Page from "../components/layout/Page";
import Card from "../components/pages/about/Card";
import webDevImage from "../assets/images/services/web-dev.svg";
import frontendDevImage from "../assets/images/services/frontend-dev.svg";
import techSupportImage from "../assets/images/services/tech-support.svg";
import "./About.css";

const EXPERTISE = [
  {
    key: 1,
    title: "web development",
    body: "Javascript, Coffeescript, JAVA, Python, PHP, Go, Node.js, MongoDB, Redis, PostgreSQL, WebStorm.",
    image: webDevImage,
  },
  {
    key: 2,
    title: "frontend development",
    body: "HTML, CSS, LESS, SASS, Bootstrap, WordPress, Drupal, Phonegap / Cordova, Ionic, Foundation, Angular.js.",
    image: frontendDevImage,
  },
  {
    key: 3,
    title: "technical support",
    body: "Server issues, Emails configuration, Ssl Certificates installation, Domains and web hosting accounts registration & transfer.",
    image: techSupportImage,
  },
];

export default function About() {
  return (
    <Page heading="About me" className="about-page">
      <p>
        I am a Web Developer From Nairobi Kenya. My inspiration comes from
        working with great people who are equally or more passionate about
        building functional and wholesome stuff. I am looking to take on more
        work and to increase my skills as a Web Developer.
      </p>
      <div uk-grid="true">
        {EXPERTISE.map(({ key, ...props }) => (
          <Card key={key} {...props} />
        ))}
      </div>
    </Page>
  );
}
