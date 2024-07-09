export interface DescribeExporterOutputListResponse {
    /**
     * 请求ID。
     * @example `0E657631-CD6C-4C24-9637-98D000B9272C`
     */
    RequestId: string;
    /**
     * 是否成功，取值：
     * - `true`：成功
     * - `false`：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * > 状态码为200表示成功，其余取值表示失败。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `sucess`
     */
    Message: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总记录条数。
     * @example `25`
     */
    Total: number;
    Datapoints: {
        /**
         * 输出的配置列表。
         */
        Datapoint: {
            /**
             * 数据导出的类型。
             * > 目前仅支持SLS，后续将支持导出更多的产品。
             * @example `SLS`
             */
            DestType: string;
            /**
             * 创建的uninx时间戳。
             * @example `1584016495498`
             */
            CreateTime: number;
            /**
             * 配置的名称。
             * @example `exporterOut`
             */
            DestName: string;
            /**
             * 监控输出配置。
             */
            ConfigJson: {
                /**
                 * AccessKeyId。
                 * @example `LTAIpY33********`
                 */
                ak: string;
                /**
                 * SLS的数据对应的域名。
                 * @example `http://cn-qingdao-share.log.aliyuncs.com`
                 */
                endpoint: string;
                /**
                 * 日志库。
                 * @example `monitorlogstore`
                 */
                logstore: string;
                /**
                 * SLS项目。
                 * @example `exporter`
                 */
                project: string;
            };
        }[];
    };
}
