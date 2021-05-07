/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
// http://vtiot-cloudapp.nelkinda.com/api/1.0/templates
import React from "react";
import axios from "axios";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      sensorReading: [],
      templateName: "",
      // isDialogOpen: false,
      openDeleteDialog: false,
      reload: false
    };
  }

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users/";
    const response = await axios.get(url);
    console.log(response.data);

    this.setState({ sensorReading: response.data, loading: false });
  }

  render() {
    const row = [];
    this.state.sensorReading.map((it) => {
      row.push({
        id: it.id,
        name: it.name
      });
    });

    return (
      <div>
        <div>
          <Typography variant="h4" noWrap component="div">
            Summary Dashboard
          </Typography>
        </div>

        <div>
          <a
            href="/dash_summary/summaryDash.js"
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="h6"
              style={{ paddingTop: "2%", paddingBottom: "3%" }}
            >
              Equipment Name
            </Typography>
          </a>
        </div>
        <div
          style={{
            display: "flex",
            //paddingRight: "5%",
            //border: "5px solid white",
            flexWrap: "wrap",
            paddingLeft: "5%"
          }}
        >
          {this.state.sensorReading.map((reading) => (
            <div key={row.id}>
              <Grid
                container
                className={useStyles.root}
                spacing={3}
                item
                xs={12}
              >
                <Grid item xs={12}>
                  <Grid container justify="center" spacing={5}>
                    {[0].map((value) => (
                      <Grid key={value} item>
                        <Paper
                          className={useStyles.paper}
                          style={{
                            backgroundColor: "#43a047",
                            height: 140,
                            width: 170,
                            boxShadow: "0px 10px 20px 1px",
                            border: "1px solid white",
                            margin: "8px"
                          }}
                        >
                          <Typography className={useStyles.text} noWrap>
                            <Box
                              fontWeight="fontWeightBold "
                              className={useStyles.text}
                              style={{
                                color: "white",
                                fontWeight: "fontWeightBold"
                              }}
                            >
                              <h3>{reading.name}</h3>
                              <h3>{reading.id}</h3>
                            </Box>
                          </Typography>
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </div>
          ))}
        </div>

        {/* <div style={{display:"flex"}} >
          {this.state.sensorReading.map((reading) => (
          
            <div key={row.id} >
             

        <Grid container style={{"flexGrow": 2, paddingLeft:"2%"}} spacing={5} >
        <Grid item xs={12}>
        <Grid container justify="center"  >
           <div style={{paddingLeft:"12%"}}>
                  <Paper className={useStyles.paper} style={{ backgroundColor: '#43a047' }}>
                    <Typography className={useStyles.text} noWrap>
                      <Box fontWeight="fontWeightBold">
                      <h3>{reading.name}</h3>
                      <h3>{reading.id}</h3>
                      </Box>

                    </Typography>

                  </Paper>
              </div>  
          </Grid>
         
        </Grid>
        </Grid>
              
            </div>

          ))}

        </div> */}
      </div>
    );
  }
}
export default App;
