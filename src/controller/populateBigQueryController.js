const { setRedisFunction } = require('../utils/redis');
const { BigQuery } = require('@google-cloud/bigquery');


const bigQuery = new BigQuery({
    keyFilename: process.env.KEY_FILENAME,
    projectId: process.env.PROJECT_ID
});
const dataSetId = process.env.DATASET_ID;

exports.PopulateBigQueryController = async (request, response) => {
    const tableId = request.headers['headertablename'];
    const dataToInsert = request.body;
    try {
        console.log(`Batch received for insertion. Table Name: ${tableId}`);

        await bigQuery
            .dataset(dataSetId)
            .table(tableId)
            .insert(dataToInsert)
        
        console.log(`Insertion completed successfully. Table Name: ${tableId}`);
        return response.status(200).json({message: `Insertion completed successfully. Table Name: ${tableId}`});

    } catch (error) {
        console.error(`Error during batch insertion. Table Name: ${tableId}. Error Message: ${error.message}`);
        await setRedisFunction("dataWithError", dataToInsert);
        response.status(400).json({
            error: `Error during batch insertion. Table Name: ${tableId}`,
            message: error.message
        });
    }
}