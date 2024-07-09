export interface DescribeAvailableCpuResourceRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 租户 ID。
     * @example `t4pnum**** `
     */
    "TenantId"?: string;
    /**
     * 用户权限修改类型。  支持以下几种方式：
     * - unitNum：unit 数量；
     * - resource：资源分配。
     * @example `resource`
     */
    "ModifyType"?: string;
}
