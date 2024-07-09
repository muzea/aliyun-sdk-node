export interface SwitchOverGlobalDatabaseNetworkRequest {
    /**
     * 地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
    /**
     * GDN中需要切换为主集群的集群ID。
     * 您可以调用[DescribeGlobalDatabaseNetwork](~~264580~~)接口查看GDN中的集群ID。
     * @example `pc-wz9fb5nn44u1d****`
     */
    "DBClusterId"?: string;
    /**
     * GDN ID。
     * @example `gdn-bp1fttxsrmv*****`
     */
    "GDNId": string;
    /**
     * 是否强制切换GDN的主从集群。取值范围：
     * - **true**：表示强制切换GDN的主从集群。
     * - **false**：表示不强制切换GDN的主从集群。
     * @example `false`
     */
    "Forced"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-************`
     */
    "ResourceGroupId"?: string;
}
