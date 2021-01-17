import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { checkUser } from '../../actions';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(checkUser({ email, password }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
            <h2> Sign In</h2>
          </Grid>
          <TextField
            label='Email'
            placeholder="Enter Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label='Password'
            placeholder="Enter Password"
            type='password'
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary" style={btnstyle} fullWidth variant="contained">Sign In</Button>
        </Paper>
      </Grid>
    </form>
  )
}

export default Login;