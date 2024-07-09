export interface GetErrorRequestSampleResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回的数据。
     * @example `[         {             "sqlId": "2cd4432556c3dab9d825ba363637****",             "database": "dbgateway",             "originHost": "172.16.1****",             "tables": [                 "meter_****"             ],             "instanceId": "rm-2ze8g2am97624****",             "errorCode": "1062",             "user": "dbgat****",             "sql": "insert into meter_****\n        ( \n        ****\n     )\n        values (now(), now(), 'bbbc8624-5e19-455a-9714-8466f688****', '2022-02-10 14:00:00', '{\"endTime\":\"2022-02-10 14:00:00\",\"endTimestamp\":1644472800,\"startTime\":\"2022-02-10 13:00:00\",\"startTimestamp\":1644469200}', null, null)",             "timestamp": 1644476100435         }]`
     */
    Data: {
        /**
         * SQL ID。
         * @example `2cd4432556c3dab9d825ba363637****`
         */
        sqlId: string;
        /**
         * 数据库名。
         * @example `dbgateway`
         */
        database: string;
        /**
         * 执行SQL的客户端IP地址。
         * @example `172.16.1****`
         */
        originHost: string;
        /**
         * 表数据。
         */
        tables: string[];
        /**
         * 实例ID。
         * @example `rm-2ze8g2am97624****`
         */
        instanceId: string;
        /**
         * 错误码。
         * @example `1062`
         */
        errorCode: string;
        /**
         * 数据库用户名。
         * @example `dbgat****`
         */
        user: string;
        /**
         * SQL语句。
         * @example `insert into meter_****`
         */
        sql: string;
        /**
         * 执行时间，格式为Unix时间戳，单位为毫秒。
         * @example `1644476100435`
         */
        timestamp: number;
    }[];
    /**
     * 请求的ID。
     * @example `7172BECE-588A-5961-8126-C216E16B****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
