export interface QueryDISyncTaskConfigProcessResultResponse {
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `0bc1411515937635973****`
     */
    RequestId: string;
    /**
     * 获取异步生成或更新数据集成同步任务所需参数的返回结果。
     */
    Data: {
        /**
         * 获取异步生成或更新数据集成同步任务所需参数的结果状态。取值如下：
         * - success：表示成功获取相关参数。
         * - fail：表示获取相关参数失败。您可以查看失败原因，处理相关问题。
         * @example `success`
         */
        Status: string;
        /**
         * 获取异步生成或更新数据集成同步任务所需参数失败的原因描述。如果获取成功，则该参数的返回值为空。
         * @example `fileId:[100] is invalid.`
         */
        Message: string;
        /**
         * 异步线程生成的数据集成同步任务所需参数。该参数将作为[CreateDISyncTask](~~278725~~)或[UpdateDISyncTask](~~289109~~)接口的输入参数，用于后续创建或更新数据集成同步任务。
         * @example `{"extend":{"mode":"migration_holo","resourceGroup":"280749","name":"h"},"type":"job","steps":[{"stepType":"mysql","parameter":{"connection":[{"datasourceType":"mysql","datasource":"mm","selectedTables":[{"schema":[{"tableInfos":[{"enable":true,"table":"m_v1","tableName":"m_v1"}]}],"dbName":"m"}]}]},"name":"reader","category":"reader"},{"stepType":"holo","parameter":{"datasource":"h","tableMappingRule":{"datasource":[{"tableRule":[{"srcTable":"m_v1","mergeIntoCycleType":"DEFAULT","hourDeltaEnable":false,"dstTable":"m.m_v1","dayDeltaEnable":false,"primaryKeyInfo":{"column":["id"],"type":"pk"},"dstCreateTableInfo":{"indexType":"m_v1","dataColumn":[{"columnSize":0,"name":"id","index":0,"comment":"","newDigit":0,"type":"int8","digit":0,"primaryKey":true}],"schemaName":"m","tableName":"m_v1"},"srcDbName":"m"}],"srcDatasourceName":"mm"}],"totalTableMapping":1},"writeMode":"replay"},"name":"writer","category":"writer"}],"version":"2.0","order":{"hops":[{"from":"reader","to":"writer"}]}}`
         */
        TaskContent: string;
    };
}
