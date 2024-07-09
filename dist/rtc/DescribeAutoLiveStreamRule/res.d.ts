export interface DescribeAutoLiveStreamRuleResponse {
    /**
     * 请求ID。
     * @example `069BCB66-CD80-11E8-A82B-A70F78BBDC00`
     */
    RequestId: string;
    /**
     * 规则详情。
     */
    Rules: {
        /**
         * 规则状态，取值：
         * - enable：启用。
         * - disable：停用。
         * @example `disable`
         */
        Status: string;
        /**
         * 编码选项。
         * @example `20`
         */
        MediaEncode: number;
        /**
         * 自动旁路的播流域名。
         * @example `rtmp://${domain}/${app}/${stream}`
         */
        PlayDomain: string;
        /**
         * 回调地址。
         * @example `http://example.com/callBack`
         */
        CallBack: string;
        /**
         * 规则创建时间。
         * @example `2021-08-19T02:53:07Z`
         */
        CreateTime: string;
        /**
         * 规则ID。
         * @example `12`
         */
        RuleId: number;
        /**
         * 规则名称。
         * @example `testRule`
         */
        RuleName: string;
        /**
         * 精确匹配的频道ID列表。
         */
        ChannelIds: string[];
        /**
         * 模糊匹配频道ID的前缀列表。
         */
        ChannelIdPrefixes: string[];
    }[];
}
