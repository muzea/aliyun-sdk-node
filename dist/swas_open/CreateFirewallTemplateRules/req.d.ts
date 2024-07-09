export interface CreateFirewallTemplateRulesRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询轻量应用服务器的可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 防火墙模板ID。
     * @example `ft-bcf1a7hrdq717****`
     */
    "FirewallTemplateId": string;
    /**
     * 防火墙规则。
     */
    "FirewallRule": {
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
         * @example `222.70.XX.XX`
         */
        SourceCidrIp: string;
        /**
         * 防火墙规则的备注。
         * @example `test`
         */
        Remark: string;
    }[];
}
