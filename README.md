# BigQuery Populate API

> This application performs batch insertions into BigQuery

## How to use

### Credentials Configurantion
```sh
1 - Generate your credentials JSON file in GCP and paste the file into the project root
2 - Create the environment variables "KEY_FILENAME", "PROJECT_ID" and "DATASET_ID"
  2.1 "KEYFILENAME": name of the credentials file you generated
  2.2 "PROJECT_ID": Your project ID in BigQuery
  2.3 "DATASET_ID": ID of the Dataset that you will populate
```

### Header and Body of Request
```sh
1 - In the request header you must enter the "headerTableName" parameter. It will contain the name of the table that will be populated in BigQuery
2 - The body of the request must contain an array of objects similar to the one shown below
    PS.: The parameters contained in the object array will depend on the data you will insert. So, fill it in according to your needs.
```

### Route
```sh
The route that should be called is: /send-data
Method: POST
```

### Request Body Example
```json
[
    {
        "Name": "John Doe 1",
        "PhoneNumber": "88888888888",
        "EmailAddress": "email1@email1.com",
        "isActive": true,
        "Channel": "WhatsApp"
    },
    {
        "Name": "John Doe 2",
        "PhoneNumber": "99999999999",
        "EmailAddress": "email2@email2.com",
        "isActive": false,
        "Channel": "Messenger"
    }
]
```

### Create Docker Image
```sh
The project has a basic dockerfile. If you want to generate an image of the project, just run the following command:

docker build -t your-image-name .
```
