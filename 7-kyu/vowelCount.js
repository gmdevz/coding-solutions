const getCount = (str) => {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str) {
        if(vowels.includes(char)) {
            vowelsCount++;
        }
    }

    /**
     * Second solution
     */
    // const vowelsCount = str.match(/[a,e,i,o,u]/gi).length;
    // return (str.match(/[a,e,i,o,u]/gi) || []).length;

    return vowelsCount;
};


console.log(getCount('abracadabra'), 5);