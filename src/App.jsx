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

const imageUrls = [
  {
    imageUrl: "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1685999294/20230121_141748_eqsaud.jpg",
    heading: "An Overjoyed Diana",
    description: "2nd Place in individual Kata Ladies Ü30 🥈 and 1st place in Team-Kata-Mixed Ü30 🥇",
  },
  {
    imageUrl: "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046452/20220630_210057_xoeblf.jpg",
    heading: "Diana and Yoel Benaroch",
    description: "My lifelong trainer from Israel 🥋🥊"
  },
  {
    imageUrl: "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046453/20230422_134910_n5n6bp.jpg",
    heading: "Karate Workshop in Hüttenweg, Berlin",
    description: "A Dan preparation workshop which takes place once a month, led by F.Asner, B.Hartlieb & G. Dirks 🥋"
  },
  {
imageUrl: "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046451/IMG-20221203-WA0019_fgk74e.jpg",
heading: "Four very proud ladies Kata-Masterclass Ü30",
description: "Sandra - 1st 🥇, Diana - 2nd 🥈, Tetiana & Anika - 3rd 🥉"
  },
  
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046451/20230117_205013_snqpt2.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046452/20230502_192748_ycpunv.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046448/IMG-20220903-WA0015_g9gfhh.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046445/IMG-20220903-WA0011_yxnltp.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046442/20230314_191725_1_vn2www.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046442/20230421_100802_uodquv.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046441/FB_IMG_1670085265368_dpmlvj.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046438/FB_IMG_1670084685076_mbr5va.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046437/IMG-20220528-WA0031_kqqn9t.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046433/255192578_10158945255093863_5528351753006473325_n_dhw8tr.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046425/20230117_191718_hlxrb1.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046422/20220618_155901_c5gtll.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046421/20220625_161350_k6u33i.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046417/20220527_095206_ect02t.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046408/20220402_170335_001_yvd1cg.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046402/20220403_095610_e15slr.jpg",
  // "https://res.cloudinary.com/iujg6ghfdf/image/upload/v1686046408/20220524_191920_oherma.jpg"
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
                   <a href="https://dianadeekalstein.com" target="_blank" style={{textDecoration: "none", color: "#FFFFFF"}} rel="noreferrer">Portfolio</a>
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
               <a href="https://www.linkedin.com/in/diana-kalstein/" target="_blank" style={{textDecoration: "none", backgroundColor: "#FFFFFF", color: "#5CB820", borderColor: "#5CB820",}} rel="noreferrer">Linkedin</a>

                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          <Grid container spacing={4} style={{ marginTop: "30px" }}>
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
                    <Typography variant="h5" style={{ textAlign: "center"}} gutterBottom>
                      {imageData.heading}
                    </Typography>
                    <Typography style={{ textAlign: "center"}}>{imageData.description}</Typography>
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
  <Typography variant="h6" gutterBottom style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
    Coded by Diana (Dee) Kalstein &copy;
    <img src="https://res.cloudinary.com/iujg6ghfdf/image/upload/v1685372646/movie-project/tmykig0rrsg1fyl4jznc.png" alt="diana" width="50" style={{ marginLeft: '5px' }} />
  </Typography>
</footer>

    </>
  );
}

export default App;
