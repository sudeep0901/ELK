// megacorp - Index/Database
// employee - type/table
// 1        -  Row
// rest is fields, valaues
PUT /megacorp/employee/1
{
    "first_name": "John",
    "last_name": "Smith",
    "age": 25,
    "about": "I love to go rock climbing",
    "interests": [
        "sports",
        "music"
    ]
}

PUT /megacorp/employee/2
{
    "first_name": "Jane",
    "last_name": "Smith",
    "age": 32,
    "about": "I like to collect rock albums",
    "interests": [
        "music"
    ]
}
PUT /megacorp/employee/3
{
    "first_name": "Douglas",
    "last_name": "Fir",
    "age": 35,
    "about": "I like to build cabinets",
    "interests": [
        "forestry"
    ]
}

// Retrieving a Document

GET /megacorp/employee/1
GET /megacorp/employee/2


// Search Lite
// Search all employees

GET /megacorp/employee/_search


GET /megacorp/employee/_search?q=last_name=Smith

// Search with Query DSL
// Elasticsearch provides a rich, flexible,
// query language called the query DSL, which allows us to build much more complicated,
// robust queries.
// domain-specific language (DSL) is specified using a JSON request body.

GET /megacorp/employee/_search 
{
    "query": {
        "match": {
            "last_name": "Smith"
        }
    }
}


// More-Complicated Searches
GET /megacorp/employee/_search
{
    "query": {
        "bool": {
            "must": {
                "match": {
                    "last_name": "Smith"
                }
            },
            "filter": {
                "range": {
                    "age": {
                        "gt": 30
                    }   
                }
            }
        }
    }
}

// Full-Text Search

GET /megacorp/employee/_search
{
    "query": {
        "match": {
            "about": "rock climbing"
        }
    }
}

//  Phrase Search

// match exact sequences of words or phrases.

GET /megacorp/employee/_search 
{
    "query": {
        "match_phrase": {
            "about": "rock climbing"
        }
    }
}

// Highlighting Our Searches
// Many applications like to highlight snippets of text from each search result so the user
// can see why the document matched the query. Retrieving highlighted fragments is
// easy in Elasticsearch.

GET /megacorp/employee/_search
{
    "query": {
        "match_phrase": {
            "about": "rock climbing"
        }
    },
    "highlight": {
        "fields": {
            "about": {}
        }
    }
}

// Analytics
// Finally, we come to our last business requirement: allow managers to run analytics
// over the employee directory. Elasticsearch has functionality called aggregations, which
// allow you to generate sophisticated analytics over your data. It is similar to GROUP BY
// in SQL, but much more powerful.

GET /megacorp/employee/_search 
{
    "aggs": {
        "all_interests": {
            "terms": {
                "field": "interests"
            }
        }
    }
}

GET /megacorp/employee/_search
{
    "query": {
        "match": {
            "last_name": "smith"
        }
    },
    "aggs": {
        "all_interests": {
            "terms": {
                "field": "interests"
            }
        }
    }
}


// Fielddata is disabled on text fields by default. Set fielddata=true on [interests] in order to load fielddata in memory by uninverting the inverted index. Note that this can however use significant memory. Alternatively use a keyword field instead
PUT megacorp/_mapping
{
  "properties": {
    "interests": { 
      "type":     "text",
      "fielddata": true
    }
  }
}

GET megacorp/_mapping

GET /megacorp/employee/_search
{
    "aggs": {
        "all_interests": {
            "terms": {
                "field": "interests"
            },
            "aggs": {
                "avg_age": {
                    "avg": {
                        "field": "age"
                    }
                }
            }   
        }
    }
}


GET megacorp/employee/_search
{
    "aggs": {
        "all_interests": {
            "terms": {
                "field": "interests"
            }
        }
    }
}

GET megacorp/employee/_search
{
    "aggs": {
        "all_interests": {
            "terms": {
                "field": "interests"
            },
            "aggs": {
                "avg_age": {
                    "avg": {
                        "field": "age"
                    }
                }
            }
        }
    }
}