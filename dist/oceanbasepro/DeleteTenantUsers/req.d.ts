export interface DeleteTenantUsersRequest {
    /**
     * 租户 ID。
     * @example `t4pnum****`
     */
    "TenantId": string;
    /**
     * 用户名列表。
     * @example `["testUser"]`
     */
    "Users": string;
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
}
