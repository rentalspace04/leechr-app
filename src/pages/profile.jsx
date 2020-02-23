import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import BackHeader from "../components/BackHeader";
import NameHeader from "../components/NameHeader";
import people from "../utils/people";

export class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const { history, person } = this.props;
    return (
      <>
        <BackHeader history={history} />
        <NameHeader person={person} noLink />
      </>
    );
  }
}

ProfilePage.propTypes = {
  person: PropTypes.object,
  history: PropTypes.object
};

const mapStateToProps = (state, props) => {
  const id = Number.parseInt(_.get(props, "match.params.personID", "0"));
  return {
    person: _.find(people, { id })
  };
};

export default compose(withRouter, connect(mapStateToProps))(ProfilePage);
