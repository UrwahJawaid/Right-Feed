import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import './CardRow.css'



function CardRow({ img, alt, topL }) {
    return (
        <div className="body">


            <div className="card">

                <Card sx={{ maxWidth: 345 }} style={{ border: "none", boxShadow: "none" }}>


                    <CardMedia className="cardMedia"
                        component="img"
                        image={img}
                        alt={alt}

                    />

                    <CardContent style={{ backgroundColor: 'powderblue' }} className='cardContent' >

                        <Typography className='typo' gutterBottom component="div" style={{ fontSize: '20px' }}>
                            {topL}
                        </Typography>



                    </CardContent>

                </Card>

            </div>



        </div >



    )
}

export default CardRow


