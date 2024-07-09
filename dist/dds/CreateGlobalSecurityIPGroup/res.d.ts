export interface CreateGlobalSecurityIPGroupResponse {
    /**
     * 请求ID。
     * @example `F8CA8312-530A-413A-9129-F2BB32A8D404`
     */
    RequestId: string;
    /**
     * IP白名单模板列表
     */
    GlobalSecurityIPGroup: {
        /**
         * IP白名单模板ID。
         * @example `g-2ifynl1jfkdlhhxgva3q`
         */
        GlobalSecurityGroupId: string;
        /**
         * IP白名单模板名称。IP白名单模板名称需满足如下要求：
         * - 由小写字母、数字、下划线（_）组成。
         * - 由字母开头、字母或数字结尾。
         * - 长度为2~120个字符。
         * @example `developer`
         */
        GlobalIgName: string;
        /**
         * 白名单模板内的IP地址。
         * > 多个IP地址需要用英文逗号隔开，所有IP白名单累积支持添加1000个IP地址或地址段。
         * @example `111.207.194.217,61.149.7.154`
         */
        GIpList: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
