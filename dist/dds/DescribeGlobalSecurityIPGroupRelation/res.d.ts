export interface DescribeGlobalSecurityIPGroupRelationResponse {
    /**
     * 实例Id
     * @example `dds-2ze6069764423m0l`
     */
    DBClusterId: string;
    /**
     * 请求唯一ID，如果遇到问题请提供这个请求ID，由工作人员为您排查。
     * @example `F8CA8312-530A-413A-9129-F2BB32A8D404`
     */
    RequestId: string;
    /**
     * 全局IP白名单模板映射关系。
     */
    GlobalSecurityIPGroupRel: {
        /**
         * IP白名单模板ID。
         * @example `g-gfurfpsh4ycbrm2avst7`
         */
        GlobalSecurityGroupId: string;
        /**
         * 白名单模板内的IP地址。
         * > 多个IP地址需要用英文逗号隔开，所有IP白名单累积支持添加1000个IP地址或地址段。
         * @example `27.16.214.10,111.60.117.181`
         */
        GIpList: string;
        /**
         * 地域ID。
         * @example `cn-hongkong`
         */
        RegionId: string;
        /**
         * IP白名单模板名称。
         * @example `dev_baoxian_k8s_bj`
         */
        GlobalIgName: string;
    }[];
}
