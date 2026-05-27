// Mock API 1
export const getUser = async (req, res) => {

    const userId = req.params.id;

    setTimeout(() => {

        res.json({
            user_id: userId,
            first_name: "Suneetha",
            last_name: "Vemagiri",
            email_address: "suneetha@gmail.com"
        });

    }, 2000);
};


// Mock API 2
export const getUserPosts = async (req, res) => {

    const userId = req.params.id;

    setTimeout(() => {

        res.json([
            {
                post_id: 1,
                post_title: "JavaScript Async Programming",
                created_by: userId
            },
            {
                post_id: 2,
                post_title: "Understanding MVC Architecture",
                created_by: userId
            }
        ]);

    }, 3000);
};


// Mock API 3
export const getRecommendations = async (req, res) => {

    setTimeout(() => {

        res.json([
            {
                item_id: 101,
                item_name: "Node.js Complete Guide"
            },
            {
                item_id: 102,
                item_name: "Express.js Mastery"
            }
        ]);

    }, 1000);
};