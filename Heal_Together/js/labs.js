// labs.js

const labs = [
    // Existing Labs
    {
        name: "Healthians",
        address: "DLF Towers, Moti Nagar, New Delhi",
        lat: 28.66,
        lon: 77.12,
        tests: {
            "PET Scan": 10999,
            "MRI": 15000,
            "NGS": 25000,
            "Liquid Biopsy": 35000
        }
    },
    {
        name: "Easybookmylab",
        address: "Lajpat Nagar, New Delhi",
        lat: 28.57,
        lon: 77.23,
        tests: {
            "PET Scan": 10499,
            "MRI": 12000,
            "NGS": 23000,
            "FISH": 18000
        }
    },
    {
        name: "Nueclear Healthcare",
        address: "Green Park, New Delhi",
        lat: 28.55,
        lon: 77.20,
        tests: {
            "PET Scan": 12000,
            "MRI": 16000,
            "NGS": 26000,
            "Liquid Biopsy": 33000
        }
    },
    {
        name: "House of Diagnostics (HOD)",
        address: "Pitampura, New Delhi",
        lat: 28.70,
        lon: 77.15,
        tests: {
            "PET Scan": 9999,
            "MRI": 14000,
            "FISH": 20000,
            "NGS": 24000
        }
    },
    {
        name: "Medintu",
        address: "Greater Kailash, New Delhi",
        lat: 28.54,
        lon: 77.18,
        tests: {
            "PET Scan": 12999,
            "MRI": 15000,
            "NGS": 21000,
            "Liquid Biopsy": 34000
        }
    },
    {
        name: "Ganesh Diagnostic",
        address: "Rohini, New Delhi",
        lat: 28.72,
        lon: 77.08,
        tests: {
            "PET Scan": 11950,
            "MRI": 13000,
            "NGS": 23000,
            "FISH": 22000
        }
    },
    {
        name: "Yashoda Hospital",
        address: "Kaushambi, Ghaziabad",
        lat: 28.65,
        lon: 77.32,
        tests: {
            "PET Scan": 10999,
            "MRI": 12500,
            "NGS": 22000,
            "Liquid Biopsy": 30000
        }
    },
    {
        name: "Max Healthcare",
        address: "Saket, New Delhi",
        lat: 28.52,
        lon: 77.20,
        tests: {
            "PET Scan": 13500,
            "MRI": 15500,
            "NGS": 24000,
            "FISH": 21000
        }
    },
    {
        name: "Wellness Pathcare",
        address: "Gurgaon, Haryana",
        lat: 28.47,
        lon: 77.10,
        tests: {
            "PET Scan": 16999,
            "MRI": 16000,
            "NGS": 27000,
            "Liquid Biopsy": 35000
        }
    },
    {
        name: "Metro Hospital",
        address: "Noida, Uttar Pradesh",
        lat: 28.60,
        lon: 77.25,
        tests: {
            "PET Scan": 10000,
            "MRI": 12500,
            "NGS": 21000,
            "FISH": 23000
        }
    },
    {
        name: "Scan4Health",
        address: "Sector 44, Gurgaon",
        lat: 28.45,
        lon: 77.05,
        tests: {
            "PET Scan": 10500,
            "MRI": 14000,
            "NGS": 22000,
            "FISH": 25000
        }
    },

    // New Labs Added
    {
        name: "Apollo Diagnostics",
        address: "Nehru Place, New Delhi",
        lat: 28.57,
        lon: 77.25,
        tests: {
            "PET Scan": 11200,
            "MRI": 14500,
            "NGS": 21500,
            "Liquid Biopsy": 31000
        }
    },
    {
        name: "Fortis Healthcare",
        address: "Vasant Kunj, New Delhi",
        lat: 28.55,
        lon: 77.13,
        tests: {
            "PET Scan": 12200,
            "MRI": 13500,
            "NGS": 22500,
            "FISH": 24000
        }
    },
    {
        name: "Sarvodaya Hospital",
        address: "Faridabad, Haryana",
        lat: 28.39,
        lon: 77.31,
        tests: {
            "PET Scan": 9500,
            "MRI": 12000,
            "NGS": 20500,
            "Liquid Biopsy": 30000
        }
    },
    {
        name: "Care Clinic",
        address: "Bengaluru, Karnataka",
        lat: 12.97,
        lon: 77.58,
        tests: {
            "PET Scan": 11500,
            "MRI": 14000,
            "NGS": 21000,
            "FISH": 20000
        }
    },
    {
        name: "Max Super Speciality",
        address: "Shalimar Bagh, New Delhi",
        lat: 28.68,
        lon: 77.18,
        tests: {
            "PET Scan": 13500,
            "MRI": 16000,
            "NGS": 24500,
            "Liquid Biopsy": 33000
        }
    },
    {
        name: "Medanta",
        address: "Gurgaon, Haryana",
        lat: 28.46,
        lon: 77.02,
        tests: {
            "PET Scan": 12500,
            "MRI": 15000,
            "NGS": 22000,
            "FISH": 21000
        }
    },
    {
        name: "BLK Super Speciality",
        address: "Pusa Road, New Delhi",
        lat: 28.65,
        lon: 77.21,
        tests: {
            "PET Scan": 11000,
            "MRI": 13000,
            "NGS": 22500,
            "Liquid Biopsy": 32000
        }
    },
    {
        name: "AIIMS",
        address: "Ansari Nagar, New Delhi",
        lat: 28.55,
        lon: 77.23,
        tests: {
            "PET Scan": 12500,
            "MRI": 14000,
            "NGS": 23000,
            "FISH": 24000
        }
    },
    {
        name: "Mediway Diagnostics",
        address: "Jangpura, New Delhi",
        lat: 28.59,
        lon: 77.25,
        tests: {
            "PET Scan": 9500,
            "MRI": 12000,
            "NGS": 21500,
            "Liquid Biopsy": 31000
        }
    }
];



