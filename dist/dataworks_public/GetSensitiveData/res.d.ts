export interface GetSensitiveDataResponse {
    /**
     * 返回的敏感数据信息。包括totalCount（敏感数据总条数）和sensDatas（敏感数据列表）。
     * 其中sensDatas（敏感数据列表）包括：
     * - guid：租户元数据的唯一id，例如ODPS.ODPS类型数据的guid由project.table.column组成。
     * - sensType：敏感类型。
     * - sensLevel：敏感级别。
     * @example `{      "sensDatas": [       {         "sensLevel": "L1",         "guid": "dsg_demo.animal.dog",         "sensType": "姓名"       }      ],     "totalCount": 2171 }`
     */
    SensitiveData: any;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
}
