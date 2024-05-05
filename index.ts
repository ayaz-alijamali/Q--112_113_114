// Question _____________112

// Create a new Map
const countryCapitalsMap = new Map<string, string>();

// Add countries and their capitals to the Map
countryCapitalsMap.set("pakistan", "Sudi,Arbia");
countryCapitalsMap.set("Iraq", "UAE");
countryCapitalsMap.set("Iran", "Qattar");

// Example usage:
console.log(countryCapitalsMap);


// Question _______________ 113


function checkForCanada(map: Map<string, string>): void {
    if (map.has("Pakistan")) {
        const capital = map.get("Pakistan");
        console.log(`The capital of Pakistan is ${capital}`);
    } else {
        console.log("Pakistan is not in the Map.");
    }
}

// Example usage:
const CountryCapitalsMap = new Map<string, string>();
countryCapitalsMap.set("USA", "Washington, D.C.");
countryCapitalsMap.set("Canada", "Ottawa");
countryCapitalsMap.set("France", "Paris");

checkForCanada(countryCapitalsMap);


// Question _________________ 114



// Create a Map of student IDs and names
const studentMap = new Map<number, string>();
studentMap.set(101, "sagar");
studentMap.set(102, "faheem");
studentMap.set(103, "farhan");

// Iterate over the Map using forEach and log each pair
studentMap.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});

// Iterate over the Map using a for...of loop and log each pair
for (const [id, name] of studentMap) {
    console.log(`Student ID: ${id}, Name: ${name}`);
}
