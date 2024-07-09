export interface DescribeClusterTasksRequest {
    /**
     * 集群id。
     * @example `c23421cfa74454bc8b37163fd19af****`
     */
    "cluster_id"?: string;
    /**
     * 每页显示数量。
     * @example `20`
     */
    "page_size"?: number;
    /**
     * 当前页码。
     * @example `1`
     */
    "page_number"?: number;
}
