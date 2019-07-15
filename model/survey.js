const AV = require('../utils/av-weapp-min.js');

class Survey extends AV.Object {
}
// Register object
AV.Object.register(Survey, 'Survey');

// Export object
module.exports = Survey;