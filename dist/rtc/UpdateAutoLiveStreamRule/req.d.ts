export interface UpdateAutoLiveStreamRuleRequest {
    /**
     * 精确匹配的频道ID列表。
     */
    "ChannelIds"?: string[];
    /**
     * 模糊匹配频道ID的前缀列表。
     */
    "ChannelIdPrefixes"?: string[];
    /**
     * 应用ID，可通过控制台创建和查询。
     * @example `eo85****`
     */
    "AppId": string;
    /**
     * 自动旁路的播流域名。自动旁路任务对应播流地址为rtmp://${domain}/${app}/${stream}。
     * - domain: 您的直播播流域名。
     * - app: live。
     * - stream: urlencode(${AppId}_${ChannelId}_${UserId}_${SourceType})，其中SourceType为输入源类型。
     * @example `rtmp://${domain}/${app}/${stream}`
     */
    "PlayDomain": string;
    /**
     * 旁路规则名称。
     * @example `testRule`
     */
    "RuleName"?: string;
    /**
     * 开启和结束旁路的回调地址。您可以通过控制台查询或调用接口[DescribeAutoLiveStreamRule](~~353198~~)获取旁路回调地址。
     * @example `http://example.com/callback`
     */
    "CallBack"?: string;
    /**
     * 编码选项。详情请参见[CreateAutoLiveStreamRule](~~353179~~)中MediaEncode枚举值。
     * @example `20`
     */
    "MediaEncode"?: number;
    /**
     * 旁路规则ID。您可以通过控制台查询或调用接口[DescribeAutoLiveStreamRule](~~353198~~)获取旁路规则ID。
     * @example `12`
     */
    "RuleId": number;
}
