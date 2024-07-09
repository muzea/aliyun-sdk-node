export interface DescribeParameterModificationHistoriesRequest {
    /**
     * 集群ID。
     * @example `cds-bp18si70****10s2`
     */
    "ClusterId": string;
    /**
     * 参数修改历史列表页码。
     * 取值：大于0且不超过Integer的最大值。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 参数修改历史列表每页显示行数。
     * @example `10`
     */
    "PageSize"?: number;
}
