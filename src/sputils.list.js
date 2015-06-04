/** @namespace sputils.list */

(function () {

  /**
  Returns the list items from the given list name.
  @function sputils.lists.getListByName
  @param {string} name a list name
  @returns {array}
  @example

  sputils.list.getListByName('Announcements')
    .then(function (data) { console.log(data.d.results) });

  */
  var getListByName = function (name, config) {
    var url = '/_api/Web/Lists/getByTitle(\'' + name + '\')/items/';
    return sputils.rest.get(url, config)
      .then(sputils.rest.unwrapResults);
  };

  /**
  Modifies list items in the given list.
  @function sputils.lists.postListByName
  @param {string} name a list name
  @param {object} data the payload
  @param {object} config the config
  @returns {object} Promise
  @example

    var data = {"Title": "listlessly POSTing",
              "__metadata": { type: "SP.Data.AnnouncementsListItem"} };
  sputils.list.postListByName("Announcements", data)
    .then(function (data) { console.log(data); });

  */
  var postListByName = function (name, data, config) {
    var url = '/_api/Web/Lists/getByTitle(\'' + name + '\')/items/';
    return sputils.rest.post(url, data, config)
      .then(sputils.rest.unwrapResults);
  };

   /**
  Returns the list item with the specified id.
  @function sputils.lists.getListItemById
  @param {string} name a list name
  @param {object} data the payload
  @param {object} config the config
  @returns {array} List items
  @example

     sputils.list.getListItemById('Announcements', 1)
    .then(function (data) { console.log(data.d.results) });

  */
  var getListItemById = function (listName, itemId, config) {
    var url = '/_api/Web/Lists/getByTitle(\'' + listName + '\')/items/getbyid(' + itemId + ')';
    return sputils.rest.get(url, config)
      .then(sputils.rest.unwrapResults);
  };

  sputils.list = {
    getListByName: getListByName,
    postListByName: postListByName,
    getListItemById: getListItemById
  };
})();
