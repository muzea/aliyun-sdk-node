export interface RecoverIndexRequest {
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * body参数。
     */
    "body"?: {
        /**
         * 数据源名称
         * @example `ha-cn-pl32rf0****_test_api`
         */
        dataSourceName: string;
        /**
         * 索引名称
         * @example `test_api`
         */
        indexName: string;
        /**
         * 索引全量版本
         * @example `1653018575`
         */
        generation: string;
        /**
         * 数据源离线部署id
         * @example `277`
         */
        buildDeployId: number;
    };
}
