import {GitlabChangelog} from '../../changelog/GitlabChangelog';
import * as mock from '../ressources/gitlab-merge-request.json';

describe('Gitlab changelog builder', () => {
   it('should build a gitlab changelog instance', () => {
      expect(GitlabChangelog.build(mock)).not.toBeNull();
   });
});