// Function to get the nearest lab based on location and test type
function searchLabs() {
    const location = document.getElementById("location").value.trim();
    const testType = document.getElementById("testType").value;

    if (!location) {
        alert("Please enter a location");
        return;
    }

    if (!testType) {
        alert("Please select a test type");
        return;
    }

    getCoordinates(location, (coords) => {
        if (!coords) {
            alert("Could not find the location");
            return;
        }

        console.log("User coordinates:", coords);

        // Filter labs by the selected test type
        const filteredLabs = labs.filter(lab => testType in lab.tests);

        // Map the filtered labs to include distance and price details
        const labsWithDetails = filteredLabs.map(lab => {
            const distance = getDistance(coords.lat, coords.lon, lab.lat, lab.lon);
            const price = lab.tests[testType] !== undefined ? `₹${lab.tests[testType]}` : "N/A";

            return {
                ...lab,
                distance,
                price
            };
        });

        // Sort labs first by distance, then by price (ignoring "N/A" for sorting)
        const sortedLabs = labsWithDetails.sort((a, b) => {
            const priceA = a.price === "N/A" ? Infinity : parseFloat(a.price.slice(1));
            const priceB = b.price === "N/A" ? Infinity : parseFloat(b.price.slice(1));
        
            // First, sort by price (lower is better)
            if (priceA !== priceB) {
                return priceA - priceB;
            }
        
            // If prices are the same, sort by distance (lower is better)
            return a.distance - b.distance;
        });
        

        // Call displayResults to show the sorted labs
        displayResults(sortedLabs, testType);
    });
}



