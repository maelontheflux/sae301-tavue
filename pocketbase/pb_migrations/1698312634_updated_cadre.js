/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9ph50e9r0c87hwj")

  collection.name = "Cadre"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9ph50e9r0c87hwj")

  collection.name = "cadre"

  return dao.saveCollection(collection)
})
