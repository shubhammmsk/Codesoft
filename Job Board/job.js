     // Job data
     const jobs = [{
        title: "Software Engineer",
        company: "ABC Corporation",
        location: "New York, NY"
    }, {
        title: "Marketing Manager",
        company: " DEF Agency",
        location: "Los Angeles, CA"
    }, {
        title: "Data Scientist",
        company: "GHI Inc.",
        location: "Chicago, IL"
    },
    // Add more jobs here...
];

// Render jobs
const jobList = document.getElementById("job-list");
jobs.forEach((job) => {
    const jobHTML = `
        <li>
            <h2 class="job-title">${job.title}</h2>
            <p class="job-company">${job.company}</p>
            <p class="job-location">${job.location}</p>
        </li>
    `;
    jobList.innerHTML += jobHTML;
});

// Search functionality
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredJobs = jobs.filter((job) => {
        return job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.location.toLowerCase().includes(searchTerm);
    });

    jobList.innerHTML = "";
    filteredJobs.forEach((job) => {
        const jobHTML = `
            <li>
                <h2 class="job-title">${job.title}</h2>
                <p class="job-company">${job.company}</p>
                <p class="job-location">${job.location}</p>
            </li>
        `;
        jobList.innerHTML += jobHTML;
    });
});