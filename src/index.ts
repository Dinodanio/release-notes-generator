import express from 'express';
import bodyParser from 'body-parser';
import {dbPost} from "./db/DbHandler";
import {error, log} from "./core/Logger";
import Datastore from 'nedb';
import {GitlabProject} from "./changelog/GitlabProject";
import {IChangelog} from "./types/IChangelog";
import {GitlabChangelog} from "./changelog/GitlabChangelog";
import {IProject} from "./types/IProject";

const app = express();
const PORT = 3000;

export const db = new Datastore({ filename: './database.db', autoload: true });
db.loadDatabase(error);

app.use(bodyParser.json());

app.post("/hook", (req, res) => {
    const body: any = req.body;
    const changelog: IChangelog = GitlabChangelog.build(body);
    const project: IProject = GitlabProject.build(body, [changelog]);
    dbPost(project).catch(error);
    res.status(200).end();
});

// app.get('/get-release-notes', (req, res) => {
//     console.log(req);
//     dbGet();
//     res.status(200).end(); // return json
// });
//
// app.get('/view-release-notes', (req, res) => {
//     console.log(req);
//     dbGet();
//     res.status(200).end(); // return html
// });



app.listen(PORT, () => log(`🚀 Server running on port ${PORT}`));





