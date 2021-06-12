import {error, log} from "../../core/Logger";

describe('Logger', () => {
    it('should log',  () => {
        const spy = jest.spyOn(console, "log");
        log('something');
        expect(spy).toHaveBeenCalled();
    });
    it('should error',  () => {
        const spy = jest.spyOn(console, "error");
        error('something');
        expect(spy).toHaveBeenCalled();
    });
});