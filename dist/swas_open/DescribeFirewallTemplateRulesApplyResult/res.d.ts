export interface DescribeFirewallTemplateRulesApplyResultResponse {
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F534F`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    data: {
        /**
         * 传输层协议。可能值：
         * - TCP：TCP协议。
         * - UDP：UDP协议。
         * - TCP+UDP：TCP和UDP协议。
         * - ICMP：ICMP协议。
         * @example `TCP`
         */
        RuleProtocol: string;
        /**
         * 端口范围。端口的取值范围为1~65535。使用正斜线（/）隔开起始端口和终止端口，例如：`1024/1055`表示端口范围为1024~1055。
         * > 如果您设置的是ICMP协议，端口只能为-1/-1。
         * @example `8080`
         */
        Port: string;
        /**
         * 需要设置访问权限的源端IPv4 CIDR地址段。支持CIDR格式和IPv4格式的IP地址范围。
         * @example `119.145.XX.XX`
         */
        SourceCidrIp: string;
        /**
         * 防火墙规则的备注。
         * @example `test`
         */
        Remark: string;
        /**
         * 防火墙模板规则应用到实例的状态，可能值：
         * - Pending：实例尚未开始绑定规则。
         * - Applying：实例正在绑定规则。
         * - Success：实例绑定规则成功。
         * - PartFailed：实例存在绑定失败的规则。
         * @example `true`
         */
        Success: boolean;
        /**
         * 防火墙模板规则应用失败时的错误码。
         * @example `500`
         */
        ErrorCode: string;
        /**
         * 防火墙模板规则应用失败时的错误信息。
         * @example `An error occurred while processing your request.`
         */
        ErrorInfo: string;
    }[];
}
