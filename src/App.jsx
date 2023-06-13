import React from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import deeMedalImage from "./images/dee-medal.jpg";
import dianaAndYoel from "./images/diana-and-yoel.jpg";
import karateWorkshopEveryone from "./images/karate-workshop-everyone.jpg";
import theGirlsTeam from "./images/the-girls-team.jpg";
import butFirstClean from "./images/but-first-clean.jpg";
import dianaGinaPiotr from "./images/diana-gina-piotr.jpg";
import wholeSCB from "./images/whole-scb.jpg";
import dianaAndPiotr from "./images/diana-piotr.jpg";
import myHappyPlace from "./images/my-happy-place.jpg";
import dianaAndNaka from "./images/diana-and-naka.jpg";
import dianaAndIlija from "./images/diana-ilija-jorga.jpg";
import dianaStateChampionship from "./images/diana-state-championship.jpg";
import dianaKumite from "./images/diana-kumite.jpg";
import scbTraining from "./images/scb-training.jpg";
import shotokanSymbol from "./images/shotokan-symbol.png";
import deeCartoon from "./images/dee-cartoon.png";
import teamBerlinChampionship from "./images/team-berlin-championship.jpg";
import dianaTekkiSandan from "./images/diana-tekki-sandan.jpg";
import dianaAndTetiana from "./images/diana-tetiana.jpg";
import dianaGinaTetiana from "./images/diana-gina-tetiana.jpg";
import martinDianaNikos from "./images/martin-diana-nikos.jpg";
import unsu from "./images/unsu.jpg";
import nikosDianaTetiana from "./images/nikos-diana-tetiana.jpg";
import teamTraining from "./images/team-training.jpg";


const imageUrls = [
  {
    imageUrl: deeMedalImage,
    heading: "An Overjoyed Diana",
    description:
      "2nd Place in individual Kata Ladies Ü30 🥈 and 1st place in Team-Kata-Mixed Ü30 🥇",
  },
  {
    imageUrl: dianaAndYoel,
    heading: "Diana and Yoel Benaroch",
    description: "My lifelong trainer from Israel 🥋🥊",
  },
  {
    imageUrl: karateWorkshopEveryone,
    heading: "Karate Workshop in Hüttenweg, Berlin",
    description:
      "A Dan preparation workshop which takes place once a month, led by F.Asner, B.Hartlieb & G. Dirks 🥋 💪",
  },
  {
    imageUrl: theGirlsTeam,
    heading: "Four very proud ladies Kata-Masterclass Ü30",
    description: "Sandra - 1st 🥇, Diana - 2nd 🥈, Tetiana & Anika - 3rd 🥉",
  },
  {
    imageUrl: butFirstClean,
    heading: "Diana and Mop",
    description: "Gotta keep the Dojo tidy 🧹🫧",
  },
  {
    imageUrl: dianaGinaPiotr,
    heading: "Diana, Gina & Piotr",
    description:
      "Our coach, Piotr (6th Dan), has been training us for our first tournament 🥷",
  },
  {
    imageUrl: wholeSCB,
    heading: "The natural Shotokan Club Berlin team",
    description: "The way more experienced ones. 💪 And us...😆",
  },
  {
    imageUrl: dianaAndPiotr,
    heading: "My mentor & myself at my first tournament (2022) 🥷🥉",
    description: "I'm truly thankful he exists",
  },
  {
    imageUrl: myHappyPlace,
    heading: "Alive!",
    description:
      "Me before every training (in particular Tue's Kata-Training) 💪💃",
  },
  {
    imageUrl: dianaAndNaka,
    heading: "Sensei Tatsuya Naka & myself at the Kata-Special Seminar (2022)",
    description:
      "This genius guy has taught us so many techniques from his lifelong experience. 📚",
  },
  {
    imageUrl: dianaAndIlija,
    heading: "Sensei Ilija Jorga & myself at the Fudokan Seminar (2022)",
    description:
      "We learned many Fudokan techniques led by the brothers - Vladimir & Ilija Jorga (I remember it was also the warmest, sunniest day in June) 📘☀️",
  },
  {
    imageUrl: dianaStateChampionship,
    heading: "Piotr, Diana, Caroline & Jarow (Erfurt, 2022)",
    description:
      "So lucky to have participated in Germany's Karate Championship for the first time. 🥷",
  },
  {
    imageUrl: dianaKumite,
    heading: "Diana & teeth protector",
    description: "One day I'll get better at Kumite...😅",
  },
  {
    imageUrl: scbTraining,
    heading: "Best Team Ever! 🥋",
    description: "My teammates & myself at Dieter's training",
  },
  {
    imageUrl: teamBerlinChampionship,
    heading: "The big family of SCB 🥋",
    description: "Our very excited team at the Berlin Championship of 2023 🥷",
  },
  {
    imageUrl: dianaTekkiSandan,
    heading: "Diana in Tekki-Sandan",
    description: "One of my favourite Kata-routines 🥋",
  },
  {
    imageUrl: dianaAndTetiana,
    heading: "Diana & Tetiana",
    description: "Trying to be goofy in a painful way. 🤪",
  },
  {
    imageUrl: dianaGinaTetiana,
    heading: "Gina, Myself & Tetiana at the Shotokan-Cup (2022)",
    description:
      "After training so hard, we managed to pull off the Bassai-Sho Team-Kata. 🏆🥇",
  },
  {
    imageUrl: martinDianaNikos,
    heading: "Martin (1st Dan), Myself & Nikos (2nd Dan) - Dan Exam (2022)",
    description:
      "It's been a mentally draining experience, but nonetheless fun, and at the end we achieved our Dans! 💪",
  },
  {
    imageUrl: unsu,
    heading: "Kata-Special Seminar (Magdeburg, 2022)",
    description: "Learning Unsu-Kata to its core with Sensei Naka. 🦘",
  },
  {
    imageUrl: nikosDianaTetiana,
    heading: "Nikos, Myself & Tetiana (Berlin's Championship, 2023)",
    description:
      "Podium slay after gaining our 2nd place at the Team-Kata-Mixed Ü30 🥈",
  },
  {
    imageUrl: teamTraining,
    heading: "Team Training. 💪",
    description: "A bunch of proud SCB members on the Judo mattresses. 🟨⬛",
  }
];

