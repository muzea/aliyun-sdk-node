export interface DescribeGlobalSecurityIPGroupResponse {
    /**
     * 请求唯一ID，如果遇到问题请提供这个请求ID，由工作人员为您排查。
     * @example `72651AF9-7897-41A7-8B67-6C15C7F26A0A`
     */
    RequestId: string;
    /**
     * 全局IP白名单模板列表。
     */
    GlobalSecurityIPGroup: {
        /**
         * IP白名单模板ID。
         * @example `g-sdgwqyp4f5j1x3qk7yvm`
         */
        GlobalSecurityGroupId: string;
        /**
         * IP白名单模板名称。
         * @example `dev_baoxian_k8s_bj`
         */
        GlobalIgName: string;
        /**
         * 白名单模板内的IP地址。
         * > 多个IP地址需要用英文逗号隔开，所有IP白名单累积支持添加1000个IP地址或地址段。
         * @example `117.12.202.19`
         */
        GIpList: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 全局IP白名单模板绑定的实例列表。
         */
        DBInstances: string[];
    }[];
}
