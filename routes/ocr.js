/**
 * Created by omkar on 29/8/17.
 */
var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var Jimp = require("jimp");
var fs = require('fs');
var tesseract = require('./../libs/node-tesseract');


router.post('/', upload.single('file'), function(req, res) {


    // specify location of tesseract binary file
    var options = {
        l: 'eng',
        binary: 'libs/tesseract',
        config: '--tessdata "libs/tessdata"'
    };

    // add contrast and greyscale for better readability
    Jimp.read('./uploads/'+ req.file.filename, function (err, lenna) {

        var file = "res." + lenna.getExtension();

        if (err) throw err;
        lenna.quality(100)
            .contrast(1)
            .greyscale()
            .write(file);



        // process image
        tesseract.process(file, options, function(err, text){
            if(err){
                return console.log("An error occured: ", err);
            }

            console.log("Recognized text:");
            console.log(text);
            fs.unlinkSync('./uploads/' + req.file.filename);

            res.send(text);


        });

    });


});

module.exports = router;
