export interface ListClusterLogsRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 显示的页码，起始值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数。取值范围：1~100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
