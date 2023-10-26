/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "iu5o6172b4kmhcb",
    "created": "2023-10-26 08:38:14.232Z",
    "updated": "2023-10-26 08:38:14.232Z",
    "name": "materiaux",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v1mserva",
        "name": "libelle_materiaux",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("iu5o6172b4kmhcb");

  return dao.deleteCollection(collection);
})
