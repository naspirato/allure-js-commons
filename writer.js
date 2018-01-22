'use strict';
var fs = require('fs-extra'),
    path = require('path'),
    uuid = require('uuid'),
    xml = require('js2xmlparser');

module.exports = {
    writeSuite: function(targetDir, suites) {
        try{
            fs.outputFileSync(path.join(targetDir, uuid.v4() + '-testsuite.xml'), xml.parse('ns2:test-suite', suites.toXML()));
        }catch(err){
            console.log(err)
        }
    },
    writeBuffer: function(targetDir, buffer, ext) {
        var fileName = uuid.v4() + '-attachment.' + ext;
        fs.outputFileSync(path.join(targetDir, fileName), buffer);
        return fileName;
    }
};
