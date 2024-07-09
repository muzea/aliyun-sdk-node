export interface CreateFirewallTemplateRulesResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 防火墙模板规则。
     */
    FirewallTemplateRules: {
        /**
         * 防火墙模板规则ID。
         * @example `ft-bcf1a7hrdq717****`
         */
        FirewallTemplateRuleId: string;
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
         * @example `171.233.XX.XX`
         */
        SourceCidrIp: string;
        /**
         * 防火墙规则的备注。
         * @example `test`
         */
        Remark: string;
    }[];
}
