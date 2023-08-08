import React from "react";
import ReactMarkdown from "react-markdown";
import Scrollspy from "react-scrollspy";

const documentation = `...`; // Your documentation text here

const DocumentationPage = () => {
  return (
    <div className="documentation-page">
      <div className="documentation-container">
        <ReactMarkdown>{documentation}</ReactMarkdown>
      </div>
      <div className="navigation-panel">
        <Scrollspy
          items={[
            "packages",
            "named-addresses-during-compilation",
            "usage-artifacts-and-data-structures",
          ]}
          currentClassName="is-current"
        >
          <li>
            <a href="#packages">Packages</a>
          </li>
          <li>
            <a href="#named-addresses-during-compilation">Named Addresses</a>
          </li>
          <li>
            <a href="#usage-artifacts-and-data-structures">Usage & Artifacts</a>
          </li>
        </Scrollspy>
      </div>
    </div>
  );
};

export default DocumentationPage;
