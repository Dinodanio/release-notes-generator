export interface IChangelog {
    id: number;
    date: Date;
    name: string;
    functionalNotes: string[];
    nonFunctionalNotes: string[];
    internalBugNotes: string[];
    customerBugNotes: string[];
}