import {IProject} from "../types/IProject";
import {db} from "../index";

export async function dbGet(projectId: number): Promise<IProject> {
    return new Promise(() => {
    });
}

export async function dbPost(project: IProject): Promise<boolean> {
    db.find({id: project.id}, (err: any, doc: any) => {
        if (doc.length === 0) {
            db.insert(project);
        } else {
            db.update({id: project}, {$push: {changelogs: project.changelogs}});
        }
    });
    return true;
}