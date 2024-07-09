export interface DescribeDBClusterConnectivityRequest {
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
    /**
     * 集群ID。
     * @example `pc-xxxxxxxxxxxxx`
     */
    "DBClusterId": string;
    /**
     * 用户源IP地址。
     * @example `192.***.***.1`
     */
    "SourceIpAddress": string;
}
