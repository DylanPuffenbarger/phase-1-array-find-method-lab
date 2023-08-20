// code your solution here
function superbowlWin(record){
    const cb = (element) => element.result === 'W';
    const win = record.find(cb);
    if (win === undefined){
        return undefined;
    } else {
        return win.year;
    }
}