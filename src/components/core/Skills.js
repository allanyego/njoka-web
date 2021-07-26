import { useState } from "react";

import Button from "./Button";
import Input from "./form/Input";
import SkillBadge from "./SkillBadge";
import "./Skills.css";

export default function Skills({ skills, setSkills }) {
  const [skill, setSkill] = useState("");

  const handleChange = (e) => setSkill(e.target.value.trim());

  const handleAdd = () => {
    setSkills([...skills, skill]);
    setSkill("");
  };

  const wrapCloseHandler = (index) => () => {
    setSkills([...skills.filter((_, idx) => idx !== index)]);
  };

  return (
    <>
      <div className="uk-margin-small-bottom uk-flex skill-badges">
        {skills.map((_skill, index) => (
          <SkillBadge
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            value={_skill}
            onClose={wrapCloseHandler(index)}
          />
        ))}
      </div>
      <div className="uk-flex uk-flex-middle">
        <div style={{ flexGrow: 1 }}>
          <Input placeholder="Skill" value={skill} onChange={handleChange} />
        </div>
        <Button
          className="uk-button uk-button-primary uk-margin-small-left"
          icon="plus"
          onClick={handleAdd}
          disabled={skill.length === 0}
        >
          Add
        </Button>
      </div>
    </>
  );
}
