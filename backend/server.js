import express from 'express';

import blocRoute from './route/blocRoute.js';
import compteRoute from './route/compteRoute.js';
import etudiantRoute from './route/etudiantRoute.js';
import chambreRoute from './route/chambreRoute.js';
import locateurRoute from './route/locateurRoute.js';
import inscriptionRoute from './route/inscriptionRoute.js';
import path from 'path';



const app = express();
const PORT = 3000;

app.use(express.json());


app.use('/api/bloc', blocRoute);
app.use('/api/compte', compteRoute);
app.use('/api/etudiant', etudiantRoute);
app.use('/api/chambre', chambreRoute);
app.use('/api/locateur', locateurRoute);
app.use('/api/inscription', inscriptionRoute);

 const __dirname = path.resolve();
 


if (process.env.MODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend", "dist", "index.html"))
    })
} else {
    app.get('/', (req, res) => res.send('HELLO'));
}




app.listen(PORT, console.log('SERVER RUNNING'));
