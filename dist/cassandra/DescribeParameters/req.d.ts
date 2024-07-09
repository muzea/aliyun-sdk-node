export interface DescribeParametersRequest {
    /**
     * 集群ID。
     * @example `cds-j6c1zij8****994s`
     */
    "ClusterId": string;
    /**
     * 列表的页码
     * 取值：大于0且不超过Integer的最大值。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     *
     * 分页查询时设置的每页行数，默认值10。
     * @example `10`
     */
    "PageSize"?: number;
}
