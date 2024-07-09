export interface DeleteSecurityIpGroupResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 删除的 IP 白名单分组信息。
     */
    SecurityIpGroup: {
        /**
         * OceanBase 集群 ID。
         * @example `ob317v4uif****`
         */
        InstanceId: string;
        /**
         * 删除的 IP 安全白名单组的组名。
         * @example `paytest`
         */
        SecurityIpGroupName: string;
    };
}
