import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import _ from "lodash";
import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

import Event, { EventsWrapper } from "../components/Event";
import EVENTS_LIST from "../utils/events";

const HomeWrapper = styled.div`
  > button {
    margin: 0px 0 20px auto;
    display: flex;
  }
`;

const InputPair = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  > div {
    flex: 1;

    &:first-child {
      margin-right: 20px;
    }
  }
`;
const FromActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  const [from, setFrom] = React.useState([{ name: "", amount: "" }]);
  const [toDetails, setToDetails] = React.useState({
    name: "",
    amount: "",
    description: ""
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addFrom = () => {
    setFrom(_.concat(from, { name: "", amount: "" }));
  };

  const removeLastFrom = () => {
    if (_.size(from) > 1) {
      setFrom(_.slice(from, 0, _.size(from) - 1));
    }
  };

  const updateEntry = ({ name, amount, i }) => {
    setFrom(
      _.concat(_.slice(from, 0, i), { name, amount }, _.slice(from, i + 1))
    );
  };

  return (
    <HomeWrapper>
      <Helmet>
        <title>Leechr | Ledger</title>
      </Helmet>
      <Button
        color="primary"
        variant="contained"
        aria-label="add to shopping cart"
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Add
      </Button>
      <EventsWrapper>
        {_.map(EVENTS_LIST, event => (
          <Event event={event} key={event.id} />
        ))}
      </EventsWrapper>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullScreen
      >
        <DialogTitle id="form-dialog-title">Add Person</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Provide details of who, why and how much you will now be owed.
          </DialogContentText>
          <Typography variant="h5" gutterBottom>
            Who bought?
          </Typography>
          <InputPair>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              value={toDetails.name}
              onChange={e =>
                setToDetails({ ...toDetails, name: e.currentTarget.value })
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="amount"
              label="Amount"
              type="number"
              step="any"
              min="0"
              value={toDetails.amount}
              onChange={e =>
                setToDetails({ ...toDetails, amount: e.currentTarget.value })
              }
            />
          </InputPair>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            style={{
              marginBottom: "20px"
            }}
            value={toDetails.description}
            onChange={e =>
              setToDetails({ ...toDetails, description: e.currentTarget.value })
            }
          />
          <InputPair>
            <Typography variant="h5" gutterBottom>
              Who leeched?
            </Typography>
            <FromActions>
              <IconButton
                color="primary"
                aria-label="Add another person"
                onClick={addFrom}
              >
                <AddIcon />
              </IconButton>
              <IconButton
                color="secondary"
                aria-label="Remove a person"
                onClick={removeLastFrom}
              >
                <DeleteIcon />
              </IconButton>
            </FromActions>
          </InputPair>
          {_.map(from, ({ name, amount }, i) => (
            <InputPair key={i}>
              <TextField
                autoFocus
                margin="dense"
                id={`name-${i}`}
                label="Name"
                type="text"
                value={name}
                onChange={e =>
                  updateEntry({ amount, i, name: e.currentTarget.value })
                }
              />
              <TextField
                autoFocus
                margin="dense"
                id={`amount-${i}`}
                label="Amount"
                type="number"
                step="any"
                min="0"
                value={amount}
                onChange={e =>
                  updateEntry({ name, i, amount: e.currentTarget.value })
                }
              />
            </InputPair>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={e => {
              console.log(e);
              handleClose();
            }}
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </HomeWrapper>
  );
};

export default HomePage;
