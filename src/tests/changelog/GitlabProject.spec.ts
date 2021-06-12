import {GitlabChangelog} from '../../changelog/GitlabChangelog';
import * as mock from '../resources/gitlab-merge-request.json';
import {GitlabProject} from "../../changelog/GitlabProject";

describe('Gitlab changelog builder', () => {
   it('should build a gitlab changelog instance', () => {
      expect(GitlabProject.build(mock, [GitlabChangelog.build(mock)])).not.toBeNull();
   });
});