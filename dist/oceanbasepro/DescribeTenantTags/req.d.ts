export interface DescribeTenantTagsRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户 ID 的数组字符串。
     * @example `["t5r0x2f6q****", "t33h8y08k****", "t5r41rtl7****"]`
     */
    "TenantIds": string;
    /**
     * 标签值。
     * @example `[{"Key": "xxx", "Value", "xxx"}]`
     */
    "Tags"?: string;
}
