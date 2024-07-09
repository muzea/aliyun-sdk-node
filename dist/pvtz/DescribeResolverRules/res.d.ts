export interface DescribeResolverRulesResponse {
    /**
     * 页面大小
     * @example `10`
     */
    PageSize: number;
    /**
     * 唯一请求识别码
     * @example `A10E03D7-808C-422D-9144-F8586C2E2297`
     */
    RequestId: string;
    /**
     * 页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总页数
     * @example `1`
     */
    TotalPages: number;
    /**
     * 总个数
     * @example `1`
     */
    TotalItems: number;
    /**
     * 转发规则列表
     */
    Rules: {
        /**
         * 转发类型。
         * - OUTBOUD：转发至外部IP
         * @example `OUTBOUND`
         */
        Type: string;
        /**
         * 更新时间
         * @example `2020-07-13 10:51:44`
         */
        UpdateTime: string;
        /**
         * 转发目标IP地址列表
         */
        ForwardIps: {
            /**
             * IP地址
             * @example `172.16.xx.xx`
             */
            Ip: string;
            /**
             * 端口号
             * @example `80`
             */
            Port: number;
        }[];
        /**
         * 终端节点名称
         * @example `终端节点-test`
         */
        EndpointName: string;
        /**
         * 创建时间
         * @example `2020-07-13 10:51:44`
         */
        CreateTime: string;
        /**
         * 转发zone名称
         * @example `example.com`
         */
        ZoneName: string;
        /**
         * 更新时间戳
         * @example `1594608704000`
         */
        UpdateTimestamp: number;
        /**
         * 关联的VPC列表
         */
        BindVpcs: {
            /**
             * VPC 名称
             * @example `vpc-name-test`
             */
            VpcName: string;
            /**
             * VPC ID
             * @example `vpc-8vbl8mpum-vpc-id`
             */
            VpcId: string;
            /**
             * VPC类型。
             * - STANDARD：标准VPC。
             * - EDS：无影工作区VPC。
             * @example `STANDARD`
             */
            VpcType: string;
            /**
             * 地域名称
             * @example `杭州测试`
             */
            RegionName: string;
            /**
             * 地域ID
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * VPC实际归属账号UID
             * @example `121098702443**`
             */
            VpcUserId: string;
        }[];
        /**
         * 终端节点ID
         * @example `hra0**`
         */
        EndpointId: string;
        /**
         * 转发规则名称
         * @example `转发规则-test`
         */
        Name: string;
        /**
         * 转发规则Id
         * @example `hra1**`
         */
        Id: string;
        /**
         * 创建时间戳
         * @example `1594608704000`
         */
        CreateTimestamp: number;
    }[];
}
