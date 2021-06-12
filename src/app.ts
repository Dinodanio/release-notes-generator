import express from 'express';
import bodyParser from 'body-parser';
import {dbPost} from "./db/DbHandler";
import Datastore from 'nedb';
import {GitlabProject} from "./changelog/GitlabProject";
import {IChangelog} from "./types/IChangelog";
import {GitlabChangelog} from "./changelog/GitlabChangelog";
import {IProject} from "./types/IProject";
import {error} from "./core/Logger";

export const app = express();

export const db = new Datastore({ filename: './database.db', autoload: true });
db.loadDatabase(err => error);

app.use(bodyParser.json());

app.post("/gitlab/hook", (req, res) => {
    const body: any = req.body;
    const changelog: IChangelog = GitlabChangelog.build(body);
    const project: IProject = GitlabProject.build(body, [changelog]);
    dbPost(project).catch(error);
    res.status(200).end();
});