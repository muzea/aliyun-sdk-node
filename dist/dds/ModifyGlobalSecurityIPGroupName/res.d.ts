export interface ModifyGlobalSecurityIPGroupNameResponse {
    /**
     * 请求ID。
     * @example `F8CA8312-530A-413A-9129-F2BB32A8D404`
     */
    RequestId: string;
    /**
     * 全局IP白名单模板列表
     */
    GlobalSecurityIPGroup: {
        /**
         * IP白名单模板ID。
         * @example `g-qiawi8ec1urcx9swoy37`
         */
        GlobalSecurityGroupId: string;
        /**
         * IP白名单模板名称。
         * @example `def`
         */
        GlobalIgName: string;
        /**
         * 白名单模板内的IP地址。
         * > 多个IP地址需要用英文逗号隔开，所有IP白名单累积支持添加1000个IP地址或地址段。
         * @example `222.70.197.187`
         */
        GIpList: string;
        /**
         * 地域ID，您可以调用[DescribeRegions](~~61933~~)查询。
         * @example `cn-shanghai`
         */
        RegionId: string;
    }[];
}
