import request from 'supertest';
import * as mock from './resources/gitlab-merge-request.json';
import {app} from "../app";

describe('Git hook', () => {
    it('should return 200', async () => {
        const res = await request(app).post('/gitlab/hook').send(mock).expect(200);
        expect(res.status).toBe(200);
    });
});