import testProjectImage from "../../assets/images/test-project.png";

const BASE_URL = "/work";

export async function get() {
  return [
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
}

export async function getById(_id) {
  return {
    _id: 3,
    projectName: "huduma app",
    image: testProjectImage,
    skills: ["php", "xanarin"],
  };
}

export async function update(_id, data, token) {
  return {
    _id: 3,
    projectName: "huduma app",
    image: testProjectImage,
    skills: ["php", "xanarin"],
  };
}

export async function post(data, token) {
  return {
    _id: 500,
    projectName: data.name,
    image: testProjectImage,
    skills: data.skills,
    projectLink: data.projectLink,
  };
}
