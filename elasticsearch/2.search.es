


POST /twitter/_search?routing=kimchy

POST /twitter/_search?routing=kimchy
{
    "query": {
        "bool" : {
            "must" : {
                "query_string" : {
                    "query" : "some query string here"
                }
            },
            "filter" : {
                "term" : { "user" : "kimchy" }
            }
        }
    }
}


// Adaptive Replica Selectionedit
// As an alternative to requests being sent to copies of the data in a round robin fashion, you may enable adaptive replica selection. This allows the coordinating node to send the request to the copy deemed "best" based on a number of criteria:
PUT /_cluster/settings
{
    "transient": {
        "cluster.routing.use_adaptive_replica_selection": true
    }
}

// Stats Groups
POST /_search
{
    "query": {
        "match_all": {}
    },
    "stats": [
        "group1",
        "group2",
        "group3"
    ]
}

GET /_cluster/settings
PUT /_cluster/settings
{
    "persistent" : {
        "indices.recovery.max_bytes_per_sec" : "50mb"
    }
}


GET /twitter/_search?q=user:kimchy

GET /_tasks

GET /_all/_search?q=tag:wow


// URI Search
GET /twitter/_search/?q=_id:N1V12GkBvSEzN89cVSZ9

GET /twitter/_search?q=user:kimchy&user:kimchy

GET /twitter/_search?q=user:kimchy&sort=


GET /twitter/_search
{
    "query": {
        "term": {
            "user": "kimchy"
        }
    }
}


GET /_search?q=message:number&size=0&terminate_after=1

GET /twitter/_search
{
    "from": 0, "size": 1,
    "query" : {
        "term" : {"user": "kimchy"}
    }
}


// for pagination use from and size

GET twitter/_search 
{
    "from": 0,
    "size": 2,
    "terminate_after": 10,
     
    "query": {
        "term": {
            "user": "kimchy"
        }
        
    }
}

GET /twitter/_search 
{

    "from": 3,
    "size": 2,
       "query": {
        "term": {
            "user": "kimchy"
        }
        
    }
}



PUT /my_index
{
    "mappings": {
        "_doc": {
            "properties": {
                "post_date": { "type": "date" },
                "user": {
                    "type": "keyword"
                },
                "name": {
                    "type": "keyword"
                },
                "age": { "type": "integer" }
            }
        }
    }
}

GET /my_index/_search 
{
    "sort": [
        {"post_date": {"order":"asc"}},
        "user",
        {"name":{"order":"desc"}},
        {"age": {"order": "desc"}},
        "_score"
    ],
    "query" :
    {
        "term":{"user" :"" }
    }
}

PUT /my_index/_doc/3?refresh
{
   "product": "chocolate",
   "price": [20, 4]
}

GET /my_index/_search 

POST /my_index/_search
{
   "query" : {
      "term" : { "product" : "chocolate" }
   },
   "sort" : [
      {"price" : {"order" : "asc", "mode" : "avg"}}
   ]
}


POST /my_index/_search
{
   "query" : {
      "term" : { "product" : "chocolate" }
   },
   "sort" : [
       {
          "offer.price" : {
             "mode" :  "avg",
             "order" : "asc",
             "nested": {
                "path": "offer",
                "filter": {
                   "term" : { "offer.color" : "blue" }
                }
             }
          }
       }
    ]
}