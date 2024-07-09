export interface DescribeResolverRuleResponse {
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
     * 唯一请求识别码
     * @example `13D5113B-7E34-407F-A9C1-D96CD2B04277`
     */
    RequestId: string;
    /**
     * 创建时间
     * @example `2020-07-13 10:51:44`
     */
    CreateTime: string;
    /**
     * 转发规则名称
     * @example `转发规则-test`
     */
    Name: string;
    /**
     * 转发zone名称
     * @example `example.com`
     */
    ZoneName: string;
    /**
     * 转发规则类型：
     * - OUTBOUND：转发至外部IP
     * @example `OUTBOUND`
     */
    Type: string;
    /**
     * 终端节点名称
     * @example `终端节点-test`
     */
    EndpointName: string;
    /**
     * 终端节点ID
     * @example `hra0**`
     */
    EndpointId: string;
    /**
     * 更新时间
     * @example `2020-07-13 10:51:44`
     */
    UpdateTime: string;
    /**
     * 更新时间戳
     * @example `1594608704000`
     */
    UpdateTimestamp: number;
    /**
     * 转发规则ID
     * @example `hra1**`
     */
    Id: string;
    /**
     * 创建时间戳
     * @example `1594608704000`
     */
    CreateTimestamp: number;
    /**
     * 转发规则关联的VPC列表
     */
    BindVpcs: {
        /**
         * Vpc ID
         * @example `vpc-8vbl8m-vpc-id`
         */
        VpcId: string;
        /**
         * Vpc名称
         * @example `vpc-name-test`
         */
        VpcName: string;
        /**
         * Vpc类型：
         * - STANDARD（标准Vpc）
         * - EDS（无影工作区Vpc）
         * @example `STANDARD)`
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
         * VPC归属用户ID
         * @example `324542413`
         */
        VpcUserId: string;
    }[];
}
