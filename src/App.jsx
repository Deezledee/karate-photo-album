import React from "react";
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
import useStyles from "./styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" style={{ backgroundColor: "#5CB820" }}>
        <Toolbar>
          <PhotoCamera
            className={classes.icon}
            style={{ marginRight: "12px" }}
          />
          <Typography variant="h6">Karate Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
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
              Hey everyone, this is a photo album of my biggest passion, which
              is Karate! Have a sneak peek into my world!
            </Typography>
            <div className={classes.button} style={{ marginTop: "30px" }}>
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
                    See my photos
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
                    See my photos
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4} style={{ marginTop: "30px" }}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  className={classes.card}
                  style={{
                    maxHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://res.cloudinary.com/iujg6ghfdf/image/upload/v1685999294/20230121_141748_eqsaud.jpg"
                    title="dee"
                    style={{ paddingTop: "60%" }}
                  />
                  <CardContent
                    className={classes.content}
                    style={{ flexGrow: 1 }}
                  >
                    <Typography variant="h5" gutterBottom>
                      Heading
                    </Typography>
                    <Typography>
                      That's a photo of me from the Shotokan Cup
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      style={{ color: "#FFFFFF", backgroundColor: "#000000" }}
                    >
                      View
                    </Button>
                    <Button></Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer
        className={classes.footer}
        style={{
          color: "#FFFFFF",
          backgroundColor: "#5CB820",
          padding: "20px 0",
          margin: "30px 16px",
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          Coded by Diana (Dee) Kalstein &copy;
        </Typography>
      </footer>
    </>
  );
}

export default App;
