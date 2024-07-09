export interface GetRequestDiagnosisResultResponse {
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回Successful，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `800FBAF5-A539-5B97-A09E-C63AB2F7****`
     */
    RequestId: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 诊断ID，唯一标识。
         * @example `61820b594664275c4429****`
         */
        messageId: string;
        /**
         * 诊断实例唯一标识。
         * @example `hdm_51fe9bc19ec413f4d530431af87a****`
         */
        uuid: string;
        /**
         * 用户ID。
         * @example `2093****`
         */
        accountId: string;
        /**
         * SQL模板ID。
         * @example `0c95dae3afef77be06572612df9b****`
         */
        sqlId: string;
        /**
         * 数据库引擎，取值：
         * - **MySQL**
         * - **PostgreSQL**
         * - **SQLServer**
         * - **PolarDBMySQL**
         * - **PolarDBOracle**
         * - **MongoDB**
         * @example `MySQL`
         */
        engine: string;
        /**
         * 数据库名。
         * @example `das`
         */
        dbSchema: string;
        /**
         * 额外信息。
         * @example `{"":""}`
         */
        param: string;
        /**
         * 诊断状态：
         * - **0**：诊断中。
         * - **1**：诊断错误。
         * - **2**：诊断完成。
         * - **3**：SQL错误。
         * - **4**：引擎错误。
         * @example `2`
         */
        state: number;
        /**
         * SQL诊断结果。
         * - **endTime**：SQL诊断的结束时间。
         * - **errorCode**：错误码。
         *     - **0001**：诊断成功。
         *     - **0003**：诊断失败。
         * - **errorMessage**：错误信息。
         * - **estimateCost**：预估得消耗。
         * 	- **cpu**：索引的CPU消耗预估值。
         * 	- **io**：索引的IO消耗预估值。
         * 	- **rows**：索引的返回列预估值。
         * - **improvement**：性能提升比。
         * - **indexAdvices**：索引建议。
         * 	- **columns**：索引列。
         * 	- **ddlAddIndex**：索引DDL语句。
         * 	- **indexName**：索引名。
         * 	- **schemaName**：数据库名。
         * 	- **tableName**：表名。
         * 	- **unique**：是否唯一索引。
         * - **ip**：实例的IP地址。
         * - **messageId**：诊断ID。
         * - **port**：实例的端口。
         * - **sqlTag**：SQL标签。
         * - **startTime**：SQL诊断的开始时间。
         * - **success**：请求是否执行成功。
         * - **support**：SQL语句是否支持诊断。
         *     - **true**：支持。
         *     - **false**：不支持。
         * - **tuningAdvices**：SQL改写建议。
         * @example `{ "endTime":1636354256000, "errorCode":"0001", "errorMessage":"TFX成功", "estimateCost":{ "cpu":1.7878745150389268, "io":9.948402604746128, "rows":8.889372575194633 }, "improvement":12933.97, "indexAdvices":[ { "columns":[ "work_no" ], "ddlAddIndex":"ALTER TABLE `test`.`work_order` ADD INDEX `idx_workno` (`work_no`)", "indexName":"idx_workno", "schemaName":"test", "tableName":"work_order", "unique":false } ], "ip":"****.mysql.rds.aliyuncs.com", "messageId":"6188c8cb2f1365b16aee****", "port":3306, "sqlTag":"{\"PRED_EQUAL\":\"Y\",\"CNT_QB\":\"1\",\"CNT_TB\":\"1\"}", "startTime":1636354252000, "success":true, "support":true, "tuningAdvices":[ ] }`
         */
        result: string;
        /**
         * SQL诊断创建时间，格式为Unix时间戳，单位为毫秒。
         * @example `1633071840000`
         */
        gmtCreate: string;
        /**
         * SQL诊断修改时间，格式为Unix时间戳，单位为毫秒。
         * @example `1633071850000`
         */
        gmtModified: string;
    };
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
