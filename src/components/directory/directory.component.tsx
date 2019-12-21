import React from "react";

import "./directory.styles.scss";
import { MenuItem } from "../menu-item/menu-item.component";

import { Section } from "../../models/HomePage";

interface DirectoryProps {}

interface DirectoryState {
  sections: Section[];
}

export class Directory extends React.Component<DirectoryProps, DirectoryState> {
  constructor(props: DirectoryProps) {
    super(props);

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: ""
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: ""
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: ""
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: ""
        }
      ]
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="directory-menu">
        {sections.map((s: Section, index: number) => (
          <MenuItem menuItem={s} key={s.id} />
        ))}
      </div>
    );
  }
}
