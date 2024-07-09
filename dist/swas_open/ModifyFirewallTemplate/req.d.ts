export interface ModifyFirewallTemplateRequest {
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `2ad1ae67295445f598017499dc****`
     */
    "InstanceId"?: string;
    /**
     * 指定的轻量应用服务器实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000	`
     */
    "ClientToken"?: string;
    /**
     * 防火墙模板ID。
     * @example `ft-bcf1a7hrdq717****`
     */
    "FirewallTemplateId": string;
    /**
     * 防火墙模板名称。
     * @example `testName`
     */
    "Name"?: string;
    /**
     * 防火墙模板描述信息。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 防火墙规则。
     */
    "FirewallTemplateRule"?: {
        /**
         * 防火墙模板规则ID。
         * @example `eeea34d9867b4d55a4ff8d5fcfbd****`
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
         * @example `0.0.0.0/0`
         */
        SourceCidrIp: string;
        /**
         * 防火墙规则的备注。
         * @example `test`
         */
        Remark: string;
    }[];
}
