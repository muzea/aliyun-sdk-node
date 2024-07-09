export interface DescribeDBClusterVersionRequest {
    /**
     * 集群ID。
     * > 您可以通过[DescribeDBClusters](~~98094~~)接口查看账号下所有集群的详细信息（如集群ID）。
     * @example `pc-****************`
     */
    "DBClusterId": string;
    /**
     * 指定返回最新版本信息或者可升级版本列表。取值范围如下：
     * - LATEST_VERSION：查询最新版本信息。
     * - AVAILABLE_VERSION：查询可升级版本列表。
     * @example `LATEST_VERSION`
     */
    "DescribeType"?: string;
}
