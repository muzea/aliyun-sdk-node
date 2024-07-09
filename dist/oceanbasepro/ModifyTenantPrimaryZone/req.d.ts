export interface ModifyTenantPrimaryZoneRequest {
    /**
     * 租户 ID。
     * @example `ob2mr3oae0****`
     */
    "TenantId": string;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户的主可用区。
     * 其为集群部署可用区中的一个。
     * @example `cn-hangzhou-h`
     */
    "PrimaryZone"?: string;
    /**
     * 用户交换机 ID。
     * @example `vsw-xxx`
     */
    "UserVSwitchId"?: string;
    /**
     * Master 节点所在可用区。
     * @example `cn-hangzhou-h`
     */
    "MasterIntranetAddressZone"?: string;
    /**
     * 租户地址 ID。
     * @example `obe-4tw51gp7****`
     */
    "TenantEndpointId"?: string;
    /**
     * 租户直连地址 endpoint ID。
     * @example `obe-***`
     */
    "TenantEndpointDirectId"?: string;
    /**
     * 租户直连地址 vswitch ID。
     * @example `vsw-***`
     */
    "UserDirectVSwitchId"?: string;
    "VpcId"?: string;
    /**
     * 用户vpc的ownerId
     */
    "UserVpcOwnerId"?: string;
}