function App() {
  const handleViewButtonClick = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundColor: "#5CB820" }}>
        <Toolbar>
          <PhotoCamera style={{ marginRight: "12px" }} />
          <Typography variant="h6">Karate Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container
            maxWidth="sm"
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={shotokanSymbol}
              alt="shotokan-symbol"
              width="100%"
              align="center"
            />
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              style={{ marginTop: "30px" }}
            >
              Karate Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
              style={{ marginTop: "20px" }}
            >
              Hey everyone!
              <br />
              This is a photo album of my biggest passion. 💗
              <br />
              Have a sneak peek into my world!
            </Typography>
            <div style={{ marginTop: "30px" }}>
              <Grid container spacing={4} justifyContent="center">
                <Grid item>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#5CB820",
                      color: "#FFFFFF",
                      borderColor: "#FFFFFF",
                    }}
                  >
                    <a
                      href="https://dianadeekalstein.com"
                      target="_blank"
                      style={{ textDecoration: "none", color: "#FFFFFF" }}
                      rel="noreferrer"
                    >
                      Portfolio
                    </a>
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: "#5CB820",
                      borderColor: "#5CB820",
                    }}
                  >
                    <a
                      href="https://www.linkedin.com/in/diana-kalstein/"
                      target="_blank"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#FFFFFF",
                        color: "#5CB820",
                        borderColor: "#5CB820",
                      }}
                      rel="noreferrer"
                    >
                      Linkedin
                    </a>
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#5CB820",
                      color: "#FFFFFF",
                      borderColor: "#5CB820",
                    }}
                  >
                    <a
                      href="https://shotokan-club-berlin.de/"
                      target="_blank"
                      style={{
                        textDecoration: "none",
                        color: "#FFFFFF",
                        backgroundColor: "#5CB820",
                      }}
                      rel="noreferrer"
                    >
                      Join SCB 💪
                    </a>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          <Grid container spacing={4} style={{ marginTop: "5px" }}>
            {imageUrls.map((imageData, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  style={{
                    maxHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <CardMedia
                    image={imageData.imageUrl}
                    title={`Photo ${index + 1}`}
                    style={{ paddingTop: "80%", marginTop: "10%" }}
                  />
                  <CardContent
                    style={{
                      flexGrow: 1,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      style={{ textAlign: "center" }}
                      gutterBottom
                    >
                      {imageData.heading}
                    </Typography>
                    <Typography style={{ textAlign: "center" }}>
                      {imageData.description}
                    </Typography>
                  </CardContent>
                  <CardActions style={{ justifyContent: "center" }}>
                    <Button
                      size="small"
                      style={{ color: "#FFFFFF", backgroundColor: "#000000" }}
                      onClick={() => handleViewButtonClick(imageData.imageUrl)}
                    >
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer
        style={{
          color: "#FFFFFF",
          backgroundColor: "#5CB820",
          padding: "20px 0",
          margin: "30px 16px",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          Coded by Diana (Dee) Kalstein &copy;
          <img
            src={deeCartoon}
            alt="diana"
            width="50"
            style={{ marginLeft: "5px" }}
          />
          <div>
          using
          <span
            style={{
              backgroundColor: "#000000",
              color: "#44AECB",
              borderRadius: "4px",
              padding: "2px 6px",
              margin: "0 4px",
            }}
          >
            ReactJS
          </span>
          &
          <span
            style={{
              backgroundColor: "#18275D",
              color: "#1163E9",
              borderRadius: "4px",
              padding: "2px 6px",
              margin: "0 4px",
            }}
          >
            Material-UI
          </span>
          </div>
        </Typography>
      </footer>
    </>
  );
}

export default App;
