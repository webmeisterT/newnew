const getAll = (req, res) => {
    res.status(200).json({title: "get request"});
};

const postAll = (req, res) => {
    res.status(200).json({title: "post request"});
};

const getSingle = (req, res) => {
    res.status(200).json({title: "get single request"});
};

const updateRequest = (req, res) => {
    res.status(200).json({title: "update request"});
};

const deletePost = (req, res) => {
    res.status(200).json({title: "delete request"});
};


module.exports = {
    getAll,
    postAll,
    getSingle,
    updateRequest,
    deletePost,
};