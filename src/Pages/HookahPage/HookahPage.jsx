import React from 'react'
import { makeStyles } from '@material-ui/core/styles' 
import { Grid } from '@material-ui/core'
import HookahCard from './component/HookahCard'

const useStyles = makeStyles((theme) => ({
  container: {
    overflow: 'hidden',
    padding: "10%",
  },
}));

const hookahs = [
    {id: 1, name: "Dark Side", value: "0", taste: "Breaking Red", descriptions: "Pleasant fruity taste, there is a slight sourness. The taste of mint is distinctly heard.", price: '50 - 250uah', image: 'https://hookahfox.com/wa-data/public/shop/products/95/07/795/images/2257/2257.750.jpg' },
    {id: 2, name: "Sherbet", value: "0", taste: "Hookah huy", descriptions: "Pleasant fruity taste, there is a slight sourness. The taste of mint is distinctly heard.", price: '20uah', image: 'https://hookahfox.com/wa-data/public/shop/products/95/07/795/images/2257/2257.750.jpg' },
    {id: 2, name: "Sherbet", value: "0", taste: "Hookah huy", descriptions: "Pleasant fruity taste, there is a slight sourness. The taste of mint is distinctly heard.", price: '20uah', image: 'https://hookahfox.com/wa-data/public/shop/products/95/07/795/images/2257/2257.750.jpg' },
    {id: 2, name: "Sherbet", value: "0", taste: "Hookah huy", descriptions: "Pleasant fruity taste, there is a slight sourness. The taste of mint is distinctly heard.", price: '20uah', image: 'https://hookahfox.com/wa-data/public/shop/products/95/07/795/images/2257/2257.750.jpg' },
]


const HookahPage = () => {
  const classes = useStyles();

  return (
    <main>
      <div className={classes.container}>
        <Grid
          container
          justify="center"
          spacing={4}
        >
          {hookahs.map((hookah) => (
              <Grid item key={hookah.id} xs={12} sm={6} md={4} lg={3}>
                  <HookahCard hookah={hookah}/>
              </Grid>
          ))}
        </Grid>
      </div>
    </main>
  )
};

export default HookahPage;
