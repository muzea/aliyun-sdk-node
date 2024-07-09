export interface DescribeGlobalSecurityIPGroupResponse {
    /**
     * 请求ID。
     * @example `2FF6158E-3394-4A90-B634-79C49184****`
     */
    RequestId: string;
    /**
     * IP白名单模板信息。
     */
    GlobalSecurityIPGroup: {
        /**
         * IP白名单模板ID。
         * @example `g-zsldxfiwjmti0kcm****`
         */
        GlobalSecurityGroupId: string;
        /**
         * IP白名单模板名称。
         * @example `test_123`
         */
        GlobalIgName: string;
        /**
         * 白名单模板内的IP地址。
         * > 多个IP地址需要用英文逗号（,）分隔。
         * @example `192.168.0.1,10.10.10.10`
         */
        GIpList: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 关联该IP白名单模板的实例ID集合。
         */
        DBInstances: string[];
    }[];
}
