export interface GetOpRiskDataResponse {
    /**
     * 返回的有风险的敏感数据信息。包括totalCount（敏感数据总条数）和opRiskDatas（风险数据列表）。
     * 其中opRiskDatas（风险数据列表）包括：
     * - sensType：敏感类型。
     * - sensLevel：敏感级别。
     * - opType：操作类型。
     * - sql：操作执行的sql语句。
     * - opAccount：执行操作的账号。
     * - opTime：执行操作的时间。
     * @example `{     "opRiskDatas": [       {         "riskType": "分级维度,EMR引擎维度and项目维度,EMR引擎项目维度的操作数据,导出方式维度,EMR引擎",         "opTime": "2021-01-04 23:39:13",         "opType": "SQL_SELECT",         "opAccount": "user",         "sensType": "邮箱/姓名/手机号",         "sql": "SELECT * FROM default.jiade_1219_test_create LIMIT 20"       }     ],     "totalCount": 499   }`
     */
    RiskData: string;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
}
