export interface ModifyGlobalSecurityIPGroupResponse {
    /**
     * 请求ID。
     * @example `9B7BFB11-C077-4FE3-B051-F69CEB******`
     */
    RequestId: string;
    /**
     * 全局IP白名单模板信息。
     */
    GlobalSecurityIPGroup: {
        /**
         * IP白名单模板ID。
         * @example `g-zsldxfiwjmti0kcm****`
         */
        GlobalSecurityGroupId: string;
        /**
         * IP白名单模板名称。IP白名单模板名称需满足如下要求：
         * - 由小写字母、数字、下划线（_）组成。
         * - 由字母开头、字母或数字结尾。
         * - 长度为2~120个字符。
         * @example `test_123`
         */
        GlobalIgName: string;
        /**
         * 白名单模板内的IP地址。
         * > 多个IP地址需要用英文逗号隔开，所有IP白名单累积支持添加1000个IP地址或地址段。
         * @example `192.168.0.1`
         */
        GIpList: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 已关联IP白名单模板的集群列表。
         */
        DBInstances: string[];
    }[];
}
