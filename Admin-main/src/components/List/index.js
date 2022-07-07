import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import { InputBase, Paper, Typography } from "@mui/material";
// import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { useFetch } from "../../hooks/useFetch";
// import API from "../../API";
import axios from "../../API/axios";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function StudentList({
  setStudentUID,
  setopenStudentProfile,
  APIURI,
  sessionName,
  title,
}) {
  const { content, loading } = useFetch(APIURI, sessionName);
  const [search, setSearch] = useState("");
  if (loading) {
    return <></>;
  }
  let contentData = [];
  if (!loading && content?.students) {
    contentData = content.students;
  } else if (!loading && content?.applications) {
    contentData = content.applications;
  }
  // console.log("HEsd", content);
  return (
    <>
      <Typography align="center" variant="h5" gutterBottom component="div">
        {title}
      </Typography>

      <Paper
        component="form"
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          boxSizing: "border-box",
          marginBottom: "1rem",
        }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Student" />
        {/* <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <AssignmentIndIcon />
        </IconButton> */}
      </Paper>

      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          maxHeight: 630,
          overflow: "auto",
        }}
        // style={{ maxHeight: "90%", overflow: "auto" }}
      >
        {Array.isArray(contentData) &&
          contentData.map((data, index) => (
            <ListItem
              key={index}
              secondaryAction={
                data?.displayName ? (
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => {
                      setStudentUID(data.uid);
                      setopenStudentProfile(true);
                      // console.log("student", student.uid);
                    }}
                  >
                    <CommentIcon />
                  </IconButton>
                ) : (
                  <>
                    {/* <FormGroup>
                      <FormControlLabel
                        control={<Switch />}
                        label="Placement Status"
                      />
                    </FormGroup> */}

                    <IconButton
                      edge="end"
                      aria-label="comments"
                      onClick={() => {
                        axios({
                          url: `admin/student/profile/pdf/${data?.uid}`, //your url
                          method: "GET",
                          responseType: "blob", // important
                        }).then((response) => {
                          const url = window.URL.createObjectURL(
                            new Blob([response.data])
                          );
                          const link = document.createElement("a");
                          link.href = url;
                          link.setAttribute(
                            "download",
                            `${data?.name}-Resume.pdf`
                          ); //or any other extension
                          document.body.appendChild(link);
                          link.click();
                        });
                      }}
                    >
                      <CommentIcon />
                    </IconButton>
                  </>
                )
              }
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemText primary={data?.displayName || data?.name} />
                {/* <ListItemText primary={student.uid} /> */}
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </>
  );
}
