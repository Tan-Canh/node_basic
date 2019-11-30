const USER_MODEL = require('../databases/user-col');

const getList = (req, res) => {
    USER_MODEL.find({})
        .then(data => {
            res.json({
                error: false,
                data: data
            })
        })
        .catch(error => res.json({
            error: true,
            message: error
        }))
}

const addUser = (req, res) => {
    let { name, age } = req.body;
    USER_MODEL.create({
        name,
        age
    })
    .then(data => {
        res.json({
            error: false,
            data: data
        })
    })
    .catch(error => {
        res.json({
            error: true,
            message: error
        })
    })
}
const deleteUser = (req, res) => {
    let { id } = req.params;
    USER_MODEL.findByIdAndDelete(id)
    .then(data => {
        res.json({
            error:false,
            data: data
        })
    })
    .catch(error =>{
        res.json({
            error: true,
            message: error
        })
    })

}

const updateUser = (req, res) => {
    let { id } = req.params;
    let { name, age } = req.body;

    USER_MODEL.findByIdAndUpdate(id, {
        name,
        age
    }, { new: true })
    .then(data => {
        res.json({
            error: false,
            data: data
        })
    })
    .catch(error => {
        res.json({
            error: true,
            message: error
        })
    })
}

module.exports = {
    getList,
    addUser,
    deleteUser,
    updateUser
}