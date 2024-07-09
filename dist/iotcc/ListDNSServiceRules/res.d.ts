export interface ListDNSServiceRulesResponse {
    /**
     * 请求ID。
     * @example `4A63118E-B375-5718-8F03-30F6804E1DCD`
     */
    RequestId: string;
    /**
     * 总列表条目数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * DNS授权规则列表。
     */
    DNSServiceRules: {
        /**
         * 云连接器实例ID。
         * @example `iotcc-1y6h8z7imd2yu4****`
         */
        IoTCloudConnectorId: string;
        /**
         * DNS授权规则的目标类型。取值：
         * - **Normal**：普通类型。
         * - **DNSRedirect**：重定向类型，重定向类型指将当前DNS服务地址重定向至另一个地址。
         * @example `Normal`
         */
        ServiceType: string;
        /**
         * 源DNS IP地址。包括但不限于以下取值：
         * **100.100.2.136**，**100.100.2.137**，**100.100.2.138**，**114.114.114.114**，**8.8.8.8**，**8.8.4.4**，**223.5.5.5**，**223.6.6.6**，**221.5.88.88**，**116.116.116.116**，**221.228.15.26**，**61.139.2.69**，**218.6.200.139**，**119.29.29.29**，**218.2.2.2**，**208.67.220.220**，**208.67.222.222**，**218.4.4.4**。
         * <props="china">除以上默认的DNS授权规则的IP，如有其他DNS授权规则的IP诉求，请[提交工单](https://selfservice.console.aliyun.com/ticket/category/ga/today)，并在工单中附上需要申请的DNS授权规则的IP。
         * </props>
         * <props="intl">除以上默认的DNS授权规则的IP，如有其他DNS授权规则的IP诉求，请[提交工单](https://workorder-intl.console.aliyun.com/?spm=5176.11182188.console-base-top.dworkorder.18ae4882n3v6ZW#/ticket/createIndex)，并在工单中附上需要申请的DNS授权规则的IP。</props>
         * @example `100.100.2.138`
         */
        Source: string;
        /**
         * 重定向后的DNS服务地址。
         * > 当**ServiceType**参数取值为**DNSRedirect**时，该参数必选。
         * @example `192.168.0.2`
         */
        Destination: string;
        /**
         * DNS授权规则的状态。取值：
         * - **Creating**：创建中。
         * - **Created**：创建完成。
         * - **Deleting**：删除中。
         * - **Updating**：更新中。
         * @example `Created`
         */
        DNSServiceRuleStatus: string;
        /**
         * DNS授权规则名称。
         * 长度为2~128个英文或中文字符，开头必须为大小写英文字母或中文，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
         * @example `test`
         */
        DNSServiceRuleName: string;
        /**
         * DNS授权规则描述。
         * 长度为2~256个字符，开头必须为大小写英文字母或中文，但不能为`http://`或`https://`。
         * @example `description`
         */
        DNSServiceRuleDescription: string;
        /**
         * DNS授权规则ID。
         * @example `ar-c1dk4jb73j5791****`
         */
        DNSServiceRuleId: string;
    }[];
}
