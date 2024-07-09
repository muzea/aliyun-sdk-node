export interface CreateGlobalSecurityIPGroupResponse {
    /**
     * 请求ID。
     * @example `5D622714-AEDD-4609-9167-F5DDD3D1****`
     */
    RequestId: string;
    /**
     * 全局IP白名单模板信息。
     */
    GlobalSecurityIPGroup: {
        /**
         * IP白名单模板ID。
         * @example `g-sdgwqyp4f5j1x3qk****`
         */
        GlobalSecurityGroupId: string;
        /**
         * IP白名单模板名称。
         * @example `test_123`
         */
        GlobalIgName: string;
        /**
         * 白名单模板内的IP地址。
         * @example `192.168.0.1,10.10.10.10,172.16.0.1`
         */
        GIpList: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
