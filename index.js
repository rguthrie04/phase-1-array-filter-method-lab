//findMatching()
//function that returns all drivers that match the passed in name
//returns matching drivers if case does not match but letters do - toLowerCase?
//returns an empty array if there is no match

function findMatching(drivers, driverName){
    const result = drivers.filter(newName => newName.toLowerCase() === driverName.toLowerCase())
    return result
}

function fuzzyMatch(drivers, firstTwoLet){
    const result = drivers.filter(fuzzyName => fuzzyName.substring(0,2) === firstTwoLet.substring(0,2))
    return result
}

function matchName(arrayOfDriverObjects,stringName) {
    const result = arrayOfDriverObjects.filter(names => names.name === stringName)
    return result
}