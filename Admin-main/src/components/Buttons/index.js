import React from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ProfileButton = styled(Button)(({ theme }) => ({
  marginBottom: "15px",
  textTransform: "none",
  borderRadius: "10px",
  background: "#1E4786",
  color: "white",
}));

const Buttons = ({
  setopenStudentList,
  setOpenAddCompany,
  setOpenRegisterTPO,
  setOpenRegisterFaculty,
  setopenJobList,
  changePage = false,
}) => {
  const handleClick = (i) => {
    setopenStudentList(false);
    setOpenAddCompany(false);
    setOpenRegisterTPO(false);
    setOpenRegisterFaculty(false);
    setopenJobList(false);
    if (i === 1) {
      setopenStudentList(true);
    } else if (i === 2) {
      setOpenAddCompany(true);
    } else if (i === 3) {
      setOpenRegisterTPO(true);
    } else if (i === 4) {
      setOpenRegisterFaculty(true);
    } else if (i == 5) {
      setopenJobList(true);
    }
  };
  return (
    <>
      {changePage ? (
        <Link to="/view" style={{ textDecoration: "none" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="column">
              {/* <ProfileButton variant="contained">VIEW DRIVES</ProfileButton> */}
              <ProfileButton
                variant="contained"
                onClick={() => {
                  handleClick(1);
                }}
              >
                VIEW STUDENT LIST
              </ProfileButton>

              <ProfileButton
                variant="contained"
                onClick={() => {
                  handleClick(2);
                }}
              >
                NEW DRIVE
              </ProfileButton>

              <ProfileButton
                variant="contained"
                onClick={() => {
                  handleClick(3);
                }}
              >
                REGISTER A TPO
              </ProfileButton>

              <ProfileButton
                variant="contained"
                onClick={() => {
                  handleClick(4);
                }}
              >
                REGISTER A Faculty
              </ProfileButton>
              <ProfileButton
                variant="contained"
                onClick={() => {
                  handleClick(5);
                }}
              >
                VIEW DRIVES
              </ProfileButton>
            </Stack>
          </Stack>
          ;
        </Link>
      ) : (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="column">
            {/* <ProfileButton variant="contained">VIEW DRIVES</ProfileButton> */}
            <ProfileButton
              variant="contained"
              onClick={() => {
                handleClick(1);
              }}
            >
              VIEW STUDENT LIST
            </ProfileButton>

            <ProfileButton
              variant="contained"
              onClick={() => {
                handleClick(2);
              }}
            >
              NEW DRIVE
            </ProfileButton>

            <ProfileButton
              variant="contained"
              onClick={() => {
                handleClick(3);
              }}
            >
              REGISTER A TPO
            </ProfileButton>

            <ProfileButton
              variant="contained"
              onClick={() => {
                handleClick(4);
              }}
            >
              REGISTER A Faculty
            </ProfileButton>
            <ProfileButton
              variant="contained"
              onClick={() => {
                handleClick(5);
              }}
            >
              VIEW DRIVES
            </ProfileButton>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default Buttons;
