/** @namespace sputils.list */

(function () {
  /*

  EXAMPLE USE

  sputils.list.getListByName('Announcements')
    .then(function (data) { console.log(data.d.results) });

  */
  var getListByName = function (name, config) {
    var url = '/_api/Web/Lists/getByTitle(\'' + name + '\')/items/';
    return sputils.rest.get(url, config)
      .then(sputils.rest.unwrapResults);
  };


  /*

  EXAMPLE USE

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

  /*

  EXAMPLE USE

  sputils.list.getListItemById('Announcements', 1)
    .then(function (data) { console.log(data.d.results) });

  */
  // Returns the list item with the specified id.
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