import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function Employee({
  handleInsertNode,
  handleUpdateNode,
  handleDeleteNode,
  employeeData,
}) {
  const [expand, setExpand] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [hasSubordinates, setHasSubordinates] = useState("");
 
  // State variables for edit dialog
  const [editOpen, setEditOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhoneNo, setEditPhoneNo] = useState("");
  const [editHasSubordinates, setEditHasSubordinates] = useState("");


  const handleEditOpen = () => {
    setEditName(employeeData.name);
    setEditEmail(employeeData.email);
    setEditPhoneNo(employeeData.phoneNo);
    setEditHasSubordinates(employeeData.hasSubordinates);
    setEditOpen(true);
  };

  const handleEditClose = () => {
    setEditOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleNewLeader = (e, name, email, phoneNo, hasSubordinates) => {
    e.stopPropagation();
    handleInsertNode(
      employeeData.id,
      name,
      email,
      phoneNo,
      hasSubordinates
    );
    setName("");
    setEmail("");
    setPhoneNo("");
    setHasSubordinates("");
    handleClose();
  };

  const handleEditLeader = (e) => {
    e.preventDefault();
    handleUpdateNode(employeeData.id, editName, editEmail, editPhoneNo, editHasSubordinates);
    handleEditClose();
  };

  if (employeeData.hasSubordinates) {
    return (
      <div>
        <Box
          className="leader"
          onClick={() => setExpand(!expand)}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            borderRadius: 10,
            backgroundColor: "#c0c0c0",
            "& > :not(style)": {
              m: 1,
              paddingLeft: 3,
              paddingTop: 3,
              paddingBottom: 3,
              width: 80 + "%",
              height: 80 + "%",
              fontSize: 18,
              fontWeight: "normal",
            },
          }}
        >
          <Paper elevation={3}>
            <h4>
              👤{employeeData.name} - {employeeData.position}
            </h4>
            <p>{employeeData.email}</p>
            <p>{employeeData.phoneNumber}</p>


            <div>
              
              <Fab
                color="secondary"
                size="small"
                aria-label="add"
                onClick={handleClickOpen}
              >
                <AddIcon />
              </Fab>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">
                  {"Add New Employee"}
                </DialogTitle>
                <DialogContent>
                  <TextField
                    label="Name"
                    id="outlined-size-normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{ marginBottom: 3 }}
                  />
                  <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="outlined-size-normal"
                    sx={{ marginBottom: 3 }}
                  />
                  <TextField
                    label="PhoneNo"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    id="outlined-size-normal"
                    sx={{ marginBottom: 3 }}
                  />
                      <TextField
                  select
                  label="Has Subordinates"
                  value={hasSubordinates}
                  onChange={(e) => setHasSubordinates(e.target.value)}
                  sx={{ marginBottom: 3 }}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </TextField>
                  
                </DialogContent>

                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button
                    type="submit"
                    onClick={
                      (e) => handleNewLeader(e, name, email, phoneNo, hasSubordinates)
                    }
                  >
                    Add
                  </Button>
                </DialogActions>
              </Dialog>

{/* Edit dialog */}
<Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Employee</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            label="Email"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            label="PhoneNo"
            value={editPhoneNo}
            onChange={(e) => setEditPhoneNo(e.target.value)}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            select
            label="Has Subordinates"
            value={editHasSubordinates}
            onChange={(e) => setEditHasSubordinates(e.target.value)}
            sx={{ marginBottom: 3 }}
          >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={
                      (e) => handleEditLeader(e, name, email, phoneNo, hasSubordinates)
                    }>Update</Button>
        </DialogActions>
      </Dialog>

              <Fab
                color="secondary"
                size="small"
                aria-label="edit"
                onClick={handleEditOpen}
                style={{marginLeft: 20}}
              >
                <EditIcon  />
              </Fab>
              
              {/* <Fab
              color="primary"
              size="small"
              aria-label="delete"
              style={{marginLeft: 20}}
              onClick={() => handleDeleteNode(employeeData.id)}
            >
              <DeleteIcon />
            </Fab> */}
            </div>
          </Paper>
        </Box>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 50, paddingTop: 20 }}>
          {employeeData.members.map((emp) => {
            return (
              <Employee
                key={emp.id}
                employeeData={emp}
                handleInsertNode={handleInsertNode}
                handleUpdateNode={handleUpdateNode}
                handleDeleteNode={handleDeleteNode}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <Box
          className="leader"
          onClick={() => setExpand(!expand)}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            borderRadius: 10,
            backgroundColor: "#c0c0c0",
            "& > :not(style)": {
              backgroundColor: "#fcfb00",
              padding: 3,
              width: 70 + "%",
              height: 180,
              fontSize: 18,
              fontWeight: "normal",
            },
          }}
        >
          <Paper elevation={4}>
            <h5 className="member">
              {employeeData.name} - {employeeData.position}
            </h5>
            <p>{employeeData.email}</p>
            <p>{employeeData.phoneNumber}</p>
            <Fab
                color="black"
                size="small"
                aria-label="edit"
                onClick={handleEditOpen}
                style={{marginRight: 20}}
              >
                <EditIcon  />
              </Fab>
              {/* Edit dialog */}
<Dialog open={editOpen} onClose={handleEditClose}>
        <DialogTitle>Edit Employee</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            label="Email"
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            label="PhoneNo"
            value={editPhoneNo}
            onChange={(e) => setEditPhoneNo(e.target.value)}
            sx={{ marginBottom: 3 }}
          />
          <TextField
            select
            label="Has Subordinates"
            value={editHasSubordinates}
            onChange={(e) => setEditHasSubordinates(e.target.value)}
            sx={{ marginBottom: 3 }}
          >
            <MenuItem value={true}>Yes</MenuItem>
            <MenuItem value={false}>No</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditClose}>Cancel</Button>
          <Button onClick={
                      (e) => handleEditLeader(e, name, email, phoneNo, hasSubordinates)
                    }>Update</Button>
        </DialogActions>
      </Dialog>
            <Fab
              color="black"
              size="small"
              aria-label="delete"
              onClick={() => handleDeleteNode(employeeData.id)}
            >
              <DeleteIcon />
            </Fab>
          </Paper>
        </Box>
      </>
    );
  }
}

export default Employee;
