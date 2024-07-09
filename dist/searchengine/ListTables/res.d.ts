export interface ListTablesResponse {
    /**
     * requestId
     * @example `10D5E615-69F7-5F49-B850-00169ADE513C`
     */
    requestId: string;
    /**
     * List
     */
    result: {
        /**
         * 索引名
         * @example `es_test_1b`
         */
        name: string;
        /**
         * 索引表状态 (NEW, PUBLISH, IN_USE: 召回引擎版创建成功后为正常状态, NOT_USE, STOP_USE, RESTORE_USE, FAIL: 向量检索版新版本首次创建索引失败状态)
         * @example `IN_USE`
         */
        indexStatus: string;
        /**
         * 索引表状态 (NEW, PUBLISH, IN_USE: 召回引擎版创建成功后为正常状态, NOT_USE, STOP_USE, RESTORE_USE, FAIL: 向量检索版新版本首次创建索引失败状态)
         * @example `IN_USE`
         */
        status: string;
    }[];
}
