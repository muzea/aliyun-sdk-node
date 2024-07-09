export interface CreateFirewallRulesRequest {
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `ace0706b2ac4454d984295a94213****`
     */
    "InstanceId": string;
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询轻量应用服务器的可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端token。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 由防火墙规则信息组成的数组。
     */
    "FirewallRules"?: {
        /**
         * 传输层协议。可能值：
         * - TCP：TCP协议。
         * - UDP：UDP协议。
         * - TCP+UDP：TCP和UDP协议。
         * - ICMP: ICMP协议。
         * @example `TCP`
         */
        RuleProtocol: string;
        /**
         * 端口号。
         * - TCP/UDP：取值范围为 1~65535。使用正斜线（/）隔开起始端口和终止端口。例如：1/200。
         * - ICMP：-1/-1。
         * @example `3306`
         */
        Port: string;
        /**
         * 地址或地址段。
         * @example `47.101.XX.XX`
         */
        SourceCidrIp: string;
        /**
         * 备注。
         * @example `自定义的防火墙规则`
         */
        Remark: string;
    }[];
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 为防火墙规则指定的标签键。N 的取值范围：1~20
         * 一旦传入该值，则不允许为空字符串。最多支持 64 个字符，不能以 aliyun 和 acs:开头，不能包含 http://或者 https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 为防火墙规则指定的标签值。N 的取值范围：1~20。
         * 一旦传入该值，可以为空字符串。最多支持 64 个字符，不能包含 http://或者 https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
