/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r1l7kbmov6wnb95")

  collection.name = "Lunette"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r1l7kbmov6wnb95")

  collection.name = "lunette"

  return dao.saveCollection(collection)
})
