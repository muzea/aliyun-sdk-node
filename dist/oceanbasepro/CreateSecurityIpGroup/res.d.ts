export interface CreateSecurityIpGroupResponse {
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
         * 白名单分组名称。
         * @example `pay_online`
         */
        SecurityIpGroupName: string;
        /**
         * IP 白名单分组中的 IP 地址或地址段。
         * 返回值 SecurityIps 是逗号分割的字符串。
         * @example `["192.***.1.1"]`
         */
        SecurityIps: string;
    };
}
