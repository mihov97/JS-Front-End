function cityInformation(city) {
    for (let key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`)
    }
}