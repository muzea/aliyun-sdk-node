export interface ModifyTenantTagsRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户 ID。
     * @example `t33h8y08k****`
     */
    "TenantId": string;
    /**
     * 标签值。
     * @example `[{"Key": "xxx", "Value", "xxx"}]`
     */
    "Tags": string;
}
