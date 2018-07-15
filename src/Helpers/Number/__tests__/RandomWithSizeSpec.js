import RandomWithSize from './../RandomWithSize';

describe('RandomWithSize', () => {
    it('should generate random number with given size', () => {
        let nums = RandomWithSize(2, 2, 20);
        expect(nums[0].toString().length).toEqual(2);
        expect(nums[1].toString().length).toEqual(2);
        expect(nums[0] == nums[1]).toBeFalsy()
        expect(nums[0] == 20).toBeFalsy()
        expect(nums[1] == 20).toBeFalsy()
    })
})