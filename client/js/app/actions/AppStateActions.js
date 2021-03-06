var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppStateConstants = require('../constants/AppStateConstants');

var AppStateActions = {

  update: function(updates) {
    AppDispatcher.dispatch({
      actionType: AppStateConstants.APP_STATE_UPDATE,
      updates: updates
    });
  },

  reset: function() {
    AppDispatcher.dispatch({
      actionType: AppStateConstants.APP_STATE_RESET,
    });
  }

};

module.exports = AppStateActions;
