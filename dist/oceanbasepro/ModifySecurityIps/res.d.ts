export interface ModifySecurityIpsResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-****-****-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * IP 白名单分组信息。
     */
    SecurityIpGroup: {
        /**
         * OceanBase 集群 ID。
         * @example `ob317v4uif****`
         */
        InstanceId: string;
        /**
         * 安全组名称。
         * @example `online_paycore`
         */
        SecurityIpGroupName: string;
        /**
         * IP 安全白名单列表。
         * 其为一个 JSON 格式的数组。
         * @example `["192.***.1.2","192.***.1.1"]`
         */
        SecurityIps: string;
    };
}
