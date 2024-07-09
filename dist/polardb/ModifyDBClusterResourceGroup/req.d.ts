export interface ModifyDBClusterResourceGroupRequest {
    /**
     * 原资源组ID。
     * @example `rg-**********`
     */
    "ResourceGroupId"?: string;
    /**
     * 集群ID。
     * @example `pc-*************`
     */
    "DBClusterId": string;
    /**
     * 变更后的资源组ID。
     * @example `rg-**********`
     */
    "NewResourceGroupId": string;
}
