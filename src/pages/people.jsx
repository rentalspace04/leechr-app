import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import PersonAdd from "@material-ui/icons/PersonAdd";
import _ from "lodash";
import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import Person, { PeopleWrapper } from "../components/Person";
import people from "../utils/people";

const PeoplePageWrapper = styled.div`
  > button {
    margin: 0px 0 20px auto;
    display: flex;
  }
`;

export const PeoplePage = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <PeoplePageWrapper>
      <Helmet>
        <title>Leechr | People</title>
      </Helmet>
      <Button
        color="primary"
        variant="contained"
        aria-label="add to shopping cart"
        startIcon={<PersonAdd />}
        onClick={handleOpen}
      >
        Add
      </Button>
      <PeopleWrapper>
        {_.map(people, person => (
          <Person person={person} key={person.id} />
        ))}
      </PeopleWrapper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Person</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide the name of the person whose leeching you wish to monitor.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </PeoplePageWrapper>
  );
};

export default PeoplePage;
