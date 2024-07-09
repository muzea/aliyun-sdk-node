export interface ListNodesByQueueRequest {
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 队列名称。
     * @example `workq`
     */
    "QueueName": string;
    /**
     * 显示的页码，起始值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的行数。取值范围：1~50
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否异步查询。
     * @example `false`
     */
    "Async"?: boolean;
}
