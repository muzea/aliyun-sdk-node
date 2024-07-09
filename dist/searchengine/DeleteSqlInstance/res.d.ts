export interface DeleteSqlInstanceResponse {
    /**
     * id of request
     * @example `2AE63638-5420-56DC-BF59-37D8174039A0`
     */
    requestId: string;
    /**
     * Response<Map<String, String>>
     */
    result: {
        /**
         * 返回结果。
         */
        result: any;
        /**
         * 请求id。
         * @example `2AE63638-5420-56DC-BF59-37D8174039A0`
         */
        requestId: string;
    };
}
