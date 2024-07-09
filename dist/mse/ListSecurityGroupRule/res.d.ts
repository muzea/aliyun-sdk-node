export interface ListSecurityGroupRuleResponse {
    /**
     * Id of the request
     * @example `9EC7BDBF-3C38-5C9C-95DD-61E298CD43E8`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息
     * @example `success`
     */
    Message: string;
    /**
     * 返回代码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 安全组授权记录ID。
         * @example `21`
         */
        Id: string;
        /**
         * 安全组ID。
         * @example `sg-bp1cg6qlyjepj0y6cf2c`
         */
        SecurityGroupId: string;
        /**
         * 端口范围。
         * @example `8000/8000`
         */
        PortRange: string;
        /**
         * 协议类型
         * @example `tcp`
         */
        IpProtocol: string;
        AuthCidrs: string[];
        /**
         * 网关ID。
         * @example `81`
         */
        GatewayId: number;
        /**
         * 网关唯一标识ID。
         * @example `gw-12a432a1f5da423997d8880bd32c304d`
         */
        GatewayUniqueId: string;
        /**
         * 创建时间
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtCreate: string;
        /**
         * 最后修改时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtModified: string;
        /**
         * 规则描述。
         * @example `测试`
         */
        Description: string;
    }[];
}
