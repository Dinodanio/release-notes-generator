import {IProject} from "../types/IProject";
import {IChangelog} from "../types/IChangelog";

export class GitlabProject implements IProject {
    readonly changelogs: IChangelog[];
    readonly id: number;
    readonly lastChanged: Date;
    readonly name: string;


    private constructor(body: any, changelogs: IChangelog[]) {
        this.id = body.project.id;
        this.lastChanged = new Date(body.object_attributes.created_at);
        this.name = body.project.name;
        this.changelogs = changelogs;
    }

    public static build(body: any, changelogs: IChangelog[]): GitlabProject {
        return new GitlabProject(body, changelogs);
    }

}