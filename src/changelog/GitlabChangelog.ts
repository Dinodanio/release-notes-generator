import {IChangelog} from "../types/IChangelog";
import {customerBugMatcher, functionalMatcher, internalBugMatcher, nonFunctionalMatcher} from "../core/Parser";

export class GitlabChangelog implements IChangelog {
    readonly date: Date;
    readonly id: number;
    readonly name: string;
    readonly internalBugNotes: string[];
    readonly customerBugNotes: string[];
    readonly functionalNotes: string[];
    readonly nonFunctionalNotes: string[];

    private constructor(body: any) {
        const description: string = body.object_attributes.description;
        this.date = new Date(body.object_attributes.created_at);
        this.id = body.object_attributes.id;
        this.name = body.object_attributes.title;
        this.nonFunctionalNotes = nonFunctionalMatcher(description);
        this.functionalNotes = functionalMatcher(description);
        this.customerBugNotes = customerBugMatcher(description);
        this.internalBugNotes= internalBugMatcher(description);
    }

    public static build(body: any): IChangelog {
        // ToDo: Changelog present?
        return new GitlabChangelog(body);
    }
}