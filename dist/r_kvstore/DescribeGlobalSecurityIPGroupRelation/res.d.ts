export interface DescribeGlobalSecurityIPGroupRelationResponse {
    /**
     * 实例ID。
     * @example `r-t4n885e834f6****`
     */
    DBClusterId: string;
    /**
     * 请求ID。
     * @example `9B7BFB11-C077-4FE3-B051-F69CEB******`
     */
    RequestId: string;
    /**
     * 关联的全局IP白名单模板信息。
     */
    GlobalSecurityIPGroupRel: {
        /**
         * IP白名单模板ID。
         * @example `g-zsldxfiwjmti0kcm****`
         */
        GlobalSecurityGroupId: string;
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
         * IP白名单模板名称。
         * @example `test_123`
         */
        GlobalIgName: string;
    }[];
}
