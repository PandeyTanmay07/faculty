import React from "react";
import { useParams } from "react-router";
import List from "../../components/List";
import API from "../../API";

const ApplicationPage = () => {
  const { jobPostID } = useParams();

  return (
    <List
      APIURI={API.fetchJobApplicants(jobPostID)}
      sessionName="studentsDetails"
      title="Applicants List"
    />
  );
};

export default ApplicationPage;
