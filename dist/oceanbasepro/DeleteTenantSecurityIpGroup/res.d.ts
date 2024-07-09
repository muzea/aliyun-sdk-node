export interface DeleteTenantSecurityIpGroupResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 白名单分组信息。
     */
    SecurityIpGroup: {
        /**
         * OceanBase 集群 ID。
         * @example `ob317v4uif****`
         */
        InstanceId: string;
        /**
         * 租户 ID。
         * @example `t4louaeei****`
         */
        TenantId: string;
        /**
         * 安全白名单分组名称。
         * @example `paytest`
         */
        SecurityIpGroupName: string;
    };
}
