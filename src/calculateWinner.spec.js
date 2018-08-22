import calculateWinner from './calculateWinner.js';

it('should return null if there is no winner', () => {
    expect(calculateWinner(["O", "O", "X",,,,"X", "O",])).toEqual(null);
});

it('should return O if O wins', () => {
    expect(calculateWinner(["O", "O", "X",
                             "X","O", ,
                             "X", "O",])
     ).toEqual("O");
});

it('should return X if X wins', () => {
    expect(calculateWinner(["O", "O", "X",
                             "X","X",   ,
                             "X", "O",   ])).toEqual("X");
});

it('should return if there is a winner up top', () => {
    expect(calculateWinner(["O", "O", "O",
                             ,,   ,
                             "X", "O",   ])).toEqual("O");
});

it('should return if there is a winner as the second line', () => {
    expect(calculateWinner([   ,    ,    ,
                            "O", "O", "O",
                             "X", "O",   ])).toEqual("O");
});

it('should return if there is a winner as the bottom', () => {
    expect(calculateWinner([   ,    ,    ,
                            "O", "X", "O",
                             "O", "O","O" ])).toEqual("O");
});

it('should return if there is a winner as the first column', () => {
    expect(calculateWinner([ "O",    ,    ,
                            "O", "X", "O",
                             "O",   ,"O" ])).toEqual("O");
});

it('should return if there is a winner as the second column', () => {
    expect(calculateWinner([ "O", "X",    ,
                                , "X", "O",
                                , "X",    ])).toEqual("X");
});

it('should return if there is a winner as the third column', () => {
    expect(calculateWinner([ "O",    ,  "O" ,
                                , "X", "O",
                                , "X",  "O" ])).toEqual("O");
});
