describe('split', function(){
    // beforeAll(function () {
    //     spyOn(sort, 'swap').and.callThrough(); 
    // })
    // it('expect 6 swap counts for [4,3,2,1] array', function () {
    //     bubbleSort([4,3,2,1]);
    //     expect(sort.swap.calls.count()).toEqual(6);
    // })

    it('handles a multiple element array', function(){
        expect( split([1, 2, 3, 4]) ).toEqual( [[1,2], [3,4]] );
        expect( split([1, 2, 3, 4, 5]) ).toEqual( [[1,2], [3,4,5]] );
    });
    
  });

  describe('merge', function(){


    it('merges two arrays and does some sorting', function(){
        expect( merge([10], [5]) ).toEqual( [5, 10]  );
        // expect( merge([1, 2, 3, 4, 5]) ).toEqual( [[1,2], [3,4,5]] );
    });
    
  });