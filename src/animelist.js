import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './App.css';

export default function animelist({ anime }) {
    
    // const shortDescription = anime.synopsis.substring(0,30);

    return (
        <div style={{marginTop: 50 }} >
            {anime.map(a => (
                <Card key={a.title} style={{position: 'relative', display:'inline-block', width:200, height: 300, marginLeft: 25, marginRight: 25, marginBottom:50, borderRadius: 25 }}>
                    <div>
                        <div className="layer"> </div>
                        <CardMedia style={{ height:300, width: 200,marginTop: 0}}
                            image={a.image_url}
                            title="Live from space album cover"
                        />
                        <CardContent style={{ textAlign:"center", position: 'absolute', top: 50, color: 'white'}}>
                        <Typography component="h5" variant="h5">
                            {a.title}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            {/* {a.synopsis.substring(0,100)}...  */}
                        </Typography>
                        </CardContent>
                    </div>
                </Card>
            ))}
        </div>
    )
}