// Function to get the coordinates for a given location using Nominatim API
function getCoordinates(location, callback) {
    location = location.trim();  // Clean up any extra spaces

    if (!location) {
        alert("Please enter a location.");
        return;
    }

    console.log("Location to search for:", location); // Log the location being searched
    
    const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;

    fetch(geocodeUrl)
        .then(response => {
            console.log("Response status:", response.status); // Log the response status
            if (!response.ok) {
                // Handle the error if the response is not ok (status code is not 2xx)
                throw new Error(`Geocoding API returned an error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("API Response:", data); // Log the response data from the geocoding API
            
            if (data && data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);
                callback({ lat, lon });
            } else {
                alert("Could not find the location. Please try a different one.");
                callback(null); // No results found
            }
        })
        .catch(err => {
            console.error("Error in geocoding:", err.message); // Log the exact error
            alert("There was an error processing the request. Please try again.");
            callback(null); // Handle API errors gracefully
        });
}

// Function to calculate the distance between two points in km using Haversine formula
function getDistance(lat1, lon1, lat2, lon2) {
    // Radius of the Earth in kilometers
    const R = 6371;

    // Convert degrees to radians
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    // Haversine formula
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Return distance in kilometers
    return R * c;
}

function handleSearch() {
    const location = document.getElementById("location").value.trim().toLowerCase();
    const test = document.getElementById("test").value.trim().toLowerCase();

    // Log user input for location and test
    console.log("User Input - Location:", location);
    console.log("User Input - Test:", test);

    if (location && test) {
        const userLocation = { lat: 28.60, lon: 77.25 }; // Default location (example for Noida)

        // Filtering labs based on test selected
        const filteredLabs = labs.filter(lab => lab.tests[test]);

        // Log the filtered labs
        console.log("Filtered Labs (by test):", filteredLabs);

        // Add distance and sort labs by price first, then by distance
        const labsWithDetails = filteredLabs.map(lab => {
            const distance = getDistance(userLocation.lat, userLocation.lon, lab.lat, lab.lon);
            return {
                ...lab,
                distance,
                price: lab.tests[test]
            };
        });

        // Log the labs with added distance
        console.log("Labs with Distance:", labsWithDetails);

        // Sort labs first by price, then by distance
        labsWithDetails.sort((a, b) => {
            if (a.price === b.price) {
                return a.distance - b.distance; // If prices are equal, sort by distance
            }
            return a.price - b.price; // Sort by price
        });

        // Log the sorted labs
        console.log("Sorted Labs (by price, then distance):", labsWithDetails);

        // Highlight the lab with the lowest price and nearest distance
        const highlightedLab = labsWithDetails[0];

        // Display the results
        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = ''; // Clear previous results

        labsWithDetails.forEach(lab => {
            const labElement = document.createElement("div");
            labElement.classList.add("lab-result");

            // Check if the lab is the highlighted one
            if (lab === highlightedLab) {
                labElement.classList.add("highlighted");
            }

            labElement.innerHTML = `
                <h3>${lab.name}</h3>
                <p><strong>Address:</strong> ${lab.address}</p>
                <p><strong>Distance:</strong> ${lab.distance.toFixed(2)} km</p>
                <p><strong>Price:</strong> ₹${lab.price}</p>
            `;

            resultsContainer.appendChild(labElement);
        });
    } else {
        alert("Please enter a location and a test.");
    }
}

// Function to display the results
function displayResults(labs, testType) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ''; // Clear previous results

    labs.forEach(lab => {
        const labElement = document.createElement("div");
        labElement.classList.add("lab-result");

        // Get price safely
        const price = lab.tests[testType] !== undefined ? `₹${lab.tests[testType]}` : "N/A";

        labElement.innerHTML = `
            <h3>${lab.name}</h3>
            <p><strong>Address:</strong> ${lab.address}</p>
            <p><strong>Distance:</strong> ${lab.distance.toFixed(2)} km</p>
            <p><strong>Price:</strong> ${price}</p>
            <a href="appointment.html">
                <button class="book-appointment-btn">Book Appointment</button>
            </a>

        `;

        resultsContainer.appendChild(labElement);
    });
}

// Event listener for the search button
document.getElementById("searchBtn").addEventListener("click", searchLabs);
