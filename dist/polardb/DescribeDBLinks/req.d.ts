export interface DescribeDBLinksRequest {
    /**
     * 需要查询DBLink的集群ID。
     * > 您可以通过[DescribeDBClusters](~~173433~~)接口查看PolarDB集群列表。
     * @example `pc-a*************`
     */
    "DBClusterId": string;
    /**
     * DBLink名称。不传则返回所有DBLink。
     * @example `dblink_test`
     */
    "DBLinkName"?: string;
}
