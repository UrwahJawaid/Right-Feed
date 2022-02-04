import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './QuizListCard.css'

function QuizListCard({ title, quizDescription }) {
    return (
        <div className='quizzesCards'>

            <Card className='quizCard' sx={{ maxWidth: 945 }}>
                <CardActionArea>

                    <CardContent className='quizCardContent'>

                        <Typography gutterBottom variant="h6" component="div" className='quizCardTitle'>
                            {title}
                        </Typography>


                        <Typography variant="body2" className='quizCardDescription'>
                            {quizDescription}
                        </Typography>




                    </CardContent>
                </CardActionArea>
                <CardActions className='quizCardbtn'>
                    <Button size="small" color="primary" >
                        Yes
                    </Button>


                    <Button size="small" color="primary" >
                        No
                    </Button>


                </CardActions>
            </Card>

        </div>
    )
}

export default QuizListCard
