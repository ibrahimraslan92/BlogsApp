import React from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
const FormNewPost = () => {
  return (
   
        
<Grid
  container
  direction="column"
  justifyContent="space-between"
  alignItems="center"
>

<input type="text" placeholder="title" className="input input-bordered input-lg w-full max-w" ></input>
   
<input type="text" placeholder="content" className="input input-bordered input-lg w-full max-w" ></input>
<Button size="large" variant="contained">Post</Button>
</Grid>

  )
}

export default FormNewPost