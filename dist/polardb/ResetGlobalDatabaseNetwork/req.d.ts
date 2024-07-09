export interface ResetGlobalDatabaseNetworkRequest {
    /**
     * 地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
    /**
     * GDN ID。
     * @example `gdn-bp1fttxsrmv*****`
     */
    "GDNId": string;
    /**
     * GDN中的集群ID。
     * >您可以调用[DescribeGlobalDatabaseNetwork](~~264580~~)接口查看GDN中的集群ID。
     * @example `pc-wz9fb5nn44u1d****`
     */
    "DBClusterId": string;
}
