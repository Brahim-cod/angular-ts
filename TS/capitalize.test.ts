import { capitalize } from './modules/stringUtils';

test("as string to capitalize 'take it easy'", () => {
    expect(capitalize('take it easy')).toBe('Take it easy')
})
