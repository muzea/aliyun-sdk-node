export interface DescribeFirewallTemplatesResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E****`
     */
    RequestId: string;
    /**
     * 防火墙模板总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 当前页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数。默认值：20。
     * @example `20`
     */
    PageSize: number;
    /**
     * 防火墙模板信息。
     */
    FirewallTemplates: {
        /**
         * 防火墙模板ID。
         * @example `ft-bcf1a7hrdq717****`
         */
        FirewallTemplateId: string;
        /**
         * 防火墙模板创建时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2024-04-10T02:10:14Z`
         */
        CreationTime: string;
        /**
         * 防火墙模板名称。
         * @example `test`
         */
        Name: string;
        /**
         * 防火墙模板描述信息。
         * @example `test`
         */
        Description: string;
        /**
         * 防火墙模板创建时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * > +8小时后是控制台上显示的到期时间。
         * @example `2024-04-29T02:01:38Z`
         */
        CreateTime: string;
        /**
         * 防火墙模板规则。
         */
        FirewallTemplateRules: {
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
             * @example `119.145.XX.XX`
             */
            SourceCidrIp: string;
            /**
             * 防火墙规则的备注。
             * @example `test`
             */
            Remark: string;
        }[];
    }[];
}
