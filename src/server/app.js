import 'babel-polyfill';
import express from 'express';
import settings from 'settings';

import api from './api/index.js';


// Connect to database
const app = express();


app.use(express.static('public'));
//API routes (empty now) app.use('/api', api);
app.get('*', (req, res) => {
    res.sendFile(`${settings.APP_ROOT}/public/index.html`);
});


app.listen(settings.APP_PORT, () => {
    console.log(`

        App is listening on port ${settings.APP_PORT}...

        `);
});
