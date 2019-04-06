PUT customers 
{
    "mappings": {
        "customer": {
            "properties": {
                "title": {
                    "type": "text"
                },
                "name": {
                    "type": "text"
                },
                "age": {
                    "type": "integer"
                },
                "created": {
                    "type": "date",
                    "format": "strict_date_optional_time||epoch_millis"
                }
            }
        }
    }
}

// adding document without id
POST customers/customer
{
    "title": "Elastic search practice",
    "name": "Sudeep Patel",
    "age": 34,
    "created": "2009-11-15T14:12:12"
}
    }
}


PUT customerwithdate 
{
    "mappings": {
        "customer": {
            "properties": {
                "title": {
                    "type": "text"
                },
                "name": {
                    "type": "text"
                },
                "age": {
                    "type": "integer"
                },
                "created": {
                    "type": "date",
                    "format": "strict_date_optional_time||epoch_millis"
                },
                "created_ddmmyyyy": {
                    "type": "date",
                    "format": "yyyy-MM-dd"
                }
            }
        }
    }
}


POST customerwithdate/customer
{
    "title": "Elastic search practice",
    "name": "Sudeep Patel",
    "age": 34,
    "created": "2009-11-15T14:12:12",
    "created_ddmmyyyy": "2019-01-21"
}
    }
}


// fetchign all documents 
GET /customerwithdate/customer/_search?pretty=true

 


// querying by id
GET /customerwithdate/customer/cCBfb2gBAYZ1nPEgJV9a?pretty=true


// ingest pipeline - rename name field to customer_name

PUT _ingest/pipeline/rename_customer_name
{
    "processors": [
        {
            "rename": {
                "field": "name",
                "target_field": "customer_name",
                "ignore_missing": true
            }
        }
    ]
}


POST customerwithdate/customer/?pipeline=rename_hostname/_simulate
{
    "title": "Elastic search practice",
    "name": "Sudeep Patel",
    "age": 34,
    "created": "2009-11-15T14:12:12",
    "created_ddmmyyyy": "2019-01-21"
}
    }
}

// get all the piple details

get _ingest/pipeline

GET _ingest/pipeline/my-pipeline-id?filter_path=*.version

// DELETE _ingest/pipeline/my-pipeline-id

// simulating ingest API
POST  _ingest/pipeline/rename_customer_name/_simulate
{
    "docs": [
        {
            "_source": {
                "title": "Elastic search practice",
                "name": "Sudeep Patel",
                "age": 34,
                "created": "2009-11-15T14:12:12",
                "created_ddmmyyyy": "2019-01-21"
            }
        }
    ]
}


POST test/_doc/1?pipeline=drop_guests_network
{
  "network_name" : "Guest"
}


GET _cluster/state?filter_path=nodes
 
GET _count

GET _count?filter_path=_shards

GET _mappings
GET _mappings?filter_path=doc


GET customerwithdate/customers?flat_settings=false

PUT /twitter/_doc/1
{
    "user": "kimchy",
    "post_date": "2009-11-15T14:12:12",
    "message": "trying out Elasticsearch"
}

PUT /twitter/_doc/1?filter_path=_version
{
    "user": "kimchy",
    "post_date": "2009-11-15T14:12:12",
    "message": "trying out Elasticsearch"
}



GET /twitter/_doc/_search


POST /customer/_doc
{
    "name": "Sudeep Patel",
    "City": "Mumbai",
    "dob": "09-01-1984",
    "designation": "Senior Consultant",
    "Remarks": "Getting Started"
}

GET /customer/_search?pretty=true

GET  /customer



//creating index with settings
PUT twitters
{
    "settings": {
        "index": {
            "number_of_shards": 3,
            "number_of_replicas": 2
        }
    }
}



PUT test2
{
    "settings": {
        "index.write.wait_for_active_shards": "2"
    }
}

PUT test?wait_for_active_shards=3

// The index operation also accepts an op_type that can be used to force a create operation, allowing for "put-if-absent" behavior. When create is used, the index operation will fail if a document by that id already exists in the inde

// op_type=create
PUT twitter2/_doc/1?op_type=create
{
    "user" : "kimchy",
    "post_date" : "2009-11-15T14:12:12",
    "message" : "trying out Elasticsearch"
}

PUT twitter1/_create/10
{
    "user" : "kimchy",
    "post_date" : "2009-11-15T14:12:12",
    "message" : "trying out Elasticsearch"
}

GET /winlog*/_search
{
    "query": {
         "term": {
            "level": "Error"
        }
    },
    // "_source": false,
    // "stored_fields" : ["level", "computer_name"],
        "_source": [ "level","computer_name"],


     "sort": [
        {
            "@timestamp": {
                "order": "desc"
            }
        }
    ],
    "size": 1
}

// watch a index for alert
PUT _xpack/watcher/watch/winlog_error_watch
{
    "trigger": {
        "schedule": {
            "interval": "10s"
        }
    },
    "input": {
        "search": {
            "request": {
                "indices": [
                    "winlog*"
                ],
                "body": {
                    "query": {
                        "match": {
                            "level": "Error"
                        }
                    }
                }
            }
        }
    }
}


GET .watcher-history*/_search?pretty
{
  "sort" : [
    { "result.execution_time" : "desc" }
  ]
}


