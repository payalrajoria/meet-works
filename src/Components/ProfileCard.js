import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import Chip from "@mui/material/Chip";
import SchoolIcon from "@mui/icons-material/School";
import ShareButton from "./ShareButton";

const axios = require("axios");
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function getWords(monthCount) {
  function getPlural(number, word) {
    return (number === 1 && word.one) || word.other;
  }

  var months = { one: "month", other: "months" },
    years = { one: "year", other: "years" },
    m = monthCount % 12,
    y = Math.floor(monthCount / 12),
    result = [];

  y && result.push(y + " " + getPlural(y, years));
  m && result.push(m + " " + getPlural(m, months));
  return result.join(" and ");
}

const ProfileCard = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    axios
      .post("https://api.meetworks.in/users/get_unique_jobseeker_profile", {
        jobseeker_id: "614b410c2c4b197356a37f18",
      })
      .then(function (response) {
        setProfileData(response.data[0]);
        console.log(response.data[0]);
      });
  }, []);

  /* useEffect(() => {
    console.log(profileData)
  },[profileData])
 */
  return (
    <>
      {profileData && (
        <>
        <Grid
          container
          style={{
            width: "800px",
            marginTop: "30px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px"
          }}
          spacing={2}
        >
          <Grid item xs={4} style={{padding:"0px"}}>
            <img src={profileData.user_image_url} width="100%" height="100%" />
          </Grid>
          <Grid item xs={8} style={{height:'400px', overflowY:'scroll'}}>
            <Grid container>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
              >
                <Grid item>{profileData.jobseeker_name}</Grid>
                <Grid item>
                  <div style={{ verticleAlign: "middle", display: "flex" }}>
                    <LocationOnIcon
                      fontSize="small"
                      style={{ color: "#5BC2A8" }}
                    />
                    {profileData.area}, {profileData.city}
                  </div>
                </Grid>
              </Stack>
            </Grid>
            <Grid container style={{ marginTop: "20px" }}>
              <Stack direction="row" spacing={2}>
                <Grid item>
                  <div style={{ verticleAlign: "middle", display: "flex", color:"#5BC2A8", fontWeight:"bold"}}>
                    <WorkIcon fontSize="small" />
                    &nbsp;&nbsp;EXPERIENCE
                  </div>
                </Grid>
                <Grid item>
                  <Chip
                    style={{
                      backgroundColor: "#5BC2A8",
                      color: "white",
                      borderRadius: "7px",
                    }}
                    size="small"
                    variant="default"
                    label={getWords(profileData.total_months_exp)}
                  />
                </Grid>
              </Stack>
            </Grid>
            {profileData.user_experiences.map((exp) => (
              <>
                <Grid container style={{ marginTop: "20px" }}>
                  <Grid item xs={4} style={{textAlign:"left"}}>
                    <img src={exp.company_logo} height="50px" />
                  </Grid>
                  <Grid item xs={8} style={{ textAlign: "left" }}>
                    <Typography variant="body1">{exp.user_post}</Typography>
                    <Typography variant="body2">{exp.company_name}</Typography>
                    <Typography variant="caption">
                      {exp.company_starting_date
                        .split("-")
                        .splice(1, 2)
                        .join(" ")}
                       &nbsp; - &nbsp;
                      {exp.company_ending_date != "Present"
                        ? exp.company_ending_date
                            .split("-")
                            .splice(1, 2)
                            .join(" ")
                        : "Present"}
                    </Typography>
                    <Typography variant="body2">
                      {exp.role_discription}
                    </Typography>
                  </Grid>
                </Grid>
              </>
            ))}
            <Grid container style={{ marginTop: "20px" }}>
              <Stack direction="row" spacing={2}>
                <Grid item>
                  <div style={{ verticleAlign: "middle", display: "flex", color:"#5BC2A8", fontWeight:"bold" }}>
                    <SchoolIcon fontSize="small" style={{ color: "#5BC2A8" }} />
                    &nbsp;&nbsp;EDUCATION
                  </div>
                </Grid>
              </Stack>
            </Grid>

            {profileData.user_qualifications.map((qualification) => (
              <>
                <Grid container style={{ marginTop: "20px",marginBottom:"50px" }}>
                  <Typography variant="body1">
                    {qualification.course_name}
                    {qualification.specialization_name
                      ? ` - ${qualification.specialization_name}`
                      : ""}
                  </Typography>
                  <Typography variant="body2">
                    {qualification.user_college}
                    {qualification.user_passing_year
                      ? ` - ${qualification.user_passing_year}`
                      : ""}
                  </Typography>
                </Grid>
              </>
            ))}
          </Grid>
        </Grid>
        <ShareButton />
        </>
      )}
    </>
  );
};

export default ProfileCard;
