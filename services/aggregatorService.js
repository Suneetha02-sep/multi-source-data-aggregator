import { withTimeout }
from "../utils/timeout.js";

import { convertKeysToCamelCase }
from "../utils/transform.js";

const BASE_URL = "http://localhost:3000/api";


// Helper Function
const fetchData = async (url) => {

    const response = await withTimeout(
        fetch(url),
        5000
    );

    return response.json();
};


export const getCompleteUserProfile = async (userId) => {

    // STEP 1 → Fetch User First
    const user =
        await fetchData(`${BASE_URL}/users/${userId}`);


    // STEP 2 → Parallel Calls
    const results = await Promise.allSettled([

        fetchData(`${BASE_URL}/users/${userId}/posts`),

        fetchData(`${BASE_URL}/recommendations`)
    ]);


    let posts = [];
    let recommendations = [];


    // Posts
    if (results[0].status === "fulfilled") {

        posts = results[0].value;
    }


    // Recommendations
    if (results[1].status === "fulfilled") {

        recommendations = results[1].value;
    }


    // Combined Object
    const finalData = {

        user,
        posts,
        recommendations
    };


    // snake_case → camelCase
    return convertKeysToCamelCase(finalData);
};