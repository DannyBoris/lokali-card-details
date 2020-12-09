import React, { useState } from "react";
import Male from "./use.jfif";
import Rating from "@material-ui/lab/Rating";

import {
  Avatar,
  Button,
  Container,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Lightbox } from "react-modal-image";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ReactComponent as PostLogo } from "./Icon.svg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import test1 from "./img/test1.jpg";
import test2 from "./img/test2.jfif";
import test3 from "./img/test3.jfif";
import Acc from "./Acc";
const color = "#F8D801";
const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
    background: "rgba(144,144,144,.1)",

    "& > div": {
      boxSizing: "border-box",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "60vh",
    "& p": {
      fontFamily: "Nunito",
    },
  },
  userinfo: {
    display: "flex",
    marginBottom: "20px",

    "& > p": {
      fontFamily: "Nunito",
      alignSelf: "flex-end",
      fontSize: "18px",
    },
  },
  title: {
    fontSize: "24px",
    fontWeight: 800,
    textAlign: "left",
  },
  avatar: {
    marginRight: "6px",
    width: "50px",
    height: "50px",
  },
  desc: {
    textAlign: "left",
    fontSize: "18px",
    borderBottom: "rgba(144,144,144,.2) 1px solid",
    paddingBottom: "11px",
  },
  categoryContainer: {
    display: "flex",
    justifyContent: "space-around",
    "& > label": {
      padding: "2px",
      fontSize: "13px",
      fontWeight: 600,
      color: "rgba(13,13,13,.4)",
      border: "1px solid",
      borderRadius: "12px",
      width: "20%",
    },
  },
  infoSection: {
    margin: "0 -10px",
    borderRadius: "8px",
    padding: "8px",
    display: "flex",
    flexWrap: "wrap",
    "& > div": {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      "& > p": {
        fontSize: "16px",
        fontWeight: 900,
        fontFamily: "Nunito",
      },
      "& > span": {
        fontSize: "13px",
        fontWeight: 600,
        fontFamily: "Nunito",
      },
      "& > p:first-child": {
        color: color,
      },
    },
  },
  btn: {
    background: "-webkit-linear-gradient(right, #F8D901, #F8C901)",
    background: "-moz-linear-gradient(right, #F8D901, #F8C901)",
    background: "linear-gradient(to left, #F8D901, #F8C901)",
    borderRadius: "16px",
    fontWeight: "800",
    fontFamily: "Nunito",
    width: "40%",
    fontSize: "13px",
    padding: " 5px 8px",
    border: "none",
    color: "white",
  },
  cardNavbar: {
    display: "flex",
    padding: " 10px 15px",
    justifyContent: "space-between",
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    height: "30vh",
    justifyContent: "center",
    "& > img": {
      objectFit: "cover",
      width: "30%",
      margin: "5px",
      borderRadius: "10px",
      height: "100px",
    },
  },
}));
const CardDetails = () => {
  function handleImageClick(e) {
    setImageUrl(e.target.src);
    console.log();
  }
  const [imageUrl, setImageUrl] = useState(null);
  function handleImageClick(e) {
    setImageUrl(e.target.src);
    console.log();
  }
  const [collapse, setCollapse] = useState(false);
  const items = ["Home", "Food", "Other"];
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {imageUrl && (
        <Lightbox
          large={imageUrl}
          hideDownload
          hideZoom
          imageBackgroundColor="red"
          onClose={() => setImageUrl(null)}
        />
      )}
      <Container className={classes.cardNavbar}>
        <ArrowBackIosIcon />
        <div>
          <MoreVertIcon />
        </div>
      </Container>
      <Container className={classes.root}>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Container disableGutters className={classes.userinfo}>
              <Avatar className={classes.avatar} src={Male} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignSelf: "flex-end",
                }}
              >
                <Typography>Daniel Borisov</Typography>
                <Rating
                  icon={<FavoriteIcon fontSize="inherit" />}
                  size="small"
                  defaultValue={4}
                />
              </div>
            </Container>
            <Button className={classes.btn}>Give it</Button>
          </div>

          <Container disableGutters>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "-15px",
                marginBottom: "10px",
              }}
            >
              <PostLogo style={{ marginTop: "-5px", marginRight: "-8px" }} />
              <Typography className={classes.title}>
                Fund raising for icecream
              </Typography>
            </div>
            <Typography className={classes.desc}>
              Please provide food Please provide food Please provide food Please
              provide food Please provide food Please provide food
            </Typography>
          </Container>
        </div>
        {/* <Container className={classes.categoryContainer}>
          {items.map((item) => (
            <label>{item}</label>
          ))}
        </Container> */}
        <div className={classes.infoSection}>
          <Container style={{ flex: "50%" }} disableGutters>
            <Typography>WHERE</Typography>
            <span>Sderot, HaShaked Street 18</span>
            <span
              style={{
                color: color,
                textAlign: "left",
                display: "block",
                width: "95%",
                fontWeight: 800,
              }}
            >
              450M from you
            </span>
          </Container>

          <Container style={{ flex: "50%" }} disableGutters>
            <Typography>WHEN</Typography>
            <span>5 June, 2020</span>
          </Container>
        </div>
      </Container>
      <Container disableGutters>
        {collapse ? (
          <Acc />
        ) : (
          <div className={classes.imageContainer}>
            <img onClick={handleImageClick} src={test1} />
            <img onClick={handleImageClick} src={test3} />
            <img onClick={handleImageClick} src={test2} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default CardDetails;
