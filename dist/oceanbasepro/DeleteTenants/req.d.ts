export interface DeleteTenantsRequest {
    /**
     * 租户的 TenantId 列表。
     * 其为 JSON 格式的数组，数组中每个对象均为租户名称的字符串。
     * @example `["ob2mr3oae0****", "ob2mr3oae1****"]`
     */
    "TenantIds": string;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
}
