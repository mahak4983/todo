const List = require('../model/list');
const NoTime = require('../model/notime');

exports.getLists = (req, res, next) => {
    List.find()
    .sort({date:1}).exec((err, lists) => {
        if(err){

            return console.log(err);
        }

        res.status(200).json({lists: lists})
    })
   
}

exports.getListsN = (req, res, next) => {
    NoTime.find()
    .then(lists =>{

        res.status(200).json({lists: lists})
    })
    
    .catch(err=>{
        console.log(err);
    })
       

   
   
}

exports.addList = (req, res, next) => {
    const content = req.body.list;
    const date = req.body.date;
    if(date){

        const list = new List({content: content, date: date});
        list.save()
        .then(result => {
            res.status(200).json({message: 'Successfull'})
        })
        .catch(err => {
            console.log(err);
        })
    }
    else {
        const list = new NoTime({content: content});
        list.save()
        .then(result => {
            res.status(200).json({message: 'Successfull'})
        })
        .catch(err => {
            console.log(err);
        })
    }
    console.log(req.body);
}

exports.deleteList = (req, res, next) => {
    const listId = req.params.listId;
    List.findByIdAndRemove(listId)
    .then(result => {
        res.json({message: 'Deleted'});
    })
    .catch(err => {
        console.log(err);
    })
}

exports.deleteListN = (req, res, next) => {
    const listId = req.params.listId;
    NoTime.findByIdAndRemove(listId)
    .then(result => {
        res.json({message: 'Deleted'});
    })
    .catch(err => {
        console.log(err);
    })
}