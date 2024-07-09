export interface DeleteSecurityGroupRuleResponse {
    /**
     * Id of the request
     * @example `43E50CB7-258E-5AFF-9B93-ECC19928C699`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 状态码。
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
     * 返回数据。
     */
    Data: {
        /**
         * ID。
         * @example `2`
         */
        Id: number;
        /**
         * 安全组ID。
         * @example `sg-uf6hgwe067prhg68agfa`
         */
        SecurityGroupId: string;
        /**
         * 网关唯一标识ID。
         * @example `gw-7ea3da97b96543e19f6c597c****`
         */
        GatewayUniqueId: string;
        /**
         * 目的端安全组开放的传输层协议相关的端口范围。取值范围：
         *
         * - TCP/UDP协议：取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。例如：1/200
         * - ICMP协议：-1/-1
         * - GRE协议：-1/-1
         * - all：-1/-1
         * @example `8443/8443`
         */
        PortRange: string;
        /**
         * 传输层协议。不区分大小写。取值范围：
         *
         * - icmp
         * - gre
         * - tcp
         * - udp
         * - all：支持所有协议
         * @example `tcp`
         */
        IpProtocol: string;
        /**
         * 网关ID。
         * @example `103`
         */
        GatewayId: number;
        /**
         * 创建时间。
         * @example `2022-01-07 18:07:57`
         */
        GmtCreate: string;
        /**
         * 修改时间。
         * @example `2022-01-11T14:12:55.000+0000`
         */
        GmtModified: string;
        /**
         * 描述。
         * @example `auto-description1`
         */
        Description: string;
    };
}
