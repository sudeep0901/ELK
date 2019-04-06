


DELETE /twitter/_doc/1?timeout?5m

DELETE /twitter/_doc/1

// Delete By Query APIedit
// The simplest usage of _delete_by_query just performs a deletion on every document that matches a query. Here is the API:
POST twitter/_delete_by_query 
{
    "query": {
        "match": {
            "user": "kimchy1"
        }
    }
}

// If you’d like to count version conflicts rather than cause them to abort, then set conflicts=proceed on the url or "conflicts": "proceed" in the request body.
POST twitter/_doc/_delete_by_query?conflicts=proceed
{
  "query": {
    "match_all": {}
  }
}


// It’s also possible to delete documents of multiple indexes and multiple types at once, just like the search API:

POST twitter,blog/_docs,post/_delete_by_query
{
  "query": {
    "match_all": {}
  }
}


POST twitter/_delete_by_query?scroll_size=5000
{
  "query": {
    "term": {
      "user": "kimchy"
    }
  }
}

// In addition to the standard parameters like pretty, the delete by query API also supports refresh, wait_for_completion, wait_for_active_shards, timeout, and scroll.

GET _tasks?detailed=true&actions=*/delete/byquery

POST _tasks/r1A2WoRbTwKZ516z6NEs5A:36619/_cancel

// Rethrottlingedit
// The value of requests_per_second can be changed on a running delete by query using the _rethrottle API:


POST _delete_by_query/r1A2WoRbTwKZ516z6NEs5A:36619/_rethrottle?requests_per_second=-1

// Slicingedit
// Delete by query supports sliced scroll to parallelize the deleting process. This parallelization can improve efficiency and provide a convenient way to break the request down into smaller parts


GET _refresh

// Automatic slicingedit
// You can also let delete by query automatically parallelize using sliced scroll to slice on _uid. Use slices to specify the number of slices to use:
POST twitter/_delete_by_query?refresh&slices=5
{
  "query": {
    "range": {
      "likes": {
        "lt": 10
      }
    }
  }
}



POST twitter/_delete_by_query?refresh&slices=5
{
  "query": {
    "range": {
      "likes": {
        "lt": 10
      }
    }
  }
}

POST twitter/_search?size=0&filter_path=hits.total
{
  "query": {
    "range": {
      "likes": {
        "lt": 10
      }
    }
  }
}