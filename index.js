// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
    return {...driver, [key]:value};
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key){
    const copy = {...driver};
    delete copy[key];
    return copy;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}