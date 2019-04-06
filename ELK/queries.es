Elastic search queries

GET /_cat/shards

GET /_cat

// getting index details
GET /_cat/indices/cutomers

// Creating a new index
PUT /customer_index_new2?pretty

// getting cluster health
GET /_cat/health

// getting cluster health
GET /_cat/nodes?v

//creating document in a index

PUT /customer/_doc/1?pretty 
{
    "name": "Manasvi Patel"
}

//retrieving document by id
GET /customer/_doc/2?pretty

DELETE /customer?pretty

GET /_cat/indices?index=customer

GET /_cat/indices?index=orders

PUT /customer

GET /customer

GET /_cat/indices

PUT /customer/_doc/1 
{
    "name": "Sudeep Patel",
    "age": 35,
    "email": "sudeep.tech.patel@gmail.com"
}

PUT customer/_doc/2
{
    "name": "Manasvi Patel",
    "age": 9,
    "email": "manasvi.tech.patel@gmail.com"
}
GET /customer/_doc/2?pretty

POST customer/_doc?pretty
{
    "name": "MC Patel",
    "age": 62,
    "email": "mc.patel@gmail.com"
}

GET customer?_id=WayeX2cBBO7S83xVITpY
 
 // update a field in a document

POST /customer/_doc/1/_update?pretty
{
    "doc": {
        "name": "Sudeep p patel"
    }
}

POST /customer/_doc/1/_update?pretty
{
    "doc": {
        "name": "Jane Sudeep",
        "age": 20
    }
}

GET /customer/_doc/1?pretty


// updating document with script
POST /customer/_doc/1/_update?pretty
{
    "script": "ctx._source.age += 15"
}


