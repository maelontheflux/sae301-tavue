/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9jwmqsqqqdi5kxe")

  collection.name = "Verre"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9jwmqsqqqdi5kxe")

  collection.name = "verre"

  return dao.saveCollection(collection)
})
