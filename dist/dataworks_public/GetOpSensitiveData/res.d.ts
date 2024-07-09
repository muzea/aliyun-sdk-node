export interface GetOpSensitiveDataResponse {
    /**
     * 返回的敏感数据记录信息。包括totalCount（敏感数据总条数）和opRiskDatas（风险数据列表）。
     * 其中opRiskDatas（风险数据列表）包括：
     * - sensType：敏感类型。
     * - sensLevel：敏感级别（数字越大表示敏感程度越高）。
     * - opType：操作类型。
     * - sql：操作执行的sql语句。
     * - opAccount：执行操作的账号。
     * - opTime：执行操作的时间。
     * @example `"opSensDatas": [       {         "sensLevel": "L4",         "opTime": "2021-02-07 00:14:51",         "opAccount": "ALIYUN$dsg_test",         "sensType": "手机号",         "sql": "select * from dsg_demo.tbl_phonebook where phone_no = &#39;1331111****&#39;;"       }     ],     "totalCount": 6`
     */
    OpSensitiveData: string;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
}
