describe('Bubble Sort', function(){
    // beforeAll(function () {
    //     spyOn(sort, 'swap').and.callThrough(); 
    // })
    // it('expect 6 swap counts for [4,3,2,1] array', function () {
    //     bubbleSort([4,3,2,1]);
    //     expect(sort.swap.calls.count()).toEqual(6);
    // })

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles a single element array', function(){
        expect( bubbleSort([4]) ).toEqual( [4] );
    });
    it('handles a multiple element array', function(){
        expect( bubbleSort([4,3,2,1]) ).toEqual( [1,2,3,4] );
    });
    it('handles a multiple element array', function(){
        expect( bubbleSort([38, -5, 0, 17, 1050]) ).toEqual( [-5, 0, 17, 38, 1050] );
    });
    
  });


// ...
// beforeAll(function () {
//   spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
// });
// it('getting to the center of tootsiepop involves exactly three licks', function () {
//   tootsiepop.getToCenter();
//   expect(tootsiepop.lick.calls.count()).toEqual(3);
// });
// ...

// SIXXXX FOR THAT SWAP NUMBER