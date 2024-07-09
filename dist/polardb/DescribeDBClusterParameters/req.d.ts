export interface DescribeDBClusterParametersRequest {
    /**
     * 集群ID。
     * @example `pc-**********`
     */
    "DBClusterId": string;
    /**
     * 内核参数，取值范围如下：
     * - **Normal**：内核参数列表。
     * - **MigrationFromRDS**：RDS参数比对。
     * @example `Normal`
     */
    "DescribeType"?: string;
}
