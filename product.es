//createing a new index - product
PUT /products?pretty

// To create the document use -POST to update document


//listing the lndices in cluster
GET /_cat/indices?v&pretty

GET /_cat/indices?filter_path=health

PUT customernew?&pretty

PUT orders?&pretty

// yellow due to single node cluster and not green 


GET /_cat/indices?pretty=true

// REST api to add documents in index


PUT /products/mobiles/1?pretty 
{
    "name": "iPhone 7",
    "camera": "12MP",
    "storage":"256GB",
    "display": "4.7inch",
    "battery": "1,960mAh",
    "reviews": ["very small size", "too costly","Other cost effective solutions are avaialble", "Android is better option"]

}

PUT /products/mobiles/2?pretty 
{
    "name": "Nokia 7+",
    "camera": "12MP",
    "storage":"64GB",
    "display": "6inch",
    "battery": "3000mAh",
    "reviews": ["GREAT size", "value for money ","good perfmance", "premium look", "Stock android"]
    
}


PUT /products/mobiles/3?pretty 
{
    "name": "Nokia 7+",
    "camera": "12MP",
    "storage":"64GB",
    "display": "6inch",
    "battery": "3000mAh",
    "reviews": ["GREAT size", "value for money ","good perfmance", "premium look", "Stock android"]
    
}


PUT /products/mobiles/4?pretty 
{
    "name": "Samsung Galaxy",
    "camera": "12MP",
    "storage":"32GB",
    "display": "6inch",
    "battery": "3000mAh",
    "reviews": ["GREAT size", "value for money ","good perfmance", "premium look", "Stock android"]
    
}
GET /products?pretty


POST /scratchgaurd1/scratch/2?pretty 
{
    "name": "FullScreen",
    "dimension": "5D",
    "display": "6inch",
    "reviews": [
        "Average"
    ]
}

post /laptop/computer?pretty 
{
    "name": "toshiba",
    "RAM": "8GB",
    "storage":"32GB",
    "display": "14inch",
    "os": "windows 10",
    "reviews": ["GREAT size", "value for money ","good perfmance", "premium look", "Stock android"]
    
}

// fething number of indices in cluster
GET /_cat/indices?pretty