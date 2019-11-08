// curl.exe 'http://localhost:9200/?pretty'


// GET http://localhost:9200/?pretty

GET _count?pretty
{
    "query": {
        "match_all": {}
    }
}

// to see headers
// curl -i -XGET 'localhost:9200/'

