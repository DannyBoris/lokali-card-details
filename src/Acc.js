import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core";
import test1 from "./img/test1.jpg";
import test2 from "./img/test2.jfif";
import test3 from "./img/test3.jfif";
import { Lightbox } from "react-modal-image";

const color = "#F8D801";

const useStyles = makeStyles((theme) => ({
  imageContainer: {
    display: "flex",
    flexDirection:'COLUMN',
    justifyContent: "flex-start",
    "& > img": {
      flexBasis: "1",
      scrollSnapAlign: "center",
      objectFit: "cover",
      margin: "5px",
      borderRadius: "6px",
      width: "100%",
    },
  },
  root: {
    width: "100%",
    
    margin: "20px 0",
    "& > .MuiPaper-root": {
      boxShadow: "none",
      borderRadius: "none",
    },
    "&  .MuiAccordionDetails-root": {
      padding: 0,
    },
    "&  .MuiAccordionSummary-root": {
      paddingLeft: "1rem",
      display: "flex",
      justifyContent: "center!important",
    },
    "& .MuiAccordionSummary-content": {
      flexGrow: 0,
    },

    "& >  hr": {
      height: "0px",
    },
  },
  heading: {
    color: color,
    fontWeight: 700,
    fontFamily: "Nunito",
    fontSize: "20px",
  },
  bottomSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    "& > div": {
      display: "flex",
      width: "90%",
      alignItems: "center",

      "& > p": {
        marginLeft: "14px",
        flex: 1,
        fontFamily: "Nunito",
        color: "rgba(100,100,100,.6)",

        textAlign: "left",
        fontWeight: 700,
      },
    },
  },
}));

export default function ValueContainer() {
  const classes = useStyles();
  function handleImageClick(e) {
    setImageUrl(e.target.src);
    console.log();
  }
  const [imageUrl, setImageUrl] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      {imageUrl && (
        <Lightbox
          large={imageUrl}
          hideDownload
          hideZoom
          imageBackgroundColor="red"
          onClose={() => setImageUrl(null)}
        />
      )}
      <Accordion
        onChange={(e) => {
            console.log(open)
          setOpen(!open);
          !open && console.log('fdsa')
            e.target.scrollIntoView({
              behavior: "smooth",
              inline: "end",
              black: "end",
            });
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon htmlColor={color} />}>
          <Typography className={classes.heading}>{"Show Photos"}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.bottomSection}>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              overflowY: "scroll",
            }}
          >
            <div className={classes.imageContainer}>
              <img onClick={handleImageClick} src={test1} />
              <img onClick={handleImageClick} src={test3} />
              <img onClick={handleImageClick} src={test2} />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
