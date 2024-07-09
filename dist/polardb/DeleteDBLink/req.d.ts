export interface DeleteDBLinkRequest {
    /**
     * 待删除DBLink的源集群ID。
     * > 您可以通过[DescribeDBClusters](~~173433~~)接口查看PolarDB集群列表。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 待删除DBLink的名称。
     * @example `dblink_test`
     */
    "DBLinkName": string;
}
