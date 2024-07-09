export interface ListDiagnoseReportResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****`
     */
    RequestId: string;
    /**
     * 返回头信息。
     */
    Headers: {
        /**
         * 返回的总记录数。
         * @example `15`
         */
        X-Total-Count: number;
    };
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 健康诊断的触发方式。支持：
         * - SYSTEM：系统自动触发
         * - INNER：内部触发
         * - USER：用户手动触发
         * @example `USER`
         */
        trigger: string;
        /**
         * 报告创建的时间戳。
         * @example `1535745731000`
         */
        createTime: number;
        /**
         * 报告ID。
         * @example `trigger__2020-08-17T17:09:02f`
         */
        reportId: string;
        /**
         * 诊断状态。支持：SUCCESS、FAILED和RUNNING。
         * @example `SUCCESS`
         */
        state: string;
        /**
         * 诊断的实例ID。
         * @example `es-cn-abc`
         */
        instanceId: string;
        /**
         * 报告中集群整体的健康度。支持：GREEN、YELLOW、RED和UNKNOWN。
         * @example `YELLOW`
         */
        health: string;
        /**
         * 报告诊断项信息列表。
         */
        diagnoseItems: {
            /**
             * 诊断项名称。
             * @example `IndexAliasUseDiagnostic`
             */
            item: string;
            /**
             * 诊断项的健康度。支持：GREEN、YELLOW、RED和UNKNOWN。
             * @example `YELLOW`
             */
            health: string;
            /**
             * 诊断项详情。
             */
            detail: {
                /**
                 * 诊断结果类型。支持：
                 * - TEXT：文本描述
                 * - CONSOLE_API：控制台触发型
                 * - ES_API：API触发型
                 * @example `ES_API`
                 */
                type: string;
                /**
                 * 诊断项全称。
                 * @example `Number of Replica Shards`
                 */
                name: string;
                /**
                 * 诊断项说明。
                 * @example `Check whether the number of replica shards is optimal and easy to maintain`
                 */
                desc: string;
                /**
                 * 诊断结果。
                 * @example `You may need to adjust the numbers of replica shards of some indices as follows:  [geoname08 : 0 -&gt; 1][geoname09 : 0 -&gt; 1][geonametest01 : 0 -&gt; 1]`
                 */
                result: string;
                /**
                 * 诊断建议。
                 * @example `You can call the following function in the Elasticsearch API....`
                 */
                suggest: string;
            };
        }[];
    }[];
}
