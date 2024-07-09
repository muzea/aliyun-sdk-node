export interface QueryDatasetDetailInfoResponse {
    /**
     * 请求ID。
     * @example `DC4E1E63-B337-44F8-8C22-6F00DF67E2C3`
     */
    RequestId: string;
    /**
     * 返回JSON格式的数据集数据：
     * `{ "cube": { "dimensions": [ { "caption": "客户名称", "dataType": "string", "dimensionType": "standard_dimension", "factColumn": "customer_name", "uid": "N5820f5_customer_name" }, { "caption": "订单编号", "dataType": "string", "dimensionType": "standard_dimension", "factColumn": "order_id", "uid": "N5820f5_order_id" }, ], "measures": [ { "caption": "订单金额", "dataType": "number", "factColumn": "order_amt", "measureType": "standard_measure", "uid": "N5820f5_order_amt" } ], "table": { "customsql": false, "dsId": "261b252d-c3c3-498a-a0a7-5d1ec6cd****", "tableName": "company_sales_record_copy" } }, "datasetId": "5820f58c-c734-4d8a-baf1-7979af4f****", "datasetName": "company_sales_record_copy12", "datasource": { "dsId": "261b252d-c3c3-498a-a0a7-5d1ec6cd****", "dsName": "立三自用", "dsType": "mysql" }, "directory": { "id": "schemaad8aad00-9c55-4984-a767-b4e0ec60****", "name": "我的数据集", "pathId": "schemaad8aad00-9c55-4984-a767-b4e0ec60****", "pathName": "我的数据集" }, "ownerId": "13651626232****", "ownerName": "张三", "rowLevel": false, "workspaceId": "95296e95-ca89-4c7d-8af9-dedf0ad0****", "workspaceName": "测试工作空间" }`
     * @example `返回JSON格式的数据集数据，详见左侧说明。`
     */
    Result: string;
    /**
     * 返回接口执行结果。取值范围：
     * - true：执行成功
     * - false：执行失败
     * @example `true`
     */
    Success: boolean;
}
