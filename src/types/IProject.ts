import {IChangelog} from "./IChangelog";

export interface IProject {
    id: number;
    name: string;
    lastChanged: Date;
    changelogs: IChangelog[];
}