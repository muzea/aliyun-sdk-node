export interface DescribeRecommendIndexRequest {
    /**
     * 租户 ID。
     * @example `t2mr3oae0****`
     */
    "TenantId": string;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 可在 DescribeSlowSQLList/DescribeTopSQLList 接口的返回值中获取 SQLID。
     * @example `8D6E84****0B8FB1823D199E2CA1****`
     */
    "SQLId": string;
}
