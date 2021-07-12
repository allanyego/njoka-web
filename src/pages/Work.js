import testProjectImage from "../assets/images/test-project.png";
import Page from "../components/layout/Page";
import Card from "../components/pages/work/Card";

const TEST_PROJECTS = [
  {
    _id: 1,
    projectName: "huduma app",
    image: testProjectImage,
    skills: ["php", "xanarin"],
  },
  {
    _id: 2,
    projectName: "huduma app",
    image: testProjectImage,
    skills: ["php", "xanarin"],
  },
  {
    _id: 3,
    projectName: "huduma app",
    image: testProjectImage,
    skills: ["php", "xanarin"],
  },
];
export default function Work() {
  return (
    <Page heading="Work">
      <div uk-grid="true">
        {TEST_PROJECTS.map((project) => (
          <Card key={project._id} {...project} />
        ))}
      </div>
    </Page>
  );
}
