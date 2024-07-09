export interface DescribeNodeToolExecutionHistoriesRequest {
    /**
     * cassandra集群ID。
     * @example `cds-3872l6py****n9ul`
     */
    "ClusterId": string;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数。
     * @example `10`
     */
    "PageSize"?: number;
}
