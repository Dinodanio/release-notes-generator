import * as mock from '../resources/gitlab-merge-request.json';
import {customerBugMatcher, functionalMatcher, internalBugMatcher, nonFunctionalMatcher} from "../../core/Parser";

describe('Parser', () => {
    it('should parse functional notes', () => {
        expect(functionalMatcher(mock.object_attributes.description)).toContain('Changed color of the Batmobil');
        expect(functionalMatcher(mock.object_attributes.description).length).toBe(1);
    });
    it('should parse non functional notes', () => {
        expect(nonFunctionalMatcher(mock.object_attributes.description)).toContain('Changed the breaks of the Batmobil');
        expect(nonFunctionalMatcher(mock.object_attributes.description)).toContain('Changed the breaks of the Batmobil 2');
        expect(nonFunctionalMatcher(mock.object_attributes.description)).toContain('Changed the breaks of the Batmobil 3');
        expect(nonFunctionalMatcher(mock.object_attributes.description)).toContain('Changed the breaks of the Batmobil 4');
        expect(nonFunctionalMatcher(mock.object_attributes.description).length).toBe(4);
    });
    it('should parse customer bug notes', () => {
        expect(customerBugMatcher(mock.object_attributes.description)).toContain('...');
        expect(customerBugMatcher(mock.object_attributes.description).length).toBe(1);
    });
    it('should parse internal bug notes', () => {
        expect(internalBugMatcher(mock.object_attributes.description).length).toBe(0);
    });
});