/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z0f9ejb8blf82ds")

  collection.name = "Branche"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("z0f9ejb8blf82ds")

  collection.name = "branche"

  return dao.saveCollection(collection)
})
