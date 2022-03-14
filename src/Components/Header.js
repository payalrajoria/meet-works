import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import meetLogo from "../Meetlogo.png";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ExploreIcon from "@mui/icons-material/Explore";
import PeopleIcon from "@mui/icons-material/People";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  borderRadius: 0,
  boxShadow: 0,
  borderBottom: "1px",
}));

const Header = () => {
  const [value, setValue] = React.useState(0);
  const borderCss = {color: "#5BC2A8" , borderBottom:"1px solid"};

  return (
    <Box
      sx={{
        flexGrow: 1,
        boxShadow:
          "rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px",
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs>
          <Item>
            <img src={meetLogo} alt="logo" height={50} style={{}} />
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction
                label="Discovery"
                icon={<ExploreIcon />}
                style={value == 0 ? borderCss : {}}
              />
              <BottomNavigationAction
                label="Invited"
                icon={<PeopleIcon />}
                style={value == 1 ? borderCss : {}}
              />
              <BottomNavigationAction
                label="Support"
                icon={<SupportAgentIcon />}
                style={value == 2 ? borderCss : {}}
              />
            </BottomNavigation>
          </Item>
        </Grid>
        <Grid item xs>
          <Item style={{ textAlign: "right" }}>
            <Stack direction="row" spacing={2} sx={{float:"right"}}>
              <Button variant="outlined" style={{color:"#5BC2A8", backgroundColor:"white"}}>
                Post Job
              </Button>
              <Button variant="contained" style={{color:"white", backgroundColor:"#5BC2A8"}}>
                Sign In
              </Button>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
