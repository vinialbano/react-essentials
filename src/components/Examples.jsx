import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import TabButton from "./TabButton.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedTab) {
    setSelectedTopic(selectedTab);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            {Object.entries(EXAMPLES).map(([topic, example]) => (
              <TabButton
                key={topic}
                isSelected={selectedTopic === topic}
                onClick={() => handleSelect(topic)}
              >
                {example.title}
              </TabButton>
            ))}
          </>
        }
      >
        <div id="tab-content">{tabContent}</div>
      </Tabs>
    </Section>
  );
}
