export interface GetInstanceIpWhiteListResponse {
    /**
     * 实例ID。
     * @example `ld-bp1z3506imz2f****`
     */
    InstanceId: string;
    /**
     * 请求ID。
     * @example `1D1F6F4D-9203-53E7-84E9-5376B4657E63`
     */
    RequestId: string;
    /**
     * 白名单IP地址列表。
     */
    IpList: string[];
    /**
     * 白名单分组列表。
     */
    GroupList: {
        /**
         * 白名单分组名称。
         * @example `test`
         */
        GroupName: string;
        /**
         * 白名单IP列表。
         * @example `192.168.1.0/24`
         */
        SecurityIpList: string;
    }[];
}
