import React from "react";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";

const ShareButton = () => {
  return(
      <Button
        startIcon={<ShareIcon style={{color:"#5BC2A8"}}/>}
        variant="contained"
        size="large"
        style={{color:"#5BC2A8", backgroundColor:"white", border:"1px solid #5BC2A8", zIndex:"10", position:"relative", bottom:"22px"}}
      >
        Share
      </Button>
  );
};

export default ShareButton;
