/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("gc2pyz1bun1tfdu");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "gc2pyz1bun1tfdu",
    "created": "2023-10-24 09:48:33.836Z",
    "updated": "2023-10-24 09:48:33.836Z",
    "name": "materiaux",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nufplsdd",
        "name": "lebelle_materiaux",
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
})
