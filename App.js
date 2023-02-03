import "./App.css";

/*--------- MUI ---------*/
import * as React from "react";

/*--------- Typography MUI ---------*/
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

/*--------- Colors MUI ---------*/
import { palette } from "@mui/system";

/*--------- Link MUI ---------*/
import Link from "@mui/material/Link";

/*--------- Navbar MUI ---------*/
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

/*--------- Layout MUI ---------*/
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

/*--------- Button MUI ---------*/
import Button from "@mui/material/Button";

/*--------- Switch MUI ---------*/
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

/*--------- Card MUI ---------*/
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

/*--------- Accordion MUI ---------*/
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
/*--------- Accordion Icons MUI ---------*/
import RemoveRedEyeTwoToneIcon from "@mui/icons-material/RemoveRedEyeTwoTone";
import CreateTwoToneIcon from "@mui/icons-material/CreateTwoTone";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";
import SavingsTwoToneIcon from "@mui/icons-material/SavingsTwoTone";
import AutoFixHighTwoToneIcon from "@mui/icons-material/AutoFixHighTwoTone";

/*--------- Input field MUI ---------*/
import TextField from "@mui/material/TextField";
import { AddBoxOutlined, AddBoxRounded } from "@mui/icons-material";
import { Avatar } from "@mui/material";

/*--------- Card bull MUI - not sure what this is for ---------*/

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

/*--------- Item MUI - not sure what this is for ---------*/

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

/*--------- HTML ---------*/

function App() {
  return (
    <div className="App">
      <AppBar position="fixed" color="primary">
        <Toolbar variant="regular">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h5" sx={{ flexGrow: 1 }} align="center">
            🦆's who code
          </Typography>

          <Button centerRipple color="inherit" href="#join">
            Apply
          </Button>
        </Toolbar>
      </AppBar>

      <Box maxWidth="false" sx={{ bgcolor: "primary.dark", py: 16 }}>
        <Container maxWidth="lg">
          <Stack spacing={{ xs: 4 }}>

            <div align="center">
              <img width="300px" src="https://i.postimg.cc/9QgKsww7/Designer.png" />
            </div>

            <Typography
              variant="h2"
              align="center"
              sx={{ color: "secondary.main" }}
            >
              React lessons w/Nico
            </Typography>

            <Stack
              spacing={{ xs: 1, sm: 2 }}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Link href="#" underline="hover" color="secondary">
                Learn React
              </Link>

              <Button variant="outlined" color="secondary">
                and do your homework!
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box maxWidth="false" sx={{ bgcolor: "secondary.main", py: 16 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h2">What you'll learn:</Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ minWidth: 200 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    How to use MUI
                  </Typography>

                  <Typography variant="h5">
                    M{bull}U{bull}I{bull}
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    library
                  </Typography>

                  <Typography variant="body2">
                    Multilingual User Interface
                    <br />
                    {'"a 🦆s cheat sheet"'}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    href="https://mui.com/material-ui/getting-started/overview/"
                    target="_blank"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ minWidth: 200 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    How to type in VSC
                  </Typography>

                  <Typography variant="h5">
                    V{bull}S{bull}C{bull}
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    text editor
                  </Typography>

                  <Typography variant="body2">
                    Visual Studio Code
                    <br />
                    {'"a 🦆s text sheet"'}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="small"
                    href="https://code.visualstudio.com/download"
                    target="_blank"
                  >
                    Download here
                  </Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ minWidth: 200 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    How to speak italian
                  </Typography>

                  <Typography variant="h5">
                    ai{bull}si{bull}gno{bull}ri
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    expression
                  </Typography>

                  <Typography variant="body2">
                    Sheer desperation
                    <br />
                    {'"a 🦆s fav swear word"'}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button disabled size="small">
                    No need to Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box maxWidth="false" sx={{ bgcolor: "primary.main", py: 16 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" sx={{ pb: 8 }}>
            Never-asked questions
          </Typography>

          <Stack spacing={{ xs: 0.5, sm: 0.5, md: 1 }}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<TipsAndUpdatesTwoToneIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">Is this for real?</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>
                  {" "}
                  Yes, you can actually learn how to code like Nico. Or at least
                  try.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<CreateTwoToneIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">How do I apply?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Fill out the form below and hope that it actually works!
                  <br /> Note: It was coded by a student. The likelyhood of the
                  button doing anything is slim.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<RemoveRedEyeTwoToneIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">
                  What are you looking for in your applicants?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>People that will do their homework.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<SavingsTwoToneIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">How much does this cost?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>A friday morning and a few headaches.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<AutoFixHighTwoToneIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h5">What tools will I need?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Ducky persistance and mighty will.</Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Container>
      </Box>

      <Box id="join" maxWidth="false" sx={{ py: 16 }} bgcolor="secondary.main">
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" sx={{ pb: 4 }}>
            Join the 🦆 waddle!
          </Typography>

          <Stack spacing={{ xs: 1, sm: 1, md: 2 }}>
            <TextField
              required
              id="standard-basic"
              label="Your main duck name"
              variant="standard"
            />
            <TextField
              id="standard-basic"
              label="Your family's duckly surname"
              variant="outlined"
            />
            <TextField
              required
              id="standard-basic"
              label="Your personal duckland email"
              variant="filled"
              placeholder="ducky@duckland.energy"
            />
            <FormControlLabel
              required
              control={<Switch color="primary" />}
              label="I confirm that I am a mighty duck."
            />
            <Button
              variant="contained"
              size="large"
              color="primary"
              fullWidth="false"
              endIcon={<AutoFixHighTwoToneIcon />}
            >
              Be part of the coding ducks club!
            </Button>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

export default App;
