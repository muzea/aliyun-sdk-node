export interface CreateAutoLiveStreamRuleRequest {
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
     * 开启和结束旁路的回调地址。回调内容请参见下文中的CallBack回调示例。
     * @example `http://example.com/callback`
     */
    "CallBack"?: string;
    /**
     * 编码选项，请参见下文中的MediaEncode枚举值。
     * @example `20`
     */
    "MediaEncode"?: number;
}
