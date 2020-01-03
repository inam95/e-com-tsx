import React from "react";

import "./directory.styles.scss";
import { MenuItem } from "../menu-item/menu-item.component";

import { SectionModel } from "../../models/HomePage";
import { connect } from "react-redux";
import { StoreState } from "../../redux/root-reducer";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

interface DirectoryStoreProps {
  sections: SectionModel[];
}
interface DirectoryProps extends DirectoryStoreProps {}

const _Directory: React.FC<DirectoryProps> = (props: DirectoryProps) => {
  const { sections } = props;
  return (
    <div className="directory-menu">
      {sections.map((s: SectionModel) => (
        <MenuItem menuItem={s} key={s.id} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector<StoreState, DirectoryProps>({
  sections: selectDirectorySections
});

export const Directory = connect(mapStateToProps)(_Directory);
