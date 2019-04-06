
GET /_cat?pretty

GET /_cat/health?v

GET /_cat/nodes?v

//list all indexes

GET /_cat/indices?v


//Creating a index

PUT /customer?pretty

PUT /orders?pretty

GET /_cat/indices?pretty


// Create a document in created index

PUT /customer/_doc/1?pretty 
{
    "name": "Sueep Patel"
}

PUT /customer/_doc/2?pretty
{
    "name": "Manasvi Patel"
}


GET /customer/_doc/1

PUT /customer/_doc/1 
{
    "name":"Testing"
}


GET /_cluster/settings

// to disbale auto creation of index

PUT _cluster/settings
{
    "persistent": {
        "action.auto_create_index": "true" 
    }
}

PUT /twitter/_doc/1
{
    "user": "kimchy",
    "post_date": "2009-11-15T14:12:12",
    "message": "trying out Elasticsearch",
    "testing": " I am testing ES"
}

// When create is used, the index operation will fail if a document by that id already exists in the index.
PUT /twitter/_doc/1?op_type=create
{
    "user": "kimchy",
    "post_date": "2009-11-15T14:12:12",
    "message": "trying out Elasticsearch"
}

PUT twitter/_doc/1/ 
{ 
    "user" : "kimchy1",
    "post_date" : "2009-11-15T14:12:12",
    "message" : "trying out Elasticsearch"
}

// Automatic ID creation

POST /twitter/_doc/
{
    "user": "kimchy",
    "post_date": "2009-11-15T14:12:12",
    "message": "trying out Elasticsearch",
    "testing": " I am testing ES"
}


//routing
// When setting up explicit mapping, the _routing field can be optionally used to direct the index operation to extract the routing value from the document itself. This does come at the (very minimal) cost of an additional document parsing pass. If the _routing mapping is defined and set to be required, the index operation will fail if no routing value is provided or extracted.
POST /twitter/_doc?routing=sudeep
{
    "user": "kimchy1",
    "post_date": "2009-11-15T14:12:12",
    "message": "trying out Elasticsearch",
    "testing": " I am testing ES"
}


// search with routing
POST /twitter/_search?routing=sudeep 
{"query": {"match": {"text": "kimchy"}}}

// GET /twitter/_doc/?routing=sudeep

GET /twitter/_doc/1

// Source filtering

GET twitter/_doc/1?_source=false

// include some fields only fromm _soruce in resutl set

GET twitter/_doc/1?_source_includes=user,,message&_source_excludes=entities

# Shorter hand

GET /twitter/_doc/1?_source=user



PUT twitter12
{
   "mappings": {
      "_doc": {
         "properties": {
            "counter": {
               "type": "integer",
               "store": false
            },
            "tags": {
               "type": "        ",
               "store": true
            }
         }
      }
   }
}


PUT twitter12/_doc/1
{
    "counter" : 1,
    "tags" : ["red"]
}

GET twitter12/_doc/1?stored_fields=tags,counter


PUT twitter12/_doc/2?routing=user1
{
    "counter" : 1,
    "tags" : ["white"]
}


PUT twitter12/_doc/3?routing=user1
{
    "counter" : 1,
    "tags" : ["white3"]
}


GET twitter12/_doc/2?routing=user1

// preference allow to search only primary or _local
GET /twitter12/_doc/1?preference=_primary&refresh=true

GET /twitter12/_doc/1?preference=_local&refresh=true

GET /twitter12/_doc/1?version=2


// Get all the documents
GET /twitter/_search?pretty=true


